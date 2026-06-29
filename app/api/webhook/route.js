export const runtime = "nodejs";

export async function POST(req) {
  const event = req.headers.get("x-github-event");
  const id = req.headers.get("x-github-delivery");
  const body = await req.json();

  console.log(`[webhook] ${event} #${id}`);

  if (event === "star" && body.action === "created") {
    const { login } = body.sender;
    const { stargazers_count } = body.repository;
    console.log(`⭐ ${login} starred — total: ${stargazers_count}`);
  }

  if (event === "issues") {
    const { action, issue } = body;
    console.log(`📋 Issue #${issue.number} ${action}: ${issue.title}`);
  }

  if (event === "fork") {
    const { login } = body.sender;
    console.log(`🔱 ${login} forked the repo`);
  }

  if (event === "workflow_run") {
    const { name, conclusion } = body.workflow_run;
    console.log(`🔄 Workflow "${name}" completed: ${conclusion}`);
  }

  return Response.json({ ok: true, event, id });
}
