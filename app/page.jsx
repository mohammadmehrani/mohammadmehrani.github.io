"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation, useInView, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import content from "../data/content.json";

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
          <Reveal amount={0.3} reduceMotion={shouldReduceMotion}>
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title}</h1>
            <p className="muted">{t.hero.desc}</p>
            <div className="row-btn">
              <a className="btn" href="/pdf/M.Mehrani.pdf" target="_blank" rel="noreferrer">{t.hero.ctaResume}</a>
              <a className="btn" href="#contact">{t.hero.ctaHire}</a>
            </div>
          </Reveal>
          <Reveal className="photo-wrap" amount={0.3} reduceMotion={shouldReduceMotion}>
            <Image
              src="/images/mehrani.jpg"
              alt="Mohammad Mehrani"
              width={320}
              height={320}
              priority
              sizes="(max-width: 980px) 70vw, 320px"
            />
            <span className="chip">{t.hero.chip}</span>
          </Reveal>
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
