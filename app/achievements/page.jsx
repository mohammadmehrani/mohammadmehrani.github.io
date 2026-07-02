"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";

const GITHUB_USER = "mohammadmehrani";

const achievementsList = [
  { id: "starstruck", name: "Starstruck", icon: "⭐", desc: "Created a repo that has 16+ stars", steps: [16, 128, 512, 4096, 16000], earnable: true },
  { id: "pair-extraordinaire", name: "Pair Extraordinaire", icon: "🤝", desc: "Co-authored a merged pull request", steps: [1, 10, 24, 48, 100], earnable: true },
  { id: "pull-shark", name: "Pull Shark", icon: "🦈", desc: "Merged 2+ pull requests", steps: [2, 16, 128, 1024, 8192], earnable: true },
  { id: "quickdraw", name: "Quickdraw", icon: "🔫", desc: "Closed an issue/PR within 5 min of opening", steps: [1], earnable: true },
  { id: "yolo", name: "YOLO", icon: "🪂", desc: "Merged a PR without review", steps: [1], earnable: true },
  { id: "sponsoring", name: "Sponsoring", icon: "❤️", desc: "Sponsored an open source contributor", steps: [1], earnable: true },
  { id: "heart-on-your-sleeve", name: "Heart on Your Sleeve", icon: "💖", desc: "Reacted to something with ❤️", steps: [1], earnable: true },
  { id: "open-sourcerer", name: "Open Sourcerer", icon: "🧙", desc: "Had PRs merged in 10+ public repos", steps: [10, 25, 50, 100], earnable: true },
  { id: "public-sponsor", name: "Public Sponsor", icon: "💜", desc: "Sponsored open source work (public)", steps: [1, 10, 100], earnable: true },
  { id: "galaxy-brain", name: "Galaxy Brain", icon: "🧠", desc: "Provided accepted answers in GitHub Discussions", steps: [2, 8, 32, 128], earnable: true },
  { id: "mars-2020-contributor", name: "Mars 2020 Contributor", icon: "🚀", desc: "Contributed to Mars 2020 (historical)", steps: [1], earnable: false },
];

function LevelProgress({ current, steps }) {
  const earned = steps.filter(s => current >= s).length;
  const nextStep = steps.find(s => current < s);
  if (!nextStep) {
    return <div className="ach-progress"><div className="ach-progress-bar" style={{ width: "100%", background: "var(--accent)" }} /><span className="ach-progress-label">MAX</span></div>;
  }
  const prev = earned > 0 ? steps[earned - 1] : 0;
  const pct = ((current - prev) / (nextStep - prev)) * 100;
  return <div className="ach-progress"><div className="ach-progress-bar" style={{ width: Math.min(pct, 100) + "%" }} /><span className="ach-progress-label">{current}/{nextStep}</span></div>;
}

