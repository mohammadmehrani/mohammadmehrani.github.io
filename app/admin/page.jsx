"use client";

import { useMemo, useState } from "react";
import content from "../../data/content.json";

export default function AdminPage() {
  const [lang, setLang] = useState("en");
  const [text, setText] = useState(JSON.stringify(content, null, 2));
  const [status, setStatus] = useState("Ready");

  const title = useMemo(() => (lang === "fa" ? "پنل مدیریت محتوا" : "Content Admin Panel"), [lang]);

  const validateJson = () => {
    try {
      JSON.parse(text);
      setStatus(lang === "fa" ? "JSON معتبر است" : "JSON is valid");
    } catch (error) {
      setStatus((lang === "fa" ? "خطای JSON: " : "JSON error: ") + error.message);
    }
  };

  const downloadJson = () => {
    try {
      JSON.parse(text);
      const blob = new Blob([text], { type: "application/json;charset=utf-8" });
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "content.json";
      a.click();
      URL.revokeObjectURL(a.href);
      setStatus(lang === "fa" ? "فایل دانلود شد" : "File downloaded");
    } catch (error) {
      setStatus((lang === "fa" ? "خطای JSON: " : "JSON error: ") + error.message);
    }
  };

  return (
    <main className="shell">
      <section className="card admin-panel">
        <div className="admin-head">
          <h1>{title}</h1>
          <div className="actions">
            <button onClick={() => setLang((v) => (v === "en" ? "fa" : "en"))}>{lang === "en" ? "FA" : "EN"}</button>
            <button onClick={validateJson}>{lang === "fa" ? "اعتبارسنجی" : "Validate"}</button>
            <button onClick={downloadJson}>{lang === "fa" ? "دانلود فایل" : "Download JSON"}</button>
          </div>
        </div>
        <p className="muted">
          {lang === "fa"
            ? "این صفحه فایل محور است: خروجی JSON را دانلود کنید و محتوای data/content.json را جایگزین کنید."
            : "This is file-based: download the JSON and replace data/content.json with the new file."}
        </p>
        <p className="muted">{status}</p>
        <textarea className="admin-editor" value={text} onChange={(e) => setText(e.target.value)} spellCheck={false} />
      </section>
    </main>
  );
}
