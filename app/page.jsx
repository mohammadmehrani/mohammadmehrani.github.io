"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import content from "../data/content.json";

const reveal3d = {
  hidden: { opacity: 0, y: 40, rotateX: -16, scale: 0.97 },
  visible: { opacity: 1, y: 0, rotateX: 0, scale: 1 }
};

export default function HomePage() {
  const [lang, setLang] = useState("en");
  const [theme, setTheme] = useState("dark");
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.2 });
  const heroY = useTransform(smoothProgress, [0, 1], [0, -36]);
  const heroRotateX = useTransform(smoothProgress, [0, 1], [0, 6]);
  const heroRotateY = useTransform(smoothProgress, [0, 1], [0, -5]);

  useEffect(() => {
    const savedLang = localStorage.getItem("site_lang");
    const savedTheme = localStorage.getItem("site_theme");
    if (savedLang === "fa") setLang("fa");
    if (savedTheme === "light") setTheme("light");
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

  const t = useMemo(() => content[lang], [lang]);

  return (
    <>
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
        <strong className="brand">M.Mehrani</strong>
        <nav>
          {t.nav.map((item) => (
            <a key={item} href="#" onClick={(e) => e.preventDefault()}>
              {item}
            </a>
          ))}
        </nav>
        <div className="actions">
          <button onClick={() => setLang((v) => (v === "en" ? "fa" : "en"))}>{lang === "en" ? "FA" : "EN"}</button>
          <button onClick={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}>
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </header>

      <main className="shell">
        <motion.section className="hero" style={shouldReduceMotion ? undefined : { y: heroY, rotateX: heroRotateX, rotateY: heroRotateY }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={reveal3d} transition={{ duration: 0.55, ease: "easeOut" }}>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="muted">{t.hero.desc}</p>
            <div className="row-btn">
              <a className="btn" href="/pdf/M.Mehrani.pdf" target="_blank" rel="noreferrer">{t.hero.ctaResume}</a>
              <a className="btn" href="#contact">{t.hero.ctaHire}</a>
            </div>
          </motion.div>
          <motion.div className="photo-wrap" initial="hidden" whileInView="visible" viewport={{ once: false }} variants={reveal3d} transition={{ duration: 0.55, ease: "easeOut" }}>
            <Image
              src="/images/mehrani.jpg"
              alt="Mohammad Mehrani"
              width={320}
              height={320}
              priority
              sizes="(max-width: 980px) 70vw, 320px"
            />
            <span className="chip">{t.hero.chip}</span>
          </motion.div>
        </motion.section>

        <section className="grid two">
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.55 }} className="card">
            <h2>{t.about.title}</h2>
            <p className="muted">{t.about.p1}</p>
            <p className="muted">{t.about.p2}</p>
          </motion.article>
          <motion.article initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.55 }} className="card">
            <h3>{t.about.quickTitle}</h3>
            <ul className="facts">
              {t.about.quick.map(([k, v]) => (
                <li key={k}>
                  <span>{k}</span>
                  <strong>{v}</strong>
                </li>
              ))}
            </ul>
          </motion.article>
        </section>

        <motion.section className="card" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.55 }}>
          <h2>{t.skills.title}</h2>
          <p className="muted">{t.skills.desc}</p>
          <div className="skills">
            {t.skills.items.map(([name, level]) => (
              <motion.div key={name} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.5 }}>
                <div className="skill-head"><span>{name}</span><strong>{level}%</strong></div>
                <div className="meter"><span style={{ width: `${level}%` }} /></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="card" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.55 }}>
          <h2>{t.experience.title}</h2>
          <p className="muted">{t.experience.desc}</p>
          <div className="timeline">
            {t.experience.items.map((item) => (
              <motion.article key={item[0] + item[1]} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.5 }}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="card" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.55 }}>
          <h2>{t.education.title}</h2>
          <p className="muted">{t.education.desc}</p>
          <div className="timeline">
            {t.education.items.map((item) => (
              <motion.article key={item[0] + item[1]} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.5 }}>
                <div className="meta"><strong>{item[1]}</strong><span>{item[0]}</span></div>
                <h3>{item[2]}</h3>
                <p className="muted">{item[3]}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="card" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.55 }}>
          <h2>{t.projects.title}</h2>
          <p className="muted">{t.projects.desc}</p>
          <div className="grid three">
            {t.projects.items.map((p) => (
              <motion.article key={p[1]} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.5 }} className="project">
                <Image src={p[0]} alt={p[1]} width={960} height={600} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
                <h3>{p[1]}</h3>
                <p className="muted">{p[2]}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="card" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.18 }} variants={reveal3d} transition={{ duration: 0.55 }}>
          <h2>{t.certifications.title}</h2>
          <p className="muted">{t.certifications.desc}</p>
          <div className="grid three cert-grid">
            {t.certifications.images.map((src) => (
              <motion.div key={src} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={reveal3d} transition={{ duration: 0.5 }}>
                <Image src={src} alt="Certificate" width={900} height={675} loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <section id="contact" className="grid two">
          <article className="card">
            <h2>{t.contact.title}</h2>
            <p className="muted">{t.contact.desc}</p>
            <form className="form" action="https://formspree.io/f/mwkyjjza" method="POST">
              <input name="name" placeholder={lang === "fa" ? "نام شما" : "Your name"} required />
              <input name="_replyto" type="email" placeholder={lang === "fa" ? "ایمیل شما" : "Your email"} required />
              <textarea name="message_body" rows="5" placeholder={lang === "fa" ? "پیام شما" : "Message"} required />
              <button className="btn" type="submit">{lang === "fa" ? "ارسال پیام" : "Send Message"}</button>
            </form>
          </article>
          <article className="card">
            <h3>{t.contact.reach}</h3>
            <ul className="contacts">
              <li><a href="mailto:admin@m-mehrani.ir">admin@m-mehrani.ir</a></li>
              <li>{t.hero.location}</li>
            </ul>
          </article>
        </section>
      </main>
    </>
  );
}
