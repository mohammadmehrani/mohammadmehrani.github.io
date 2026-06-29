const WEBHOOK_SECRET = "";

async function verifyWebhook(request, body) {
  try {
    const signature = request.headers.get("x-hub-signature-256");
    if (!WEBHOOK_SECRET || !signature) return true;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
      "raw", encoder.encode(WEBHOOK_SECRET),
      { name: "HMAC", hash: "SHA-256" }, false, ["sign"]
    );
    const sig = await crypto.subtle.sign("HMAC", key, body);
    const expected = "sha256=" + [...new Uint8Array(sig)].map(b => b.toString(16).padStart(2, "0")).join("");
    return crypto.subtle.timingSafeEqual(encoder.encode(signature), encoder.encode(expected));
  } catch {
    return true;
  }
}

async function handleWebhook(request, env) {
  try {
    const rawBody = await request.arrayBuffer();
    const bodyStr = new TextDecoder().decode(rawBody);
    console.log("Webhook body:", bodyStr.substring(0, 200));
    const valid = await verifyWebhook(request, rawBody);
    if (!valid) return new Response("Invalid signature", { status: 401 });

    const payload = JSON.parse(bodyStr);
    const event = request.headers.get("x-github-event");
    const sender = payload.sender?.login || "unknown";
    const now = new Date().toISOString();
    let entry = null;

    if (event === "star" && payload.action === "created") {
      entry = { icon: "⭐", type: "star", message: `${sender} starred the repo`, date: now, count: payload.repository.stargazers_count };
    } else if (event === "fork") {
      entry = { icon: "🔱", type: "fork", message: `${sender} forked the repo`, date: now };
    } else if (event === "issues") {
      const { action, issue } = payload;
      entry = { icon: "📋", type: `issue_${action}`, message: `${sender} ${action} issue #${issue.number}: ${issue.title}`, date: now };
    } else if (event === "push") {
      const commits = payload.commits?.length || 0;
      entry = { icon: "📦", type: "push", message: `${sender} pushed ${commits} commit(s) to ${payload.ref.replace("refs/heads/", "")}`, date: now };
    } else if (event === "workflow_run") {
      const { name, conclusion } = payload.workflow_run;
      entry = { icon: "🔄", type: "workflow", message: `Workflow "${name}" ${conclusion}`, date: now };
    }

    if (entry) {
      const existing = await env.GITHUB_ACTIVITY.get("activity", "text");
      const activities = existing ? JSON.parse(existing) : [];
      activities.unshift(entry);
      if (activities.length > 50) activities.length = 50;
      await env.GITHUB_ACTIVITY.put("activity", JSON.stringify(activities));
      await env.GITHUB_ACTIVITY.put("last_event", JSON.stringify(entry));
    }

    return Response.json({ ok: true, event });
  } catch (e) {
    console.error("Webhook error:", e);
    return new Response(e.message || "Webhook error", { status: 500 });
  }
}

async function handleApi(pathname, env) {
  if (pathname === "/api/activity") {
    const data = await env.GITHUB_ACTIVITY.get("activity", "text");
    return Response.json(data ? JSON.parse(data) : []);
  }
  if (pathname === "/api/last-event") {
    const data = await env.GITHUB_ACTIVITY.get("last_event", "text");
    return Response.json(data ? JSON.parse(data) : null);
  }
  if (pathname === "/api/stats") {
    const data = await env.GITHUB_ACTIVITY.get("stats", "text");
    return Response.json(data ? JSON.parse(data) : { stars: 0, forks: 0 });
  }
  return new Response("Not found", { status: 404 });
}

async function syncStats(env) {
  try {
    const resp = await fetch(`https://api.github.com/repos/${env.GITHUB_REPO}`, {
      headers: { Authorization: `Bearer ${env.GITHUB_TOKEN_SECRET}`, "User-Agent": "github-hub-worker" }
    });
    if (!resp.ok) return;
    const data = await resp.json();
    const stats = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      open_issues: data.open_issues_count,
      watchers: data.subscribers_count,
      updated: new Date().toISOString()
    };
    await env.GITHUB_ACTIVITY.put("stats", JSON.stringify(stats));

    const existing = await env.GITHUB_ACTIVITY.get("activity", "text");
    const activities = existing ? JSON.parse(existing) : [];
    activities.unshift({ icon: "📊", type: "stats_sync", message: `Stats synced: ${stats.stars} ⭐, ${stats.forks} 🔱`, date: new Date().toISOString() });
    if (activities.length > 50) activities.length = 50;
    await env.GITHUB_ACTIVITY.put("activity", JSON.stringify(activities));
  } catch (e) {
    console.error("Stats sync failed:", e);
  }
}

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    try {
      if (request.method === "POST" && pathname === "/webhook") {
        return handleWebhook(request, env);
      }
      if (request.method === "GET" && pathname.startsWith("/api/")) {
        return handleApi(pathname, env);
      }
      if (pathname === "/health" || pathname === "/") {
        return Response.json({ status: "ok", worker: "github-hub" });
      }

      return new Response("Not found", { status: 404 });
    } catch (e) {
      console.error("Fetch error:", e);
      return new Response(e.message || "Internal error", { status: 500 });
    }
  },

  async scheduled(event, env, ctx) {
    ctx.waitUntil(syncStats(env));
  }
};
