"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import staticRepos from "../../data/repos.json";

const GITHUB_USER = "mohammadmehrani";

const languageColors = {
  JavaScript: "#f1e05a", TypeScript: "#3178c6", Python: "#3572A5", Go: "#00ADD8",
  Rust: "#dea584", HCL: "#844fba", PowerShell: "#012456", CSS: "#563d7c",
  HTML: "#e34c26", Dart: "#00B4AB", Kotlin: "#A97BFF", Shell: "#89e051",
};

function RepoBadge({ label, value, color }) {
  return (
    <span className="repo-badge" style={{ "--badge-color": color }}>
      {value}
    </span>
  );
}

export default function ProjectsPage() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [stealth, setStealth] = useState(false);
  const [repos, setRepos] = useState(staticRepos);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [showForks, setShowForks] = useState(false);

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
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100&type=owner`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setRepos(data.map((r) => ({
            name: r.name, desc: r.description, stars: r.stargazers_count,
            forks: r.forks_count, lang: r.language, license: r.license?.spdx_id,
            updated: r.updated_at, fork: r.fork, topics: r.topics || [],
            url: r.html_url, full_name: r.full_name,
          })));
        }
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  const filtered = useMemo(() => {
    let list = showForks ? repos : repos.filter((r) => !r.fork);
    if (filter) {
      const q = filter.toLowerCase();
      list = list.filter((r) => r.name.toLowerCase().includes(q) || (r.desc && r.desc.toLowerCase().includes(q)));
    }
    return list;
  }, [repos, filter, showForks]);

  const t = useMemo(() => ({
    en: { title: "Projects", desc: "All public repositories with real-time badges from GitHub.", search: "Search repos...", showForks: "Show forks", back: "Back to Home" },
    fa: { title: "پروژه‌ها", desc: "تمام ریپازیتوری‌های عمومی با بج‌های لحظه‌ای از گیت‌هاب.", search: "جستجوی ریپازیتوری...", showForks: "نمایش فورک‌ها", back: "بازگشت به خانه" },
  })[lang], [lang]);

  return (
    <>
      <div className="terminal-bg" aria-hidden="true">
        <div className="terminal-grid" />
        <div className="terminal-scanline" />
      </div>

      <header className="topbar">
        <strong className="brand" style={{ visibility: stealth ? "hidden" : "visible" }}>M.Mehrani</strong>
        <nav>
          <Link href="/">{lang === "fa" ? "خانه" : "Home"}</Link>
        </nav>
        <div className="actions">
          <button onClick={() => { setStealth((v) => !v); localStorage.setItem("stealth", (!stealth).toString()); }}>
            {stealth ? "👤" : "👻"}
          </button>
          <button onClick={() => { const next = lang === "en" ? "fa" : "en"; setLang(next); localStorage.setItem("lang", next); }}>
            {lang === "en" ? "FA" : "EN"}
          </button>
          <button onClick={() => { const next = theme === "dark" ? "light" : "dark"; setTheme(next); localStorage.setItem("theme", next); }}>
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <main className="shell">
        <section className="card">
          <h2>{t.title}</h2>
          <p className="muted">{t.desc}</p>

          <div className="projects-toolbar">
            <input
              type="text"
              placeholder={t.search}
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="projects-search"
            />
            <label className="projects-toggle">
              <input type="checkbox" checked={showForks} onChange={(e) => setShowForks(e.target.checked)} />
              <span>{t.showForks}</span>
            </label>
          </div>

          {loading && <p className="muted" style={{ textAlign: "center", padding: "2rem" }}>Loading...</p>}

          <div className="projects-grid">
            {filtered.map((repo) => (
              <article key={repo.name} className="project-card">
                <div className="project-card-head">
                  <a href={repo.url || `https://github.com/${GITHUB_USER}/${repo.name}`} target="_blank" rel="noreferrer">
                    <h3>{repo.name}</h3>
                  </a>
                  {repo.fork && <span className="fork-label">fork</span>}
                </div>
                <p className="muted project-desc">{repo.desc || (lang === "fa" ? "بدون توضیحات" : "No description")}</p>
                <div className="badge-row">
                  <RepoBadge label="⭐" value={repo.stars} />
                  <RepoBadge label="⑂" value={repo.forks} />
                  {repo.lang && (
                    <RepoBadge
                      label=""
                      value={repo.lang}
                      color={languageColors[repo.lang] || "#888"}
                    />
                  )}
                  {repo.license && <RepoBadge label="📝" value={repo.license} />}
                </div>
                <div className="badge-row">
                  <RepoBadge label="🕐" value={new Date(repo.updated).toLocaleDateString()} />
                </div>
                <div className="project-actions">
                  <a href={"https://github.com/codespaces/new?repo=" + encodeURIComponent(repo.full_name)} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                    <span>Open in Codespaces</span>
                  </a>
                  <a href={"https://github.dev/" + repo.full_name} target="_blank" rel="noreferrer" className="btn btn-sm btn-outline">
                    <span>Open in VS Code</span>
                  </a>
                </div>

                {repo.topics?.length > 0 && (
                  <div className="topic-row">
                    {repo.topics.map((t) => (
                      <span key={t} className="topic-chip">{t}</span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>

          {!loading && filtered.length === 0 && (
            <p className="muted" style={{ textAlign: "center", padding: "2rem" }}>
              {lang === "fa" ? "نتیجه‌ای یافت نشد" : "No repos found"}
            </p>
          )}
        </section>
      </main>
    </>
  );
}

