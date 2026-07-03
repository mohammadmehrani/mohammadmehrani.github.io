"use client";

import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import content from "../data/content.json";
import activityData from "../data/activity.json";
import statsData from "../data/stats.json";

const ThreeBackground = dynamic(() => import("../components/ThreeBackground"), { ssr: false });

const GITHUB_USER = "mohammadmehrani";
const WORKER_URL = "https://github-hub.mehrani1992-882.workers.dev";

function Reveal({ as = "div", className, children, amount = 0.2, duration = 0.55 }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount, once: false });
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    if (mounted) {
      controls.start(isInView ? "visible" : "hidden");
    }
  }, [controls, isInView, mounted]);

  const MotionTag = as === "section" ? motion.section : as === "article" ? motion.article : motion.div;

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={{
        hidden: { opacity: 0, y: 40, rotateX: -16, scale: 0.97 },
        visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 }
      }}
      initial={false}
      animate={mounted ? controls : undefined}
      style={mounted ? undefined : { opacity: 1, transform: "none" }}
      transition={{ duration, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const [stealth, setStealth] = useState(false);
  const [liveActivity, setLiveActivity] = useState(activityData);
  const [liveStats, setLiveStats] = useState(statsData);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.2 });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -36]);
  const heroRotateX = useTransform(smoothProgress, [0, 1], [0, 6]);
  const heroRotateY = useTransform(smoothProgress, [0, 1], [0, -5]);

  useEffect(() => {
    const savedLang = localStorage.getItem("site_lang");
    const savedTheme = localStorage.getItem("site_theme");
    const params = new URLSearchParams(window.location.search);
    if (savedLang === "fa") setLang("fa");
    if (savedTheme === "light") setTheme("light");
    if (params.has("stealth") || localStorage.getItem("stealth") === "true") setStealth(true);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
    localStorage.setItem("site_lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("site_theme", theme);
  }, [theme]);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => navigator.serviceWorker.register("/sw.js").catch(() => {}));
    }
  }, []);

  useEffect(() => {
    let mounted = true;
    async function fetchLive() {
      try {
        const [act, st] = await Promise.all([
          fetch(WORKER_URL + "/api/activity").then(r => r.json()),
          fetch(WORKER_URL + "/api/stats").then(r => r.json())
        ]);
        if (mounted) {
          if (Array.isArray(act) && act.length > 0) setLiveActivity(act);
          if (st && typeof st.stars === "number") setLiveStats(st);
        }
      } catch {}
    }
    fetchLive();
    const interval = setInterval(fetchLive, 60000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  const t = useMemo(() => content[lang], [lang]);
  const gr = content.githubReport;

  const scrollRef = useRef(0);
  useEffect(() => {
    return smoothProgress.on("change", (v) => { scrollRef.current = v; });
  }, []);

  const totalContributions = (liveStats.user?.last_year_contributions ?? 0);
  const langTotal = (liveStats.languages ?? []).reduce((s, [, v]) => s + v, 0);

  return (
    <>
      <ThreeBackground scrollY={scrollRef} />
      <div className="terminal-bg" aria-hidden="true">
        <div className="terminal-grid" />
        <div className="terminal-scanline" />
        <div className="terminal-rain">
          {["$ kubectl get pods", "$ terraform plan", "$ git push origin main", "$ docker compose up"].map((line) => (
            <span key={line}>{line}</span>
          ))}
        </div>
      </div>
      <header className="topbar">
        <strong className="brand" style={{ visibility: stealth ? "hidden" : "visible" }}>M.Mehrani</strong>
        <nav>
          {t.nav.map((item) => (
            item === "Projects" || item === "پروژه ها"
              ? <Link key={item} href="/projects">{item}</Link>
              : <a key={item} href="#" onClick={(e) => e.preventDefault()}>{item}</a>
          ))}
        </nav>
        <div className="actions">
          <button onClick={() => { setStealth((v) => !v); localStorage.setItem("stealth", (!stealth).toString()); }}
            title={stealth ? "Show personal info" : "Hide personal info"} style={{ opacity: stealth ? 0.6 : 1 }}>
            {stealth ? "👤" : "👻"}
          </button>
          <button onClick={() => setLang((v) => (v === "en" ? "fa" : "en"))}>{lang === "en" ? "FA" : "EN"}</button>
          <button onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="shell">
        <motion.section className="hero" style={shouldReduceMotion ? undefined : { y: heroY, rotateX: heroRotateX, rotateY: heroRotateY }}>
          {!stealth && <Reveal amount={0.3}>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="muted">{t.hero.desc}</p>
            <div className="row-btn">
              <a className="btn" href="/pdf/M.Mehrani2026.pdf" target="_blank" rel="noreferrer">{t.hero.ctaResume}</a>
              <a className="btn" href="#contact">{t.hero.ctaHire}</a>
            </div>
          </Reveal>}
          {!stealth && <Reveal className="photo-wrap" amount={0.3}>
            <Image
              src="/images/mehrani.jpg"
              alt="Mohammad Mehrani"
              width={320}
              height={320}
              priority
              sizes="(max-width: 980px) 70vw, 320px"
            />
            <span className="chip">{t.hero.chip}</span>
          </Reveal>}
        </motion.section>

        <section className="grid two">
          <Reveal as="article" className="card" amount={0.2}>
            <h2>{t.about.title}</h2>
            <p className="muted">{t.about.p1}</p>
            <p className="muted">{t.about.p2}</p>
          </Reveal>
          <Reveal as="article" className="card" amount={0.2}>
            <h3>{t.about.quickTitle}</h3>
            <ul className="facts">
              {t.about.quick.map(([k, v]) => (
                <li key={k}>
                  <span>{k}</span>
                  <strong>{v}</strong>
                </li>
              ))}
            </ul>
          </Reveal>
        </section>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.skills.title}</h2>
          <p className="muted">{t.skills.desc}</p>
          <div className="skills">
            {t.skills.items.map(([name, level]) => (
              <Reveal key={name} amount={0.18} duration={0.5}>
                <div className="skill-head"><span>{name}</span><strong>{level}%</strong></div>
                <div className="meter"><span style={{ width: `${level}%` }} /></div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.experience.title}</h2>
          <p className="muted">{t.experience.desc}</p>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <Reveal key={item[0] + item[1]} as="article" amount={0.2} duration={0.5}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.education.title}</h2>
          <p className="muted">{t.education.desc}</p>
          <div className="timeline">
            {t.education.items.map((item) => (
              <Reveal key={item[0] + item[1]} as="article" amount={0.2} duration={0.5}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.projects.title}</h2>
          <p className="muted">{t.projects.desc}</p>
          <div className="grid three">
            {t.projects.items.map((p) => (
              <Reveal key={p[1]} as="article" className="project" amount={0.2} duration={0.5}>
                <Image src={p[0]} alt={p[1]} width={960} height={600} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <h3>{p[1]}</h3>
                <p className="muted">{p[2]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.certifications.title}</h2>
          <p className="muted">{t.certifications.desc}</p>
          <div className="grid three cert-grid">
            {t.certifications.images.map((src) => (
              <Reveal key={src} amount={0.2} duration={0.5}>
                <Image src={src} alt="Certificate" width={900} height={675} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* ——— GitHub Report Section ——— */}
        <Reveal as="section" className="card" amount={0.15}>
          <h2>{gr.title}</h2>
          <p className="muted">{gr.desc}</p>

          {/* Overview Grid */}
          <h3 style={{ marginTop: "1.2rem" }}>{gr.overview}</h3>
          <div className="stats-grid">
            <div className="stat-box"><strong>⭐</strong><span>{liveStats.user?.total_stars ?? liveStats.stars}</span><label>{gr.totalStars}</label></div>
            <div className="stat-box"><strong>🍴</strong><span>{liveStats.user?.total_forks ?? liveStats.forks}</span><label>{gr.totalForks}</label></div>
            <div className="stat-box"><strong>📦</strong><span>{liveStats.user?.public_repos ?? 0}</span><label>{gr.totalRepos}</label></div>
            <div className="stat-box"><strong>👥</strong><span>{liveStats.user?.followers ?? 0}</span><label>{gr.followers}</label></div>
            <div className="stat-box"><strong>🔄</strong><span>{liveStats.user?.following ?? 0}</span><label>{gr.following}</label></div>
            <div className="stat-box"><strong>🔀</strong><span>{liveStats.user?.pull_requests ?? 0}</span><label>{gr.pullRequests}</label></div>
            <div className="stat-box"><strong>📋</strong><span>{liveStats.open_issues}</span><label>{gr.issues}</label></div>
            <div className="stat-box"><strong>📈</strong><span>{totalContributions}</span><label>{gr.lastYear}</label></div>
          </div>

          {/* Contribution Activity (Last 30 Days) */}
          <h3 style={{ marginTop: "1.2rem" }}>{gr.contributions}</h3>
          {(liveStats.contribution_days ?? []).length > 0 ? (
            <div style={{ display: "flex", gap: 3, alignItems: "flex-end", minHeight: 80, padding: "0.5rem 0", flexWrap: "wrap" }}>
              {liveStats.contribution_days.map((count, i) => (
                <div key={i}
                  title={`${count} contributions`}
                  style={{
                    width: "calc(100% / 31 - 3px)",
                    minWidth: 6,
                    height: Math.max(4, count * 14),
                    background: count === 0 ? "var(--stroke)" : count > 0 && count <= 3 ? "#0e4429" : count <= 6 ? "#006d32" : count <= 10 ? "#26a641" : "#39d353",
                    borderRadius: 2,
                    transition: "height 0.3s"
                  }}
                />
              ))}
            </div>
          ) : (
            <p className="muted">{gr.noActivity}</p>
          )}

          {/* Language Breakdown */}
          <h3 style={{ marginTop: "1.2rem" }}>{gr.languages}</h3>
          {(liveStats.languages ?? []).length > 0 ? (
            <div style={{ display: "grid", gap: "0.5rem", marginTop: "0.5rem" }}>
              {liveStats.languages.map(([name, pct]) => (
                <div key={name}>
                  <div className="skill-head"><span>{name}</span><strong>{pct}%</strong></div>
                  <div className="meter"><span style={{ width: `${pct}%`, background: "linear-gradient(90deg, var(--accent-2), var(--accent))" }} /></div>
                </div>
              ))}
            </div>
          ) : (
            <p className="muted">{gr.noActivity}</p>
          )}

          {/* Recent Activity Feed */}
          <h3 style={{ marginTop: "1.2rem" }}>{gr.activityFeed}</h3>
          {liveActivity.length === 0 ? (
            <p className="muted" style={{ textAlign: "center", padding: "1rem 0" }}>{t.activity.empty}</p>
          ) : (
            <div className="activity-feed">
              {liveActivity.slice(0, 10).map((a, i) => (
                <div key={i} className="activity-item">
                  <span>{a.icon}</span>
                  <span className="muted">{a.message}</span>
                  <span className="activity-date">{new Date(a.date).toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US")}</span>
                </div>
              ))}
            </div>
          )}

          {/* Focus Areas */}
          {(liveStats.languages ?? []).length > 0 && (
            <>
              <h3 style={{ marginTop: "1.2rem" }}>{gr.focused}</h3>
              <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                {liveStats.languages.map(([name]) => (
                  <span key={name} style={{ padding: "0.25rem 0.6rem", border: "1px solid var(--stroke)", borderRadius: 999, fontSize: "0.8rem", color: "var(--muted)" }}>
                    {name}
                  </span>
                ))}
              </div>
            </>
          )}
        </Reveal>

        {/* ——— Activity Section (existing) ——— */}
        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.activity.title}</h2>
          <p className="muted">{t.activity.desc}</p>
          <div className="activity-feed">
            {liveActivity.length === 0 ? (
              <p className="muted" style={{ textAlign: "center", padding: "1rem 0" }}>{t.activity.empty}</p>
            ) : (
              liveActivity.slice(0, 10).map((a, i) => (
                <div key={i} className="activity-item">
                  <span>{a.icon}</span>
                  <span className="muted">{a.message}</span>
                  <span className="activity-date">{new Date(a.date).toLocaleDateString(lang === "fa" ? "fa-IR" : "en-US")}</span>
                </div>
              ))
            )}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18}>
          <h2>{t.stats.title}</h2>
          <p className="muted">{t.stats.desc}</p>
          <div className="stats-grid">
            <div className="stat-box"><strong>⭐</strong><span>{liveStats.stars ?? 0}</span><label>Stars</label></div>
            <div className="stat-box"><strong>🔱</strong><span>{liveStats.forks ?? 0}</span><label>Forks</label></div>
            <div className="stat-box"><strong>📋</strong><span>{liveStats.open_issues ?? 0}</span><label>Issues</label></div>
            <div className="stat-box"><strong>👁️</strong><span>{liveStats.watchers ?? 0}</span><label>Watchers</label></div>
          </div>
        </Reveal>

        {!stealth && <section id="contact" className="grid two">
          <Reveal as="article" className="card" amount={0.2} duration={0.5}>
            <h2>{t.contact.title}</h2>
            <p className="muted">{t.contact.desc}</p>
            <form className="form" action="https://formspree.io/f/mwkyjjza" method="POST">
              <input name="name" placeholder={lang === "fa" ? "نام شما" : "Your name"} required />
              <input name="_replyto" type="email" placeholder={lang === "fa" ? "ایمیل شما" : "Your email"} required />
              <textarea name="message_body" rows="5" placeholder={lang === "fa" ? "پیام شما" : "Message"} required />
              <button className="btn" type="submit">{lang === "fa" ? "ارسال پیام" : "Send Message"}</button>
            </form>
          </Reveal>
          <Reveal as="article" className="card" amount={0.2} duration={0.5}>
            <h3>{t.contact.reach}</h3>
            <ul className="contacts">
              <li><a href="mailto:mohammad@iodeck.ir">mohammad@iodeck.ir</a></li>
              <li>{t.hero.location}</li>
            </ul>
            <p className="muted" style={{ marginTop: "1rem" }}>{t.contact.sites}</p>
            <ul className="contacts">
              <li><a href="https://mohammadmehrani.github.io/" target="_blank" rel="noreferrer">mohammadmehrani.github.io</a></li>
              <li><a href="https://mohammadmehrani.vercel.app/" target="_blank" rel="noreferrer">mohammadmehrani.vercel.app</a></li>
            </ul>

          </Reveal>
        </section>}
      </main>
    </>
  );
}
