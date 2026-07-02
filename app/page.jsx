"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import content from "../data/content.json";
import activityData from "../data/activity.json";
import statsData from "../data/stats.json";
import ThreeBackground from "../components/ThreeBackground";

const GITHUB_USER = "mohammadmehrani";
const WORKER_URL = "https://github-hub.mehrani1992-882.workers.dev";

const reveal3d = {
  hidden: { opacity: 0, y: 40, rotateX: -16, scale: 0.97 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 }
};

function Reveal({ as = "div", className, children, amount = 0.2, duration = 0.55, reduceMotion = false }) {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { amount, once: false });
  const MotionTag = as === "section" ? motion.section : as === "article" ? motion.article : motion.div;

  useEffect(() => {
    if (reduceMotion) {
      controls.set("visible");
      return;
    }
    controls.start(isInView ? "visible" : "hidden");
  }, [controls, isInView, reduceMotion]);

  return (
    <MotionTag
      ref={ref}
      className={className}
      variants={reveal3d}
      initial={reduceMotion ? "visible" : "hidden"}
      animate={controls}
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

  const scrollRef = useRef(0);
  useEffect(() => {
    return smoothProgress.on("change", (v) => { scrollRef.current = v; });
  }, []);

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
            <a key={item} href="#" onClick={(e) => e.preventDefault()}>
              {item}
            </a>
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
          {!stealth && <Reveal amount={0.3} reduceMotion={shouldReduceMotion}>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="muted">{t.hero.desc}</p>
            <div className="row-btn">
              <a className="btn" href="/pdf/M.Mehrani2026.pdf" target="_blank" rel="noreferrer">{t.hero.ctaResume}</a>
              <a className="btn" href="#contact">{t.hero.ctaHire}</a>
            </div>
          </Reveal>}
          {!stealth && <Reveal className="photo-wrap" amount={0.3} reduceMotion={shouldReduceMotion}>
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
          <Reveal as="article" className="card" amount={0.2} reduceMotion={shouldReduceMotion}>
            <h2>{t.about.title}</h2>
            <p className="muted">{t.about.p1}</p>
            <p className="muted">{t.about.p2}</p>
          </Reveal>
          <Reveal as="article" className="card" amount={0.2} reduceMotion={shouldReduceMotion}>
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

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
          <h2>{t.skills.title}</h2>
          <p className="muted">{t.skills.desc}</p>
          <div className="skills">
            {t.skills.items.map(([name, level]) => (
              <Reveal key={name} amount={0.18} duration={0.5} reduceMotion={shouldReduceMotion}>
                <div className="skill-head"><span>{name}</span><strong>{level}%</strong></div>
                <div className="meter"><span style={{ width: `${level}%` }} /></div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
          <h2>{t.experience.title}</h2>
          <p className="muted">{t.experience.desc}</p>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <Reveal key={item[0] + item[1]} as="article" amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
          <h2>{t.education.title}</h2>
          <p className="muted">{t.education.desc}</p>
          <div className="timeline">
            {t.education.items.map((item) => (
              <Reveal key={item[0] + item[1]} as="article" amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
          <h2>{t.projects.title}</h2>
          <p className="muted">{t.projects.desc}</p>
          <div className="grid three">
            {t.projects.items.map((p) => (
              <Reveal key={p[1]} as="article" className="project" amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
                <Image src={p[0]} alt={p[1]} width={960} height={600} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <h3>{p[1]}</h3>
                <p className="muted">{p[2]}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
          <h2>{t.certifications.title}</h2>
          <p className="muted">{t.certifications.desc}</p>
          <div className="grid three cert-grid">
            {t.certifications.images.map((src) => (
              <Reveal key={src} amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
                <Image src={src} alt="Certificate" width={900} height={675} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
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

        <Reveal as="section" className="card" amount={0.18} reduceMotion={shouldReduceMotion}>
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
          <Reveal as="article" className="card" amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
            <h2>{t.contact.title}</h2>
            <p className="muted">{t.contact.desc}</p>
            <form className="form" action="https://formspree.io/f/mwkyjjza" method="POST">
              <input name="name" placeholder={lang === "fa" ? "\u0646\u0627\u0645 \u0634\u0645\u0627" : "Your name"} required />
              <input name="_replyto" type="email" placeholder={lang === "fa" ? "\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627" : "Your email"} required />
              <textarea name="message_body" rows="5" placeholder={lang === "fa" ? "\u067e\u06cc\u0627\u0645 \u0634\u0645\u0627" : "Message"} required />
              <button className="btn" type="submit">{lang === "fa" ? "\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645" : "Send Message"}</button>
            </form>
          </Reveal>
          <Reveal as="article" className="card" amount={0.2} duration={0.5} reduceMotion={shouldReduceMotion}>
            <h3>{t.contact.reach}</h3>
            <ul className="contacts">
              <li><a href="mailto:admin@iodeck.ir">admin@iodeck.ir</a></li>
              <li>{t.hero.location}</li>
            </ul>
            <p className="muted" style={{ marginTop: "1rem" }}>{t.contact.sites}</p>
            <ul className="contacts">
              <li><a href="https://mohammadmehrani.github.io/" target="_blank" rel="noreferrer">mohammadmehrani.github.io</a></li>
              <li><a href="https://mohammadmehrani.vercel.app/" target="_blank" rel="noreferrer">mohammadmehrani.vercel.app</a></li>
            </ul>
            <div className="map-box" style={{ marginTop: "1.5rem" }}>
              <div className="map-head">
                <h4>{t.contact.mapTitle}</h4>
                <a href={lang === "fa" ? "https://www.openstreetmap.org/?mlat=35.7605&mlon=51.3665#map=14/35.7605/51.3665" : "https://www.google.com/maps?q=35.7605,51.3665"} target="_blank" rel="noreferrer">{t.contact.mapOpen}</a>
              </div>
              <iframe
                title="Tehran map - Shahrak Gharb"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src={lang === "fa" ? "https://www.openstreetmap.org/export/embed.html?bbox=51.3500%2C35.7500%2C51.3830%2C35.7710&layer=mapnik&marker=35.7605%2C51.3665" : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d810.0!2d51.3665!3d35.7605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sen!2s"}
                style={{ width: "100%", height: 220, border: 0, borderRadius: 8, marginTop: "0.5rem" }}
              />
            </div>
          </Reveal>
        </section>}
      </main>
    </>
  );
}

