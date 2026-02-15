(function () {
  const dict = {
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_projects: "Projects",
      nav_experience: "Experience",
      nav_education: "Education",
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
      projects_title: "Selected Work",
      projects_desc: "Snapshots of infrastructure and engineering delivery work.",
      project_1_title: "Cloud Migration Pipeline",
      project_1_desc: "Multi-stage deployment with quality gates, rollback strategy, and audit trails.",
      project_2_title: "Container Platform Hardening",
      project_2_desc: "Security policy enforcement, runtime controls, and image scanning integration.",
      project_3_title: "Observability Stack",
      project_3_desc: "Metrics, logs, alerts, and dashboards to reduce MTTR and improve reliability.",
      wp_title: "WordPress Websites",
      wp_desc: "Selected WordPress websites designed and delivered in production.",
      wp_1_title: "iranipex.com",
      wp_1_desc: "WordPress website design and implementation.",
      wp_2_title: "tnzoil.com",
      wp_2_desc: "Corporate WordPress website for energy sector.",
      wp_3_title: "fealef.ir",
      wp_3_desc: "Legal consultancy website built with WordPress.",
      wp_4_title: "sheydabar.com",
      wp_4_desc: "WordPress website design and deployment.",
      exp_title: "Work Experience",
      exp_desc: "Professional positions and key responsibilities.",
      exp_1_period: "May 2023 - Present",
      exp_1_role: "Technical Support",
      exp_1_company: "PARSPACK (ABRHA) - Tehran, Iran",
      exp_1_desc:
        "Infrastructure technical support for cloud hosting services, troubleshooting, incident handling, and service reliability operations.",
      exp_2_period: "June 2018 - March 2023",
      exp_2_role: "Full Stack Developer",
      exp_2_company: "Tajhiz Niroo Zangan (TNZ Oil) - Tehran, Iran",
      exp_2_desc:
        "Full stack development and infrastructure operations across Linux-based services and production web platforms.",
      exp_3_period: "February 2019 - April 2020",
      exp_3_role: "Full Stack Programmer",
      exp_3_company: "Enermonde Co. - Tehran, Iran",
      exp_3_desc: "Support and maintenance services for enterprise applications and operational systems.",
      exp_4_period: "June 2018 - November 2019",
      exp_4_role: "Software Development",
      exp_4_company: "Sama Samaneh Co. - Tehran, Iran",
      exp_4_desc: "Software technical expert role focused on delivery, troubleshooting, and technical support.",
      exp_5_period: "January 2017 - July 2017",
      exp_5_role: "SysOps",
      exp_5_company: "Shatel Mobile - Tehran, Iran",
      exp_5_desc: "Python development and Linux operation support for internal services.",
      edu_title: "Education",
      edu_desc: "Academic background and formal studies.",
      edu_1_period: "Since 2023",
      edu_1_degree: "Master's Degree in Computer Science",
      edu_1_school: "Faran Mehr University",
      edu_1_desc: "Branch: Computer Networks | GPA: 18",
      edu_2_period: "2017 - 2023",
      edu_2_degree: "Bachelor's Degree in Computer Science",
      edu_2_school: "Faran Mehr University",
      edu_2_desc: "Branch: Software | GPA: 15",
      edu_3_period: "2008 - 2009",
      edu_3_degree: "Diploma in Science",
      edu_3_school: "Rayan Kashiha",
      edu_3_desc: "High school diploma record.",
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
      support_title: "Support",
      support_wallet: "TON Wallet"
    },
    fa: {
      nav_about: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
      nav_skills: "\u0645\u0647\u0627\u0631\u062a \u0647\u0627",
      nav_projects: "\u067e\u0631\u0648\u0698\u0647 \u0647\u0627",
      nav_experience: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc",
      nav_education: "\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc",
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
        "\u062a\u0645\u0631\u06a9\u0632 \u0645\u0646 \u0631\u0648\u06cc \u0628\u0647\u0628\u0648\u062f \u06a9\u06cc\u0641\u06cc\u062a \u062a\u062d\u0648\u06cc\u0644 \u0646\u0631\u0645 \u0627\u0641\u0632\u0627\u0631 \u0628\u0627 \u0637\u0631\u0627\u062d\u06cc \u0641\u0631\u0627\u06cc\u0646\u062f\u0647\u0627\u06cc \u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0642\u0627\u0628\u0644 \u0627\u0639\u062a\u0645\u0627\u062f\u060c \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0627\u0645\u0646 \u0648 \u0633\u0631\u0648\u06cc\u0633 \u0647\u0627\u06cc \u0627\u0628\u0631\u06cc \u0645\u0642\u06cc\u0627\u0633 \u067e\u0630\u06cc\u0631 \u0627\u0633\u062a.",
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
      projects_title: "\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
      projects_desc: "\u0646\u0645\u0627\u06cc\u06cc \u0627\u0632 \u0641\u0639\u0627\u0644\u06cc\u062a \u0647\u0627\u06cc \u0632\u06cc\u0631\u0633\u0627\u062e\u062a\u06cc \u0648 \u062a\u062d\u0648\u06cc\u0644 \u0645\u0647\u0646\u062f\u0633\u06cc.",
      project_1_title: "\u067e\u0627\u06cc\u067e\u0644\u0627\u06cc\u0646 \u0645\u0647\u0627\u062c\u0631\u062a \u0628\u0647 \u06a9\u0644\u0648\u062f",
      project_1_desc: "\u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0686\u0646\u062f\u0645\u0631\u062d\u0644\u0647 \u0627\u06cc \u0628\u0627 \u06af\u06cc\u062a \u0647\u0627\u06cc \u06a9\u0646\u062a\u0631\u0644 \u06a9\u06cc\u0641\u06cc\u062a\u060c \u0627\u0633\u062a\u0631\u0627\u062a\u0698\u06cc \u0628\u0627\u0632\u06af\u0634\u062a \u0648 \u062b\u0628\u062a \u06a9\u0627\u0645\u0644 \u0631\u0648\u06cc\u062f\u0627\u062f\u0647\u0627.",
      project_2_title: "\u0633\u062e\u062a \u0633\u0627\u0632\u06cc \u067e\u0644\u062a\u0641\u0631\u0645 \u06a9\u0627\u0646\u062a\u06cc\u0646\u0631\u06cc",
      project_2_desc: "\u0627\u0639\u0645\u0627\u0644 \u0633\u06cc\u0627\u0633\u062a \u0647\u0627\u06cc \u0627\u0645\u0646\u06cc\u062a\u06cc\u060c \u06a9\u0646\u062a\u0631\u0644 \u0632\u0645\u0627\u0646 \u0627\u062c\u0631\u0627 \u0648 \u06cc\u06a9\u067e\u0627\u0631\u0686\u0647 \u0633\u0627\u0632\u06cc \u0627\u0633\u06a9\u0646 \u0627\u06cc\u0645\u06cc\u062c.",
      project_3_title: "\u067e\u0634\u062a\u0647 \u0645\u0627\u0646\u06cc\u062a\u0648\u0631\u06cc\u0646\u06af",
      project_3_desc: "\u0645\u062a\u0631\u06cc\u06a9\u060c \u0644\u0627\u06af\u060c \u0647\u0634\u062f\u0627\u0631 \u0648 \u062f\u0627\u0634\u0628\u0648\u0631\u062f \u0628\u0631\u0627\u06cc \u06a9\u0627\u0647\u0634 \u0632\u0645\u0627\u0646 \u0631\u0641\u0639 \u062e\u0637\u0627 \u0648 \u0627\u0641\u0632\u0627\u06cc\u0634 \u067e\u0627\u06cc\u062f\u0627\u0631\u06cc.",
      wp_title: "\u0633\u0627\u06cc\u062a\u200c\u0647\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633\u06cc",
      wp_desc: "\u0646\u0645\u0648\u0646\u0647 \u0633\u0627\u06cc\u062a\u200c\u0647\u0627\u06cc \u0648\u0631\u062f\u067e\u0631\u0633\u06cc \u0637\u0631\u0627\u062d\u06cc \u0648 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0634\u062f\u0647.",
      wp_1_title: "iranipex.com",
      wp_1_desc: "\u0637\u0631\u0627\u062d\u06cc \u0648 \u067e\u06cc\u0627\u062f\u0647\u200c\u0633\u0627\u0632\u06cc \u0633\u0627\u06cc\u062a \u0648\u0631\u062f\u067e\u0631\u0633\u06cc.",
      wp_2_title: "tnzoil.com",
      wp_2_desc: "\u0633\u0627\u06cc\u062a \u0634\u0631\u06a9\u062a\u06cc \u0648\u0631\u062f\u067e\u0631\u0633 \u062f\u0631 \u062d\u0648\u0632\u0647 \u0627\u0646\u0631\u0698\u06cc.",
      wp_3_title: "fealef.ir",
      wp_3_desc: "\u0633\u0627\u06cc\u062a \u0645\u0634\u0627\u0648\u0631\u0647 \u062d\u0642\u0648\u0642\u06cc \u0628\u0627 \u0648\u0631\u062f\u067e\u0631\u0633.",
      wp_4_title: "sheydabar.com",
      wp_4_desc: "\u0637\u0631\u0627\u062d\u06cc \u0648 \u0627\u0633\u062a\u0642\u0631\u0627\u0631 \u0633\u0627\u06cc\u062a \u0648\u0631\u062f\u067e\u0631\u0633\u06cc.",
      exp_title: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc",
      exp_desc: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc \u0648 \u0645\u0633\u0626\u0648\u0644\u06cc\u062a \u0647\u0627\u06cc \u06a9\u0644\u06cc\u062f\u06cc.",
      exp_1_period: "\u0645\u06cc \u06f2\u06f0\u06f2\u06f3 - \u0627\u06a9\u0646\u0648\u0646",
      exp_1_role: "\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0641\u0646\u06cc",
      exp_1_company: "\u067e\u0627\u0631\u0633\u200c\u067e\u06a9 (\u0627\u0628\u0631\u0647\u0627) - \u062a\u0647\u0631\u0627\u0646",
      exp_1_desc: "\u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0641\u0646\u06cc \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u0627\u0628\u0631\u06cc\u060c \u0639\u06cc\u0628\u200c\u06cc\u0627\u0628\u06cc\u060c \u0645\u062f\u06cc\u0631\u06cc\u062a \u0631\u062e\u062f\u0627\u062f \u0648 \u0627\u0631\u062a\u0642\u0627\u06cc \u067e\u0627\u06cc\u062f\u0627\u0631\u06cc \u0633\u0631\u0648\u06cc\u0633.",
      exp_2_period: "\u0698\u0648\u0626\u0646 \u06f2\u06f0\u06f1\u06f8 - \u0645\u0627\u0631\u0633 \u06f2\u06f0\u06f2\u06f3",
      exp_2_role: "\u062a\u0648\u0633\u0639\u0647\u200c\u062f\u0647\u0646\u062f\u0647 \u0641\u0648\u0644\u200c\u0627\u0633\u062a\u06a9",
      exp_2_company: "\u062a\u062c\u0647\u06cc\u0632 \u0646\u06cc\u0631\u0648 \u0632\u0646\u06af\u0627\u0646 (TNZ Oil) - \u062a\u0647\u0631\u0627\u0646",
      exp_2_desc: "\u062a\u0648\u0633\u0639\u0647 \u0641\u0648\u0644\u200c\u0627\u0633\u062a\u06a9 \u0648 \u0639\u0645\u0644\u06cc\u0627\u062a \u0632\u06cc\u0631\u0633\u0627\u062e\u062a \u062f\u0631 \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u0644\u06cc\u0646\u0648\u06a9\u0633\u06cc \u0648 \u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u06cc \u0648\u0628 \u0639\u0645\u0644\u06cc\u0627\u062a\u06cc.",
      exp_3_period: "\u0641\u0648\u0631\u06cc\u0647 \u06f2\u06f0\u06f1\u06f9 - \u0622\u0648\u0631\u06cc\u0644 \u06f2\u06f0\u06f2\u06f0",
      exp_3_role: "\u0628\u0631\u0646\u0627\u0645\u0647\u200c\u0646\u0648\u06cc\u0633 \u0641\u0648\u0644\u200c\u0627\u0633\u062a\u06a9",
      exp_3_company: "\u0627\u0646\u0631\u0645\u0648\u0646\u062f - \u062a\u0647\u0631\u0627\u0646",
      exp_3_desc: "\u0627\u0631\u0627\u0626\u0647 \u062e\u062f\u0645\u0627\u062a \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0648 \u0646\u06af\u0647\u200c\u062f\u0627\u0631\u06cc \u0628\u0631\u0627\u06cc \u0633\u0627\u0645\u0627\u0646\u0647\u200c\u0647\u0627\u06cc \u0633\u0627\u0632\u0645\u0627\u0646\u06cc.",
      exp_4_period: "\u0698\u0648\u0626\u0646 \u06f2\u06f0\u06f1\u06f8 - \u0646\u0648\u0627\u0645\u0628\u0631 \u06f2\u06f0\u06f1\u06f9",
      exp_4_role: "\u062a\u0648\u0633\u0639\u0647 \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631",
      exp_4_company: "\u0633\u0645\u0627 \u0633\u0627\u0645\u0627\u0646\u0647 - \u062a\u0647\u0631\u0627\u0646",
      exp_4_desc: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633 \u0641\u0646\u06cc \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 \u062f\u0631 \u062a\u062d\u0648\u06cc\u0644\u060c \u0631\u0641\u0639 \u0627\u0634\u06a9\u0627\u0644 \u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc.",
      exp_5_period: "\u0698\u0627\u0646\u0648\u06cc\u0647 \u06f2\u06f0\u06f1\u06f7 - \u062c\u0648\u0644\u0627\u06cc \u06f2\u06f0\u06f1\u06f7",
      exp_5_role: "SysOps",
      exp_5_company: "\u0634\u0627\u062a\u0644 \u0645\u0648\u0628\u0627\u06cc\u0644 - \u062a\u0647\u0631\u0627\u0646",
      exp_5_desc: "\u062a\u0648\u0633\u0639\u0647 \u0628\u0627 \u067e\u0627\u06cc\u062a\u0648\u0646 \u0648 \u067e\u0634\u062a\u06cc\u0628\u0627\u0646\u06cc \u0639\u0645\u0644\u06cc\u0627\u062a \u0644\u06cc\u0646\u0648\u06a9\u0633 \u0628\u0631\u0627\u06cc \u0633\u0631\u0648\u06cc\u0633\u200c\u0647\u0627\u06cc \u062f\u0627\u062e\u0644\u06cc.",
      edu_title: "\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc",
      edu_desc: "\u067e\u06cc\u0634\u06cc\u0646\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc \u0648 \u0622\u0645\u0648\u0632\u0634 \u0631\u0633\u0645\u06cc.",
      edu_1_period: "\u0627\u0632 \u06f2\u06f0\u06f2\u06f3",
      edu_1_degree: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0627\u0631\u0634\u062f \u0639\u0644\u0648\u0645 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631",
      edu_1_school: "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0641\u0627\u0631\u0627\u0646 \u0645\u0647\u0631",
      edu_1_desc: "\u06af\u0631\u0627\u06cc\u0634: \u0634\u0628\u06a9\u0647\u200c\u0647\u0627\u06cc \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631\u06cc | \u0645\u0639\u062f\u0644: \u06f1\u06f8",
      edu_2_period: "\u06f2\u06f0\u06f1\u06f7 - \u06f2\u06f0\u06f2\u06f3",
      edu_2_degree: "\u06a9\u0627\u0631\u0634\u0646\u0627\u0633\u06cc \u0639\u0644\u0648\u0645 \u06a9\u0627\u0645\u067e\u06cc\u0648\u062a\u0631",
      edu_2_school: "\u062f\u0627\u0646\u0634\u06af\u0627\u0647 \u0641\u0627\u0631\u0627\u0646 \u0645\u0647\u0631",
      edu_2_desc: "\u06af\u0631\u0627\u06cc\u0634: \u0646\u0631\u0645\u200c\u0627\u0641\u0632\u0627\u0631 | \u0645\u0639\u062f\u0644: \u06f1\u06f5",
      edu_3_period: "\u06f2\u06f0\u06f0\u06f8 - \u06f2\u06f0\u06f0\u06f9",
      edu_3_degree: "\u062f\u06cc\u067e\u0644\u0645 \u0639\u0644\u0648\u0645 \u062a\u062c\u0631\u0628\u06cc",
      edu_3_school: "\u0631\u0627\u06cc\u0627\u0646 \u06a9\u0627\u0634\u06cc\u200c\u0647\u0627",
      edu_3_desc: "\u0633\u0627\u0628\u0642\u0647 \u062a\u062d\u0635\u06cc\u0644\u06cc \u062f\u0648\u0631\u0647 \u062f\u06cc\u067e\u0644\u0645.",
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
  const hero3d = document.getElementById("hero3d");
  const langToggle = document.getElementById("langToggle");
  const langToggleText = document.getElementById("langToggleText");
  const themeToggle = document.getElementById("themeToggle");
  const themeToggleText = document.getElementById("themeToggleText");
  const themeIcon = document.getElementById("themeIcon");
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
  window.addEventListener("scroll", toggleNav, { passive: true });

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
    localStorage.setItem(THEME_KEY, currentTheme);
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

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (tr[key]) el.textContent = tr[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (tr[key]) el.setAttribute("placeholder", tr[key]);
    });
    if (tr.site_title) document.title = tr.site_title;
    if (metaDescription && tr.meta_description) {
      metaDescription.setAttribute("content", tr.meta_description);
    }

    localStorage.setItem(LANG_KEY, safeLang);
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

  function canUseWebGL() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch {
      return false;
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = document.querySelector(`script[src="${src}"]`);
      if (existing) {
        if (existing.dataset.loaded === "1") return resolve();
        existing.addEventListener("load", () => resolve(), { once: true });
        existing.addEventListener("error", () => reject(new Error(`Failed to load ${src}`)), { once: true });
        return;
      }
      const s = document.createElement("script");
      s.src = src;
      s.defer = true;
      s.onload = () => {
        s.dataset.loaded = "1";
        resolve();
      };
      s.onerror = () => reject(new Error(`Failed to load ${src}`));
      document.head.appendChild(s);
    });
  }

  function shouldUseThree() {
    if (!hero3d) return false;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return false;
    if (window.innerWidth < 768) return false;
    return true;
  }

  async function initThreeHero() {
    if (!hero3d) return false;
    if (!shouldUseThree()) return false;
    try {
      await loadScript("https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.min.js");
    } catch {
      return false;
    }
    if (!window.THREE) return false;
    if (!canUseWebGL()) return false;

    const { THREE } = window;
    const lowPowerDevice =
      window.innerWidth < 768 ||
      (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
      ("ontouchstart" in window && (navigator.maxTouchPoints || 0) > 0);
    const targetFps = lowPowerDevice ? 30 : 60;
    const frameInterval = 1000 / targetFps;
    const starCount = lowPowerDevice ? 240 : 420;
    const geoDetail = lowPowerDevice ? 0 : 1;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(48, 1, 0.1, 100);
    camera.position.set(0, 0, 5.6);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !lowPowerDevice,
      powerPreference: lowPowerDevice ? "low-power" : "high-performance"
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, lowPowerDevice ? 1.1 : 1.5));
    hero3d.appendChild(renderer.domElement);

    const lightA = new THREE.DirectionalLight(0x69d8ff, 1.1);
    lightA.position.set(2, 2, 3);
    const lightB = new THREE.DirectionalLight(0x1fe0b5, 0.7);
    lightB.position.set(-2, -1, 2);
    scene.add(lightA, lightB);

    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.25, geoDetail),
      new THREE.MeshStandardMaterial({
        color: 0x1fe0b5,
        wireframe: true,
        transparent: true,
        opacity: 0.85
      })
    );
    scene.add(core);

    const pointsGeo = new THREE.BufferGeometry();
    const stars = new Float32Array(starCount);
    for (let i = 0; i < stars.length; i += 3) {
      stars[i] = (Math.random() - 0.5) * 7;
      stars[i + 1] = (Math.random() - 0.5) * 4;
      stars[i + 2] = (Math.random() - 0.5) * 5;
    }
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(stars, 3));
    const points = new THREE.Points(
      pointsGeo,
      new THREE.PointsMaterial({ color: 0x7dc5ff, size: 0.03, transparent: true, opacity: 0.65 })
    );
    scene.add(points);

    function resize() {
      const w = hero3d.clientWidth || 1;
      const h = hero3d.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h, false);
    }
    resize();
    window.addEventListener("resize", resize, { passive: true });

    let lastTime = 0;
    const tick = (now = 0) => {
      if (document.hidden) {
        window.requestAnimationFrame(tick);
        return;
      }
      const delta = now - lastTime;
      if (delta >= frameInterval) {
        lastTime = now - (delta % frameInterval);
        const speed = lowPowerDevice ? 0.8 : 1;
        core.rotation.y += 0.0035 * speed;
        core.rotation.x += 0.0017 * speed;
        points.rotation.y -= 0.0009 * speed;
        points.rotation.x += 0.0004 * speed;
        renderer.render(scene, camera);
      }
      window.requestAnimationFrame(tick);
    };
    tick();
    return true;
  }
  initThreeHero().then((started) => {
    document.body.classList.toggle("no-webgl", !started);
  });

  if (!window.gsap) {
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("in"));
    meters.forEach((meter) => {
      const level = Number(meter.dataset.level || 0);
      meter.style.width = `${Math.max(0, Math.min(100, level))}%`;
    });
    return;
  }

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  gsap.to(".orb-1", { x: 40, y: 35, duration: 7, repeat: -1, yoyo: true, ease: "sine.inOut" });
  gsap.to(".orb-2", { x: -35, y: -20, duration: 8, repeat: -1, yoyo: true, ease: "sine.inOut" });

  gsap.from(".display-title", { y: 45, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });
  gsap.from(".lead", { y: 24, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.25 });
  gsap.from(".hero-actions .btn", { y: 16, opacity: 0, duration: 0.55, stagger: 0.12, ease: "power2.out", delay: 0.35 });

  const revealItems = Array.from(document.querySelectorAll(".reveal"));
  gsap.set(revealItems, { autoAlpha: 0, y: 46, scale: 0.97, filter: "blur(10px)" });

  const getDelay = (el) => {
    if (el.classList.contains("delay-4")) return 0.32;
    if (el.classList.contains("delay-3")) return 0.24;
    if (el.classList.contains("delay-2")) return 0.16;
    if (el.classList.contains("delay-1")) return 0.08;
    return 0;
  };

  const runReveal = (el, withClassDelay = true) => {
    if (!el || el.dataset.revealed === "1") return;
    el.dataset.revealed = "1";
    gsap.to(el, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.9,
      delay: withClassDelay ? getDelay(el) : 0,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  const inViewOnLoad = revealItems.filter((el) => {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9;
  });

  if (inViewOnLoad.length) {
    gsap.to(inViewOnLoad, {
      autoAlpha: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      duration: 0.9,
      stagger: 0.08,
      ease: "power3.out",
      onStart: () => inViewOnLoad.forEach((el) => (el.dataset.revealed = "1"))
    });
  }

  if (window.ScrollTrigger) {
    revealItems.forEach((el) => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 88%",
        once: true,
        onEnter: () => runReveal(el, true)
      });
    });
  } else {
    revealItems.forEach((el) => runReveal(el, true));
  }

  meters.forEach((meter) => {
    const level = Number(meter.dataset.level || 0);
    const widthValue = `${Math.max(0, Math.min(100, level))}%`;
    if (window.ScrollTrigger) {
      gsap.to(meter, {
        width: widthValue,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: meter,
          start: "top 92%",
          once: true
        }
      });
    } else {
      gsap.to(meter, { width: widthValue, duration: 0.8, ease: "power2.out" });
    }
  });
})();