export default function AchievementsPage() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [stealth, setStealth] = useState(false);
  const [stats, setStats] = useState(null);
  const [activity, setActivity] = useState([]);
  const [prCount, setPrCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLang(localStorage.getItem("lang") || "en");
    setTheme(localStorage.getItem("theme") || "dark");
    setStealth(localStorage.getItem("stealth") === "true");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    Promise.all([
      fetch("https://api.github.com/users/" + GITHUB_USER).then(r => r.json()),
      fetch("https://api.github.com/users/" + GITHUB_USER + "/repos?per_page=100&sort=updated").then(r => r.json()),
      fetch("https://api.github.com/search/issues?q=author:" + GITHUB_USER + "+type:pr+is:merged&per_page=1").then(r => r.json()),
    ])
      .then(([user, repos, prSearch]) => {
        const totalStars = Array.isArray(repos) ? repos.reduce((s, r) => s + r.stargazers_count, 0) : 0;
        const totalForks = Array.isArray(repos) ? repos.reduce((s, r) => s + r.forks_count, 0) : 0;
        const langs = Array.isArray(repos)
          ? [...new Set(repos.filter(r => r.language).map(r => r.language))]
          : [];
        setStats({
          stars: totalStars,
          forks: totalForks,
          repos: user.public_repos || 0,
          followers: user.followers || 0,
          following: user.following || 0,
          gists: user.public_gists || 0,
          languages: langs,
          created: user.created_at,
          updated: user.updated_at,
        });
        setPrCount(prSearch.total_count || 0);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://github-hub.mehrani1992-882.workers.dev/api/activity")
      .then(r => r.json())
      .then(data => { if (Array.isArray(data)) setActivity(data.slice(0, 10)); })
      .catch(() => {});
  }, []);

  const t = useMemo(() => ({
    en: {
      title: "Achievements & Badges", desc: "GitHub profile achievements, trophies, and stats.", back: "Home",
      stats: "Stats Overview", activity: "Recent Activity", achievements: "GitHub Achievements",
      trophies: "GitHub Trophies", viewOnGitHub: "View on GitHub", progress: "Achievement Progress",
      next: "Up Next",
    },
    fa: {
      title: "دستاوردها و نشان‌ها", desc: "دستاوردها، جام‌ها و آمار پروفایل گیت‌هاب.", back: "خانه",
      stats: "نمای کلی آمار", activity: "فعالیت‌های اخیر", achievements: "دستاوردهای گیت‌هاب",
      trophies: "جام‌های گیت‌هاب", viewOnGitHub: "مشاهده در گیت‌هاب", progress: "پیشرفت دستاوردها",
      next: "مرحله بعدی",
    },
  })[lang], [lang]);

  const progressMap = useMemo(() => {
    if (!stats) return {};
    return {
      starstruck: { current: stats.stars, steps: [16, 128, 512, 4096, 16000], earned: stats.stars >= 16 },
      "pull-shark": { current: prCount, steps: [2, 16, 128, 1024, 8192], earned: prCount >= 2 },
      "pair-extraordinaire": { current: 0, steps: [1, 10, 24, 48, 100], earned: false },
      quickdraw: { current: 0, steps: [1], earned: false },
      yolo: { current: 0, steps: [1], earned: false },
      sponsoring: { current: 0, steps: [1], earned: false },
      "heart-on-your-sleeve": { current: 0, steps: [1], earned: false },
      "open-sourcerer": { current: stats.repos, steps: [10, 25, 50, 100], earned: stats.repos >= 10 },
      "public-sponsor": { current: 0, steps: [1, 10, 100], earned: false },
      "galaxy-brain": { current: 0, steps: [2, 8, 32, 128], earned: false },
      "mars-2020-contributor": { current: 0, steps: [1], earned: false },
    };
  }, [stats, prCount]);

  const sortedByProgress = useMemo(() => {
    return [...achievementsList].filter(a => a.earnable).sort((a, b) => {
      const pa = progressMap[a.id];
      const pb = progressMap[b.id];
      const aPct = pa ? pa.current / pa.steps[0] : 0;
      const bPct = pb ? pb.current / pb.steps[0] : 0;
      return bPct - aPct;
    });
  }, [progressMap]);

  const levelFor = (steps, count) => {
    for (let i = steps.length - 1; i >= 0; i--) { if (count >= steps[i]) return i + 1; }
    return 0;
  };

  return (
    <>
      <div className="terminal-bg" aria-hidden="true">
        <div className="terminal-grid" />
        <div className="terminal-scanline" />
      </div>

      <header className="topbar">
        <strong className="brand" style={{ visibility: stealth ? "hidden" : "visible" }}>M.Mehrani</strong>
        <nav>
          <Link href="/">{t.back}</Link>
          <Link href="/projects">{lang === "fa" ? "پروژه‌ها" : "Projects"}</Link>
        </nav>
        <div className="actions">
          <button onClick={() => { setStealth(v => !v); localStorage.setItem("stealth", (!stealth).toString()); }}>
            {stealth ? "👤" : "👻"}
          </button>
          <button onClick={() => { const n = lang === "en" ? "fa" : "en"; setLang(n); localStorage.setItem("lang", n); }}>
            {lang === "en" ? "FA" : "EN"}
          </button>
          <button onClick={() => { const n = theme === "dark" ? "light" : "dark"; setTheme(n); localStorage.setItem("theme", n); }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="shell">
        {/* Trophies */}
        <section className="card">
          <h2>{t.trophies}</h2>
          <p className="muted">{t.desc}</p>
          <div className="achievement-trophy-wrap">
            <img
              src={"https://github-profile-trophy.vercel.app/?username=" + GITHUB_USER + "&theme=" + (theme === "dark" ? "darkhub" : "flat") + "&no-frame=true&column=5&margin-w=15&margin-h=15"}
              alt="GitHub Trophies"
              className="trophy-img"
            />
          </div>
        </section>

        {/* Stats Overview */}
        <section className="card">
          <h2>{t.stats}</h2>
          <div className="stats-grid">
            {loading ? <p className="muted">Loading...</p> : stats && <>
              <div className="stat-box"><strong>⭐</strong><span>{stats.stars}</span><label>Stars</label></div>
              <div className="stat-box"><strong>⑂</strong><span>{stats.forks}</span><label>Forks</label></div>
              <div className="stat-box"><strong>📦</strong><span>{stats.repos}</span><label>Repos</label></div>
              <div className="stat-box"><strong>👥</strong><span>{stats.followers}</span><label>Followers</label></div>
              <div className="stat-box"><strong>🕐</strong><span>{stats.following}</span><label>Following</label></div>
              <div className="stat-box"><strong>📝</strong><span>{stats.gists}</span><label>Gists</label></div>
              <div className="stat-box"><strong>🔤</strong><span>{stats.languages?.length || 0}</span><label>Languages</label></div>
              <div className="stat-box"><strong>📅</strong><span>{stats.created ? new Date(stats.created).getFullYear() : "-"}</span><label>Since</label></div>
            </>}
          </div>
        </section>

        {/* Achievement Progress */}
        <section className="card">
          <h2>{t.progress}</h2>
          <div className="progress-list">
            {sortedByProgress.map(ach => {
              const p = progressMap[ach.id];
              if (!p) return null;
              const earned = levelFor(ach.steps, p.current);
              return (
                <div key={ach.id} className={"progress-item " + (earned > 0 ? "done" : "")}>
                  <span className="progress-icon">{ach.icon}</span>
                  <div className="progress-info">
                    <strong>{ach.name}</strong>
                    <LevelProgress current={p.current} steps={ach.steps} />
                  </div>
                  <span className="progress-status">{earned > 0 ? "✅" : "⏳"}</span>
                </div>
              );
            })}
          </div>
        </section>
        {/* GitHub Native Achievements */}
        <section className="card">
          <h2>{t.achievements}</h2>
          <p className="muted">
            {lang === "fa"
              ? "نشان‌های رسمی گیت‌هاب که با فعالیت در پلتفرم کسب می‌شوند."
              : "Official GitHub badges earned through platform activity."}
            {" "}
            <a href={"https://github.com/" + GITHUB_USER + "?tab=achievements"} target="_blank" rel="noreferrer" style={{ color: "var(--accent)" }}>
              {t.viewOnGitHub} ↗
            </a>
          </p>
          <div className="achievement-grid">
            {achievementsList.map(ach => {
              const p = progressMap[ach.id];
              const current = p ? p.current : 0;
              const lvl = levelFor(ach.steps, current);
              return (
                <div key={ach.id} className={"achievement-card " + (lvl > 0 ? "earned" : "") + (!ach.earnable ? " retired" : "")}>
                  <div className="ach-icon">{ach.icon}</div>
                  <div className="ach-body">
                    <strong>{ach.name}</strong>
                    <p className="muted">{ach.desc}</p>
                    <div className="ach-levels">
                      {ach.steps.map((s, i) => (
                        <span key={s} className={"ach-dot " + (lvl > i ? "filled" : "")} title={"Level " + (i + 1) + ": " + s} />
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Contribution Activity */}
        <section className="card">
          <h2>{t.activity}</h2>
          <div className="activity-feed">
            {activity.length === 0 ? (
              <p className="muted">{lang === "fa" ? "هنوز فعالیتی ثبت نشده." : "No recent activity."}</p>
            ) : (
              activity.map((a, i) => (
                <div key={i} className="activity-item">
                  <span>{a.icon || "📡"}</span>
                  <span>{a.message}</span>
                  <span className="activity-date">{new Date(a.date).toLocaleDateString()}</span>
                </div>
              ))
            )}
          </div>
        </section>

        {/* 3D Contribution Graph */}
        <section className="card" style={{ overflow: "hidden" }}>
          <h2>{lang === "fa" ? "گراف سه‌بعدی مشارکت" : "3D Contribution Graph"}</h2>
          <div className="contribution-graph">
            <img
              src="https://raw.githubusercontent.com/mohammadmehrani/mohammadmehrani/main/profile-3d-contrib/profile-green-animate.svg"
              alt="3D Contribution graph"
              loading="lazy"
              style={{ width: "100%", borderRadius: "0.6rem" }}
            />
          </div>
        </section>

        {/* Activity Graph */}
        <section className="card" style={{ overflow: "hidden" }}>
          <h2>{lang === "fa" ? "گراف فعالیت" : "Activity Graph"}</h2>
          <div className="contribution-graph">
            <img
              src={"https://github-readme-activity-graph.vercel.app/graph?username=" + GITHUB_USER + "&bg_color=0d1117&color=58a6ff&line=3fb950&point=f78166&area=true&hide_border=true"}
              alt="Activity graph"
              loading="lazy"
              style={{ width: "100%", borderRadius: "0.6rem" }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
