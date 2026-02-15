(function () {
  const dict = {
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_certs: "Certifications",
      nav_contact: "Contact",
      hero_eyebrow: "DevOps Engineer | Platform & Cloud",
      hero_title: "I build fast, secure, and reliable cloud platforms.",
      hero_desc:
        "Mohammad Mehrani with hands-on experience in CI/CD, Kubernetes, infrastructure automation, observability, and production-grade Linux environments.",
      hero_resume: "Download Resume",
      hero_hire: "Hire Me",
      hero_chip: "Available for remote contracts",
      meta_location: "Tehran, Iran",
      meta_langs: "English | Spanish | Persian",
      about_title: "About Me",
      about_p1:
        "I focus on improving software delivery quality by designing dependable deployment workflows, secure infrastructure, and scalable cloud services. My core strengths include automation, cross-team collaboration, and incident-resistant platform design.",
      about_p2:
        "I have practical experience with Linux systems, GitOps-style workflows, container platforms, and infrastructure as code across modern cloud environments.",
      quick_title: "Quick Facts",
      quick_role: "Role",
      quick_role_val: "DevOps Engineer",
      quick_exp: "Experience",
      quick_exp_val: "Production Platforms",
      quick_focus: "Focus",
      quick_focus_val: "CI/CD, K8s, Cloud, Security",
      skills_title: "Core Skills",
      skills_desc: "Tools and capabilities used in real-world delivery pipelines.",
      skill_1: "DevOps Engineering",
      skill_2: "Kubernetes & Containers",
      skill_3: "CI/CD Pipelines",
      skill_4: "Cloud (AWS / Azure / GCP)",
      skill_5: "Terraform / IaC",
      skill_6: "Monitoring & Observability",
      exp_title: "Work Experience",
      exp_desc: "Professional history in infrastructure, support, and software delivery.",
      exp_1_period: "May 2023 - Present",
      exp_1_company: "ParsPack",
      exp_1_role: "Infrastructure Technical Support",
      exp_1_text: "PARSPACK (ABRHA), Tehran, Iran - technical support for infrastructure services and cloud operations.",
      exp_2_period: "June 2018 - March 2023",
      exp_2_company: "Tajhiz Niroo Zangan (TNZ Oil)",
      exp_2_role: "Full Stack Developer",
      exp_2_text: "Tajhiz Niroo Zangan (TNZ Oil), Tehran, Iran - full stack development and platform delivery.",
      exp_3_period: "February 2019 - April 2020",
      exp_3_company: "Enermonde",
      exp_3_role: "Support and Maintenance Services",
      exp_3_text: "Enermonde Co., Tehran, Iran - support, maintenance, and service continuity.",
      exp_4_period: "June 2018 - November 2019",
      exp_4_company: "Sama Samaneh",
      exp_4_role: "Software Technical Expert",
      exp_4_text: "Sama Samaneh Co., Tehran, Iran - software development and technical operations.",
      edu_title: "Education",
      edu_desc: "Academic background and formal education records.",
      edu_1_period: "Since 2023",
      edu_1_school: "Faran Mehr University",
      edu_1_degree: "Master's Degree in Computer Science",
      edu_1_text: "Branch: Computer Networks | GPA: 18",
      edu_2_period: "2017 - 2023",
      edu_2_school: "Faran Mehr University",
      edu_2_degree: "Bachelor's Degree in Computer Science",
      edu_2_text: "Branch: Software | GPA: 15",
      edu_3_period: "2008 - 2009",
      edu_3_school: "Rayan Kashiha",
      edu_3_degree: "Diploma in Science",
      edu_3_text: "GPA: 13",
      wp_title: "WordPress Projects",
      wp_desc: "Websites designed and delivered with WordPress.",
      projects_title: "Selected Work",
      projects_desc: "Snapshots of infrastructure and engineering delivery work.",
      project_1_title: "Cloud Migration Pipeline",
      project_1_desc: "Multi-stage deployment with quality gates, rollback strategy, and audit trails.",
      project_2_title: "Container Platform Hardening",
      project_2_desc: "Security policy enforcement, runtime controls, and image scanning integration.",
      project_3_title: "Observability Stack",
      project_3_desc: "Metrics, logs, alerts, and dashboards to reduce MTTR and improve reliability.",
      certs_title: "Certifications",
      certs_desc: "Recent certifications and training records.",
      contact_title: "Contact",
      contact_desc: "For collaboration, consulting, or full-time opportunities, send a message.",
      form_name: "Name",
      form_email: "Email",
      form_subject: "Subject",
      form_message: "Message",
      form_send: "Send Message",
      ph_name: "Your name",
      ph_email: "Your email",
      ph_subject: "Subject",
      ph_message: "Write your message",
      reach_title: "Reach Me",
      map_title: "Tehran Map (Shahrak Gharb)",
      map_open: "Open Map",
      support_title: "Support",
      support_wallet: "TON Wallet"
    },
    fa: {
      nav_about: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
      nav_skills: "\u0645\u0647\u0627\u0631\u062a \u0647\u0627",
      nav_experience: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc",
      nav_education: "\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc",
      nav_projects: "\u067e\u0631\u0648\u0698\u0647 \u0647\u0627",
      nav_certs: "\u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0647\u0627",
      nav_contact: "\u062a\u0645\u0627\u0633",
      hero_eyebrow: "\u0645\u0647\u0646\u062f\u0633 \u062f\u0648\u0627\u067e\u0633 | \u067e\u0644\u062a\u0641\u0631\u0645 \u0648 \u06a9\u0644\u0648\u062f",
      hero_title: "\u0645\u0646 \u067e\u0644\u062a\u0641\u0631\u0645 \u0647\u0627\u06cc \u0633\u0631\u06cc\u0639\u060c \u0627\u0645\u0646 \u0648 \u067e\u0627\u06cc\u062f\u0627\u0631 \u0645\u06cc \u0633\u0627\u0632\u0645.",
      hero_desc:
        "\u0645\u062d\u0645\u062f \u0645\u0647\u0631\u0627\u0646\u06cc \u0628\u0627 \u062a\u062c\u0631\u0628\u0647 \u0639\u0645\u0644\u06cc \u062f\u0631 CI/CD\u060c \u06a9\u0648\u0628\u0631\u0646\u062a\u06cc\u0632\u060c \u0627\u062a\u0648\u0645\u0627\u0633\u06cc\u0648\u0646 \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u060c \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0648 \u0645\u062f\u06cc\u0631\u06cc\u062a \u0645\u062d\u06cc\u0637 \u0647\u0627\u06cc \u0644\u06cc\u0646\u0648\u06a9\u0633\u06cc \u062f\u0631 \u0645\u0642\u06cc\u0627\u0633 \u0648\u0627\u0642\u0639\u06cc.",
      hero_resume: "\u062f\u0627\u0646\u0644\u0648\u062f \u0631\u0632\u0648\u0645\u0647",
      hero_hire: "\u0647\u0645\u06a9\u0627\u0631\u06cc \u0628\u0627 \u0645\u0646",
      hero_chip: "\u0622\u0645\u0627\u062f\u0647 \u0647\u0645\u06a9\u0627\u0631\u06cc \u0631\u06cc\u0645\u0648\u062a",
      meta_location: "\u062a\u0647\u0631\u0627\u0646\u060c \u0627\u06cc\u0631\u0627\u0646",
      meta_langs: "\u0641\u0627\u0631\u0633\u06cc | \u0627\u0646\u06af\u0644\u06cc\u0633\u06cc | \u0627\u0633\u067e\u0627\u0646\u06cc\u0627\u06cc\u06cc",
      about_title: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
      about_p1:
        "\u062a\u0645\u0631\u06a9\u0632 \u0645\u0646 \u0631\u0648\u06cc \u0628\u0647\u0628\u0648\u062f \u06a9\u06cc\u0641\u06cc\u062a \u062a\u062d\u0648\u06cc\u0644 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0628\u0627 \u0637\u0631\u0627\u062d\u06cc \u0641\u0631\u0627\u06cc\u0646\u062f\u0647\u0627\u06cc \u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0642\u0627\u0628\u0644 \u0627\u0639\u062a\u0645\u0627\u062f\u060c \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0627\u0645\u0646 \u0648 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc \u0627\u0628\u0631\u06cc \u0645\u0642\u06cc\u0627\u0633 \u067e\u0630\u06cc\u0631 \u0627\u0633\u062a. \u0646\u0642\u0627\u0637 \u0642\u0648\u062a \u0645\u0646 \u0627\u062a\u0648\u0645\u0627\u0633\u06cc\u0648\u0646\u060c \u0647\u0645\u06a9\u0627\u0631\u06cc \u062a\u06cc\u0645\u06cc \u0648 \u0637\u0631\u0627\u062d\u06cc \u067e\u0644\u062a\u0641\u0631\u0645 \u0645\u0642\u0627\u0648\u0645 \u062f\u0631 \u0628\u0631\u0627\u0628\u0631 \u062e\u0637\u0627 \u0627\u0633\u062a.",
      about_p2:
        "\u062a\u062c\u0631\u0628\u0647 \u0639\u0645\u0644\u06cc \u0645\u0646 \u0634\u0627\u0645\u0644 \u0633\u06cc\u0633\u062a\u0645 \u0647\u0627\u06cc \u0644\u06cc\u0646\u0648\u06a9\u0633\u06cc\u060c \u06af\u0631\u062f\u0634 \u06a9\u0627\u0631 GitOps\u060c \u067e\u0644\u062a\u0641\u0631\u0645 \u0647\u0627\u06cc \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631\u06cc \u0648 \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0628\u0647 \u0639\u0646\u0648\u0627\u0646 \u06a9\u062f \u062f\u0631 \u0645\u062d\u06cc\u0637 \u0647\u0627\u06cc \u0627\u0628\u0631\u06cc \u0645\u062f\u0631\u0646 \u0627\u0633\u062a.",
      quick_title: "\u0627\u0637\u0644\u0627\u0639\u0627\u062a \u0633\u0631\u06cc\u0639",
      quick_role: "\u0639\u0646\u0648\u0627\u0646",
      quick_role_val: "\u0645\u0647\u0646\u062f\u0633 \u062f\u0648\u0627\u067e\u0633",
      quick_exp: "\u062a\u062c\u0631\u0628\u0647",
      quick_exp_val: "\u067e\u0644\u062a\u0641\u0631\u0645 \u0647\u0627\u06cc \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc",
      quick_focus: "\u062a\u0645\u0631\u06a9\u0632",
      quick_focus_val: "CI/CD\u060c \u06a9\u0648\u0628\u0631\u0646\u062a\u06cc\u0632\u060c \u06a9\u0644\u0648\u062f\u060c \u0627\u0645\u0646\u06cc\u062a",
      skills_title: "\u0645\u0647\u0627\u0631\u062a \u0647\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc",
      skills_desc: "\u0627\u0628\u0632\u0627\u0631\u0647\u0627 \u0648 \u062a\u0648\u0627\u0646\u0645\u0646\u062f\u06cc \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u062f\u0631 \u067e\u0631\u0648\u0698\u0647 \u0647\u0627\u06cc \u0648\u0627\u0642\u0639\u06cc \u0627\u0633\u062a\u0641\u0627\u062f\u0647 \u0645\u06cc \u06a9\u0646\u0645.",
      skill_1: "\u0645\u0647\u0646\u062f\u0633\u06cc \u062f\u0648\u0627\u067e\u0633",
      skill_2: "\u06a9\u0648\u0628\u0631\u0646\u062a\u06cc\u0632 \u0648 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631",
      skill_3: "\u062e\u0637 \u0644\u0648\u0644\u0647 \u0647\u0627\u06cc CI/CD",
      skill_4: "\u0631\u0627\u06cc\u0627\u0646\u0634 \u0627\u0628\u0631\u06cc (AWS / Azure / GCP)",
      skill_5: "Terraform / IaC",
      skill_6: "\u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af \u0648 \u0645\u0634\u0627\u0647\u062f\u0647 \u067e\u0630\u06cc\u0631\u06cc",
      exp_title: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc",
      exp_desc: "\u0633\u0648\u0627\u0628\u0642 \u062d\u0631\u0641\u0647 \u0627\u06cc \u062f\u0631 \u062d\u0648\u0632\u0647 \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u060c \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0648 \u062a\u0648\u0633\u0639\u0647 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631.",
      exp_1_period: "\u0645\u06cc \u06f2\u06f0\u06f2\u06f3 \u062a\u0627 \u06a9\u0646\u0648\u0646",
      exp_1_company: "\u067e\u0627\u0631\u0633 \u067e\u06a9",
      exp_1_role: "\u067e\u0634\u062a\u06cc\u0628\u0627\u0646 \u0641\u0646\u06cc \u0632\u06cc\u0631\u0633\u0627\u062e\u062a",
      exp_1_text: "\u067e\u0627\u0631\u0633 \u067e\u06a9 (\u0622\u0628\u0631\u0647\u0627)\u060c \u062a\u0647\u0631\u0627\u0646 - \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0641\u0646\u06cc \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u06cc \u0648 \u0639\u0645\u0644\u06cc\u0627\u062a \u06a9\u0644\u0648\u062f.",
      exp_2_period: "\u0698\u0648\u0626\u0646 \u06f2\u06f0\u06f1\u06f8 \u062a\u0627 \u0645\u0627\u0631\u0633 \u06f2\u06f0\u06f2\u06f3",
      exp_2_company: "\u062a\u062c\u0647\u06cc\u0632 \u0646\u06cc\u0631\u0648 \u0632\u0646\u06af\u0627\u0646 (TNZ Oil)",
      exp_2_role: "\u062a\u0648\u0633\u0639\u0647 \u062f\u0647\u0646\u062f\u0647 \u0641\u0648\u0644 \u0627\u0633\u062a\u06a9",
      exp_2_text: "\u062a\u062c\u0647\u06cc\u0632 \u0646\u06cc\u0631\u0648 \u0632\u0646\u06af\u0627\u0646 (TNZ Oil)\u060c \u062a\u0647\u0631\u0627\u0646 - \u062a\u0648\u0633\u0639\u0647 \u0641\u0648\u0644 \u0627\u0633\u062a\u06a9 \u0648 \u062a\u062d\u0648\u06cc\u0644 \u067e\u0644\u062a\u0641\u0631\u0645.",
      exp_3_period: "\u0641\u0648\u0631\u06cc\u0647 \u06f2\u06f0\u06f1\u06f9 \u062a\u0627 \u0622\u0648\u0631\u06cc\u0644 \u06f2\u06f0\u06f2\u06f0",
      exp_3_company: "Enermonde",
      exp_3_role: "\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0648 \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0633\u0631\u0648\u06cc\u0633",
      exp_3_text: "\u0627\u0646\u0631\u0645\u0648\u0646\u062f\u060c \u062a\u0647\u0631\u0627\u0646 - \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc\u060c \u0646\u06af\u0647\u062f\u0627\u0631\u06cc \u0648 \u062a\u062f\u0627\u0648\u0645 \u0633\u0631\u0648\u06cc\u0633.",
      exp_4_period: "\u0698\u0648\u0626\u0646 \u06f2\u06f0\u06f1\u06f8 \u062a\u0627 \u0646\u0648\u0627\u0645\u0628\u0631 \u06f2\u06f0\u06f1\u06f9",
      exp_4_company: "\u0633\u0645\u0627 \u0633\u0627\u0645\u0627\u0646\u0647",
      exp_4_role: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633 \u0641\u0646\u06cc \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631",
      exp_4_text: "\u0633\u0645\u0627 \u0633\u0627\u0645\u0627\u0646\u0647\u060c \u062a\u0647\u0631\u0627\u0646 - \u062a\u0648\u0633\u0639\u0647 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0648 \u0639\u0645\u0644\u06cc\u0627\u062a \u0641\u0646\u06cc.",
      edu_title: "\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc",
      edu_desc: "\u067e\u06cc\u0634\u06cc\u0646\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc \u0648 \u0633\u0648\u0627\u0628\u0642 \u0622\u0645\u0648\u0632\u0634 \u0631\u0633\u0645\u06cc.",
      edu_1_period: "\u0627\u0632 \u06f2\u06f0\u06f2\u06f3",
      edu_1_school: "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0641\u0631\u0627\u0646 \u0645\u0647\u0631",
      edu_1_degree: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0627\u0631\u0634\u062f \u0639\u0644\u0648\u0645 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631",
      edu_1_text: "\u06af\u0631\u0627\u06cc\u0634: \u0634\u0628\u06a9\u0647 \u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631\u06cc | \u0645\u0639\u062f\u0644: \u06f1\u06f8",
      edu_2_period: "\u06f2\u06f0\u06f1\u06f7 \u062a\u0627 \u06f2\u06f0\u06f2\u06f3",
      edu_2_school: "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0641\u0631\u0627\u0646 \u0645\u0647\u0631",
      edu_2_degree: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0639\u0644\u0648\u0645 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631",
      edu_2_text: "\u06af\u0631\u0627\u06cc\u0634: \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 | \u0645\u0639\u062f\u0644: \u06f1\u06f5",
      edu_3_period: "\u06f2\u06f0\u06f0\u06f8 \u062a\u0627 \u06f2\u06f0\u06f0\u06f9",
      edu_3_school: "\u0631\u0627\u06cc\u0627\u0646 \u06a9\u0627\u0634\u06cc\u0647\u0627",
      edu_3_degree: "\u062f\u06cc\u067e\u0644\u0645 \u0639\u0644\u0648\u0645 \u062a\u062c\u0631\u0628\u06cc",
      edu_3_text: "\u0645\u0639\u062f\u0644: \u06f1\u06f3",
      wp_title: "\u0646\u0645\u0648\u0646\u0647 \u0633\u0627\u06cc\u062a \u0647\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633\u06cc",
      wp_desc: "\u0633\u0627\u06cc\u062a \u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0628\u0627 \u0648\u0631\u062f\u067e\u0631\u0633 \u0637\u0631\u0627\u062d\u06cc \u0648 \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0634\u062f\u0647 \u0627\u0646\u062f.",
      projects_title: "\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
      projects_desc: "\u0646\u0645\u0627\u06cc\u06cc \u0627\u0632 \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627\u06cc \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u06cc \u0648 \u062a\u062d\u0648\u06cc\u0644 \u0645\u0647\u0646\u062f\u0633\u06cc.",
      project_1_title: "\u067e\u0627\u06cc\u067e\u0644\u0627\u06cc\u0646 \u0645\u0647\u0627\u062c\u0631\u062a \u0628\u0647 \u06a9\u0644\u0648\u062f",
      project_1_desc: "\u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0686\u0646\u062f\u0645\u0631\u062d\u0644\u0647 \u0627\u06cc \u0628\u0627 \u06af\u06cc\u062a \u0647\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u06a9\u06cc\u0641\u06cc\u062a\u060c \u0627\u0633\u062a\u0631\u0627\u062a\u0698\u06cc \u0628\u0627\u0632\u06af\u0634\u062a \u0648 \u062b\u0628\u062a \u06a9\u0627\u0645\u0644 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627.",
      project_2_title: "\u0633\u062e\u062a \u0633\u0627\u0632\u06cc \u067e\u0644\u062a\u0641\u0631\u0645 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631\u06cc",
      project_2_desc: "\u0627\u0639\u0645\u0627\u0644 \u0633\u06cc\u0627\u0633\u062a \u0647\u0627\u06cc \u0627\u0645\u0646\u06cc\u062a\u06cc\u060c \u06a9\u0646\u062a\u0631\u0644 \u0632\u0645\u0627\u0646 \u0627\u062c\u0631\u0627 \u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0633\u0627\u0632\u06cc \u0627\u0633\u06a9\u0646 \u0627\u06cc\u0645\u06cc\u062c.",
      project_3_title: "\u067e\u0634\u062a\u0647 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",
      project_3_desc: "\u0645\u062a\u0631\u06cc\u06a9\u060c \u0644\u0627\u06af\u060c \u0647\u0634\u062f\u0627\u0631 \u0648 \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0628\u0631\u0627\u06cc \u06a9\u0627\u0647\u0634 \u0632\u0645\u0627\u0646 \u0631\u0641\u0639 \u062e\u0637\u0627 \u0648 \u0627\u0641\u0632\u0627\u06cc\u0634 \u067e\u0627\u06cc\u062f\u0627\u0631\u06cc.",
      certs_title: "\u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0647\u0627",
      certs_desc: "\u0622\u062e\u0631\u06cc\u0646 \u062f\u0648\u0631\u0647 \u0647\u0627 \u0648 \u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0647\u0627\u06cc \u062d\u0631\u0641\u0647 \u0627\u06cc.",
      contact_title: "\u062a\u0645\u0627\u0633",
      contact_desc: "\u0628\u0631\u0627\u06cc \u0647\u0645\u06a9\u0627\u0631\u06cc\u060c \u0645\u0634\u0627\u0648\u0631\u0647 \u06cc\u0627 \u0641\u0631\u0635\u062a \u0647\u0627\u06cc \u0634\u063a\u0644\u06cc \u067e\u06cc\u0627\u0645 \u0628\u0641\u0631\u0633\u062a\u06cc\u062f.",
      form_name: "\u0646\u0627\u0645",
      form_email: "\u0627\u06cc\u0645\u06cc\u0644",
      form_subject: "\u0645\u0648\u0636\u0648\u0639",
      form_message: "\u067e\u06cc\u0627\u0645",
      form_send: "\u0627\u0631\u0633\u0627\u0644 \u067e\u06cc\u0627\u0645",
      ph_name: "\u0646\u0627\u0645 \u0634\u0645\u0627",
      ph_email: "\u0627\u06cc\u0645\u06cc\u0644 \u0634\u0645\u0627",
      ph_subject: "\u0645\u0648\u0636\u0648\u0639",
      ph_message: "\u067e\u06cc\u0627\u0645 \u062e\u0648\u062f \u0631\u0627 \u0628\u0646\u0648\u06cc\u0633\u06cc\u062f",
      reach_title: "\u0631\u0627\u0647 \u0647\u0627\u06cc \u0627\u0631\u062a\u0628\u0627\u0637\u06cc",
      map_title: "\u0646\u0642\u0634\u0647 \u062a\u0647\u0631\u0627\u0646 (\u0634\u0647\u0631\u06a9 \u063a\u0631\u0628)",
      map_open: "\u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u0646\u0642\u0634\u0647",
      support_title: "\u062d\u0645\u0627\u06cc\u062a",
      support_wallet: "\u06a9\u06cc\u0641 \u067e\u0648\u0644 TON"
    }
  };

  dict.en.site_title = "Mohammad Mehrani | DevOps Engineer";
  dict.en.meta_description = "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist";
  dict.fa.site_title = "\u0645\u062d\u0645\u062f \u0645\u0647\u0631\u0627\u0646\u06cc | \u0645\u0647\u0646\u062f\u0633 \u062f\u0648\u0627\u067e\u0633";
  dict.fa.meta_description =
    "\u0645\u062d\u0645\u062f \u0645\u0647\u0631\u0627\u0646\u06cc | \u0645\u0647\u0646\u062f\u0633 \u062f\u0648\u0627\u067e\u0633\u060c \u067e\u0644\u062a\u0641\u0631\u0645 \u0648 \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0627\u0628\u0631\u06cc";
  dict.en.theme_light = "Light";
  dict.en.theme_dark = "Dark";
  dict.en.aria_switch_lang = "Switch language";
  dict.en.aria_toggle_theme = "Toggle theme";
  dict.fa.theme_light = "\u0631\u0648\u0634\u0646";
  dict.fa.theme_dark = "\u062a\u0627\u0631\u06cc\u06a9";
  dict.fa.aria_switch_lang = "\u062a\u063a\u06cc\u06cc\u0631 \u0632\u0628\u0627\u0646";
  dict.fa.aria_toggle_theme = "\u062a\u063a\u06cc\u06cc\u0631 \u062a\u0645";

  const nav = document.getElementById("mainNav");
  const year = document.getElementById("year");
  const metaDescription = document.getElementById("metaDescription");
  const langToggle = document.getElementById("langToggle");
  const langToggleText = document.getElementById("langToggleText");
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleText = document.getElementById("themeToggleText");
  const themeIcon = document.getElementById("themeIcon");
  const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const i18nPlaceholderNodes = Array.from(document.querySelectorAll("[data-i18n-placeholder]"));
  const meters = Array.from(document.querySelectorAll(".meter span"));
  const LANG_KEY = "site_lang";
  const THEME_KEY = "site_theme";
  let currentLang = "en";
  let currentTheme = "dark";

  if (year) year.textContent = new Date().getFullYear();

  const toggleNav = () => {
    if (!nav) return;
    nav.classList.toggle("scrolled", window.scrollY > 18);
  };
  toggleNav();
  let navTicking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (navTicking) return;
      navTicking = true;
      window.requestAnimationFrame(() => {
        toggleNav();
        navTicking = false;
      });
    },
    { passive: true }
  );

  function updateControlLabels() {
    const tr = dict[currentLang] || dict.en;
    if (langToggleText) {
      langToggleText.textContent = currentLang === "fa" ? "EN" : "FA";
    }
    if (themeToggleText) {
      themeToggleText.textContent = currentTheme === "dark" ? tr.theme_light : tr.theme_dark;
    }
    if (themeIcon) {
      themeIcon.className = currentTheme === "dark" ? "bi bi-sun" : "bi bi-moon-stars";
    }
    if (langToggle && tr.aria_switch_lang) {
      langToggle.setAttribute("aria-label", tr.aria_switch_lang);
    }
    if (themeToggle && tr.aria_toggle_theme) {
      themeToggle.setAttribute("aria-label", tr.aria_toggle_theme);
    }
  }

  function applyTheme(theme) {
    currentTheme = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (localStorage.getItem(THEME_KEY) !== currentTheme) {
      localStorage.setItem(THEME_KEY, currentTheme);
    }
    updateControlLabels();
  }

  function applyLanguage(lang, animate = true) {
    const safeLang = lang === "fa" ? "fa" : "en";
    const tr = dict[safeLang];
    currentLang = safeLang;

    if (animate) {
      document.body.classList.add("lang-transition");
      window.setTimeout(() => document.body.classList.remove("lang-transition"), 220);
    }

    document.documentElement.lang = safeLang;
    document.documentElement.dir = safeLang === "fa" ? "rtl" : "ltr";

    i18nNodes.forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (tr[key]) el.textContent = tr[key];
    });

    i18nPlaceholderNodes.forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (tr[key]) el.setAttribute("placeholder", tr[key]);
    });
    if (tr.site_title) document.title = tr.site_title;
    if (metaDescription && tr.meta_description) {
      metaDescription.setAttribute("content", tr.meta_description);
    }

    if (localStorage.getItem(LANG_KEY) !== safeLang) {
      localStorage.setItem(LANG_KEY, safeLang);
    }
    updateControlLabels();
  }

  langToggle?.addEventListener("click", () => {
    applyLanguage(currentLang === "en" ? "fa" : "en");
  });
  themeToggle?.addEventListener("click", () => {
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });

  const preferredTheme =
    localStorage.getItem(THEME_KEY) ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  applyTheme(preferredTheme);

  const preferredLang = localStorage.getItem(LANG_KEY) || "en";
  applyLanguage(preferredLang, false);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveDataMode = !!(navigator.connection && navigator.connection.saveData);
  const lowPowerDevice =
    window.innerWidth < 992 ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    ("ontouchstart" in window && (navigator.maxTouchPoints || 0) > 0);

  // Lightweight fallback is intentionally default for smoother scroll on mid/low devices.
  document.body.classList.add("no-webgl");

  function initParallax() {
    if (reduceMotion || saveDataMode || lowPowerDevice) return;

    const layers = [
      { el: document.querySelector(".orb-1"), ySpeed: -0.08, xSpeed: 0.02 },
      { el: document.querySelector(".orb-2"), ySpeed: 0.06, xSpeed: -0.02 },
      { el: document.querySelector(".bg-grid"), ySpeed: -0.025, xSpeed: 0 }
    ].filter((layer) => layer.el);
    if (!layers.length) return;

    let latestY = window.scrollY || 0;
    let ticking = false;

    const render = () => {
      ticking = false;
      const y = Math.min(latestY, 2400);
      layers.forEach((layer) => {
        const tx = y * layer.xSpeed;
        const ty = y * layer.ySpeed;
        layer.el.style.transform = `translate3d(${tx.toFixed(2)}px, ${ty.toFixed(2)}px, 0)`;
      });
    };

    const onScroll = () => {
      latestY = window.scrollY || 0;
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(render);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    render();
  }

  function initReveal() {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));
    if (!revealEls.length) return;

    const heroReveal = revealEls.filter((el) => el.closest("#home"));
    const scrollReveal = revealEls.filter((el) => !el.closest("#home"));
    heroReveal.forEach((el) => el.classList.add("in"));

    if (!scrollReveal.length) return;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      scrollReveal.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
    );

    scrollReveal.forEach((el) => io.observe(el));
  }

  function initMeters() {
    const fill = (meter) => {
      const level = Number(meter.dataset.level || 0);
      meter.style.width = `${Math.max(0, Math.min(100, level))}%`;
    };

    if (!meters.length) return;
    if (!("IntersectionObserver" in window) || reduceMotion) {
      meters.forEach(fill);
      return;
    }

    const io = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          fill(entry.target);
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -4% 0px", threshold: 0.15 }
    );

    meters.forEach((meter) => io.observe(meter));
  }

  initParallax();
  initReveal();
  initMeters();
})();
