(function () {
  const dict = {
    en: {
      nav_about: "About",
      nav_skills: "Skills",
      nav_experience: "Experience",
      nav_education: "Education",
      nav_projects: "Projects",
      nav_portfolio: "Portfolio",
      nav_certs: "Certifications",
      nav_report: "GR",
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
      exp_1_period: "May 2023 - 2024",
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

      support_title: "Financial Support",
      support_wallet: "SEND USDT TRC20",
      nav_report: "GR",
      report_title: "GitHub Report",
      report_desc: "Comprehensive overview of open source activity and contribution metrics.",
      report_overview: "Account Overview",
      report_contributions: "Contribution Activity (Last 30 Days)",
      report_languages: "Language Breakdown",
      report_activity: "Recent Activity",
      report_focused: "Focus Areas",
      report_totalStars: "Total Stars",
      report_totalForks: "Total Forks",
      report_totalRepos: "Public Repos",
      report_followers: "Followers",
      report_following: "Following",
      report_pullRequests: "Pull Requests",
      report_issues: "Issues",
      report_lastYear: "Year Contribs",
      report_noActivity: "No activity in the last 30 days.",
      portfolio_title: "Portfolio",
      portfolio_desc: "Platforms, websites and applications designed and delivered.",
      portfolio_loading: "Loading website...",
      portfolio_blocked: "Site blocked iframe, opening in new tab..."
    },
    fa: {
      nav_about: "\u062f\u0631\u0628\u0627\u0631\u0647 \u0645\u0646",
      nav_skills: "\u0645\u0647\u0627\u0631\u062a \u0647\u0627",
      nav_experience: "\u0633\u0648\u0627\u0628\u0642 \u0634\u063a\u0644\u06cc",
      nav_education: "\u0633\u0648\u0627\u0628\u0642 \u062a\u062d\u0635\u06cc\u0644\u06cc",
      nav_projects: "\u067e\u0631\u0648\u0698\u0647 \u0647\u0627",
      nav_portfolio: "\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
      nav_certs: "\u06af\u0648\u0627\u0647\u06cc\u0646\u0627\u0645\u0647 \u0647\u0627",
      nav_report: "GR",
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
      exp_1_period: "\u0645\u06cc \u06f2\u06f0\u06f2\u06f3 \u062a\u0627 \u06f2\u06f0\u06f2\u06f4",
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

      support_title: "\u062d\u0645\u0627\u06cc\u062a",
      support_wallet: "\u0627\u0631\u0633\u0627\u0644 USDT TRC20",
      nav_report: "GR",
      report_title: "\u06af\u0632\u0627\u0631\u0634 \u06af\u06cc\u062a\u0647\u0627\u0628",
      report_desc: "\u0646\u0645\u0627\u06cc \u062c\u0627\u0645\u0639 \u0627\u0632 \u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u0645\u062a\u0646\u200c\u0628\u0627\u0632 \u0648 \u0645\u0639\u06cc\u0627\u0631\u0647\u0627\u06cc \u0645\u0634\u0627\u0631\u06a9\u062a.",
      report_overview: "\u0646\u0645\u0627\u06cc \u06a9\u0644\u06cc \u062d\u0633\u0627\u0628",
      report_contributions: "\u0641\u0639\u0627\u0644\u06cc\u062a \u0645\u0634\u0627\u0631\u06a9\u062a\u06cc (\u06f3\u06f0 \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631)",
      report_languages: "\u062a\u0641\u06a9\u06cc\u06a9 \u0632\u0628\u0627\u0646\u200c\u0647\u0627",
      report_activity: "\u0641\u0639\u0627\u0644\u06cc\u062a\u200c\u0647\u0627\u06cc \u0627\u062e\u06cc\u0631",
      report_focused: "\u062d\u0648\u0632\u0647\u200c\u0647\u0627\u06cc \u062a\u0645\u0631\u06a9\u0632",
      report_totalStars: "\u0645\u062c\u0645\u0648\u0639 \u0633\u062a\u0627\u0631\u0647\u200c\u0647\u0627",
      report_totalForks: "\u0645\u062c\u0645\u0648\u0639 \u0641\u0648\u0631\u06a9\u200c\u0647\u0627",
      report_totalRepos: "\u0631\u06cc\u067e\u0648\u0647\u0627\u06cc \u0639\u0645\u0648\u0645\u06cc",
      report_followers: "\u062f\u0646\u0628\u0627\u0644\u200c\u06a9\u0646\u0646\u062f\u06af\u0627\u0646",
      report_following: "\u062f\u0646\u0628\u0627\u0644\u200c\u0634\u0648\u0646\u062f\u0647",
      report_pullRequests: "\u062f\u0631\u062e\u0648\u0627\u0633\u062a\u200c\u0647\u0627\u06cc Pull",
      report_issues: "\u0645\u0633\u0627\u0626\u0644",
      report_lastYear: "\u0645\u0634\u0627\u0631\u06a9\u062a \u0633\u0627\u0644",
      report_noActivity: "\u0647\u06cc\u0686 \u0641\u0639\u0627\u0644\u06cc\u062a\u06cc \u062f\u0631 \u06f3\u06f0 \u0631\u0648\u0632 \u0627\u062e\u06cc\u0631 \u062b\u0628\u062a \u0646\u0634\u062f\u0647.",
      portfolio_title: "\u0646\u0645\u0648\u0646\u0647 \u06a9\u0627\u0631\u0647\u0627",
      portfolio_desc: "\u067e\u0644\u062a\u0641\u0631\u0645\u200c\u0647\u0627\u060c \u0633\u0627\u06cc\u062a\u200c\u0647\u0627 \u0648 \u0627\u067e\u0644\u06cc\u06a9\u06cc\u0634\u0646\u200c\u0647\u0627\u06cc\u06cc \u06a9\u0647 \u0637\u0631\u0627\u062d\u06cc \u0648 \u067e\u06cc\u0627\u062f\u0647 \u0633\u0627\u0632\u06cc \u0634\u062f\u0647.",
      portfolio_loading: "\u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0631\u06af\u0630\u0627\u0631\u06cc \u0633\u0627\u06cc\u062a...",
      portfolio_blocked: "\u0633\u0627\u06cc\u062a \u0646\u0645\u062a\u0648\u0627\u0646\u0633\u062a \u062f\u0631 iframe \u0628\u0627\u0631 \u0634\u0648\u062f\u060c \u062f\u0631 \u062d\u0627\u0644 \u0628\u0627\u0632 \u06a9\u0631\u062f\u0646 \u062f\u0631 \u062a\u0627\u0628 \u062c\u062f\u06cc\u062f..."
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

  const clockTime = document.getElementById("clockTime");
  const clockDate = document.getElementById("clockDate");

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

  const getStored = (key) => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  };

  const setStored = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch {
      // ignore storage failures (private mode / restrictive browsers)
    }
  };

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
    if (getStored(THEME_KEY) !== currentTheme) {
      setStored(THEME_KEY, currentTheme);
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

    if (getStored(LANG_KEY) !== safeLang) {
      setStored(LANG_KEY, safeLang);
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
    getStored(THEME_KEY) ||
    (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  applyTheme(preferredTheme);

  const preferredLang = getStored(LANG_KEY) || "en";
  applyLanguage(preferredLang, false);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const saveDataMode = !!(navigator.connection && navigator.connection.saveData);
  const lowPowerDevice =
    window.innerWidth < 992 ||
    (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4) ||
    ("ontouchstart" in window && (navigator.maxTouchPoints || 0) > 0);

  function makeOrbitRing(radius, color, speed, offset, tilt) {
    const rGroup = new THREE.Group();
    rGroup.rotation.x = tilt;
    const segs = 48;
    const pts = [];
    for (let i = 0; i <= segs; i++) {
      const theta = (i / segs) * Math.PI * 2;
      pts.push(new THREE.Vector3(
        Math.cos(theta) * radius,
        Math.sin(theta * 0.7 + offset) * 0.4,
        Math.sin(theta) * radius
      ));
    }
    const ringGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const ringMat = new THREE.LineBasicMaterial({ color, transparent: true, opacity: 0.2 });
    rGroup.add(new THREE.Line(ringGeo, ringMat));
    const dot = new THREE.Mesh(
      new THREE.SphereGeometry(0.06, 8, 8),
      new THREE.MeshBasicMaterial({ color })
    );
    dot.position.set(radius, 0, 0);
    rGroup.add(dot);
    return { group: rGroup, dot, radius, speed, offset, tilt, angle: offset };
  }

  function initThreeBackground() {
    if (!window.THREE || reduceMotion || saveDataMode || lowPowerDevice) return;
    const container = document.getElementById("hero3d");
    if (!container) return;
    document.body.classList.remove("no-webgl");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(55, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Spiral Galaxy (3 arms, original style) ---
    const gCount = 10000;
    const gPos = new Float32Array(gCount * 3);
    const gCol = new Float32Array(gCount * 3);
    const colors = [0x1ba5ff, 0x7c3aed, 0x1fe0b5];
    const colA = new THREE.Color(0x1fe0b5);
    const colB = new THREE.Color(0x7c3aed);
    const colC = new THREE.Color(0x1ba5ff);

    const gRadius = 5.0;
    const arms = 3;
    const spin = 2.0;

    for (let i = 0; i < gCount; i++) {
      const arm = i % arms;
      const armAngle = (arm / arms) * Math.PI * 2;
      const dist = Math.pow(Math.random(), 1.3) * gRadius;
      const df = dist / gRadius;
      const angle = armAngle + dist * spin + (Math.random() - 0.5) * 0.4 * (1 - df * 0.3);
      const stray = (Math.random() - 0.5) * 0.4 * df;

      gPos[i * 3] = Math.cos(angle) * dist + stray;
      gPos[i * 3 + 1] = (Math.random() - 0.5) * 0.15 * (1 + df);
      gPos[i * 3 + 2] = Math.sin(angle) * dist + stray;

      const c = new THREE.Color().lerpColors(colA, colB, df * 0.5);
      c.lerp(colC, Math.pow(df, 1.8) * 0.6);
      gCol[i * 3] = c.r;
      gCol[i * 3 + 1] = c.g;
      gCol[i * 3 + 2] = c.b;
    }
    const galGeo = new THREE.BufferGeometry();
    galGeo.setAttribute("position", new THREE.BufferAttribute(gPos, 3));
    galGeo.setAttribute("color", new THREE.BufferAttribute(gCol, 3));
    const galMat = new THREE.PointsMaterial({
      size: 0.06, vertexColors: true, transparent: true, opacity: 0.9,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    });
    const galaxy = new THREE.Points(galGeo, galMat);
    galaxy.rotation.x = 0.3;

    // --- Central glow ---
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0x1fe0b5, transparent: true, opacity: 0.2, blending: THREE.AdditiveBlending
    });
    const glow = new THREE.Mesh(new THREE.SphereGeometry(0.3, 16, 16), glowMat);

    // --- Background stars ---
    const starCount = 3000;
    const sPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 12 + Math.random() * 35;
      sPos[i * 3] = Math.sin(phi) * Math.cos(theta) * r;
      sPos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * r * 0.4;
      sPos[i * 3 + 2] = Math.cos(phi) * r;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(sPos, 3));
    const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xaabbdd, size: 0.03, transparent: true, opacity: 0.35,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    }));

    // --- Orbiting dust ring ---
    const dustCount = 800;
    const dPos = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const rad = 2.2 + Math.random() * 1.5;
      dPos[i * 3] = Math.cos(angle) * rad;
      dPos[i * 3 + 1] = (Math.random() - 0.5) * 0.4;
      dPos[i * 3 + 2] = Math.sin(angle) * rad;
    }
    const dustGeo = new THREE.BufferGeometry();
    dustGeo.setAttribute("position", new THREE.BufferAttribute(dPos, 3));
    const dust = new THREE.Points(dustGeo, new THREE.PointsMaterial({
      color: 0x7c3aed, size: 0.04, transparent: true, opacity: 0.2,
      blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true
    }));

    scene.add(galaxy);
    scene.add(glow);
    scene.add(stars);
    scene.add(dust);

    function resize() {
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    window.addEventListener("resize", resize);

    const clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const t = clock.getElapsedTime();

      galaxy.rotation.y += delta * 0.04;

      dust.rotation.y += delta * 0.18;
      dust.rotation.x = 0.3 + Math.sin(t * 0.015) * 0.04;

      stars.rotation.y += delta * 0.001;

      glow.material.opacity = 0.18 + Math.sin(t * 0.5) * 0.06;
      glow.scale.setScalar(1 + Math.sin(t * 0.35) * 0.07);

      renderer.render(scene, camera);
    }
    animate();
  }

  function initMiniThree(id, opts) {
    if (!window.THREE || reduceMotion || saveDataMode || lowPowerDevice) return;
    const container = document.getElementById(id);
    if (!container) return;
    const s = opts.size || 30;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 50);
    camera.position.set(0, 0, s * 0.3);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    container.appendChild(renderer.domElement);
    const ambient = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambient);
    const group = new THREE.Group();
    scene.add(group);
    const shape = opts.shape || "dode";
    const geo = shape === "ico" ? new THREE.IcosahedronGeometry(s * 0.08, 0) : new THREE.DodecahedronGeometry(s * 0.08, 0);
    const mat = new THREE.MeshStandardMaterial({
      color: opts.color || 0x1fe0b5, wireframe: true, transparent: true, opacity: 0.25
    });
    const mesh = new THREE.Mesh(geo, mat);
    group.add(mesh);
    if (opts.ring) {
      const ring = makeOrbitRing(s * 0.14, opts.ringColor || 0x7c3aed, 0.5, 0, 0.2);
      group.add(ring.group);
      const ring2 = makeOrbitRing(s * 0.12, opts.ringColor2 || 0x1ba5ff, 0.7, Math.PI / 2, -0.3);
      group.add(ring2.group);
    }
    const particles = [];
    for (let i = 0; i < (opts.particles || 20); i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = s * 0.18 + Math.random() * s * 0.1;
      const pos = new THREE.Vector3(
        Math.sin(phi) * Math.cos(theta) * r,
        Math.sin(phi) * Math.sin(theta) * r * 0.5,
        Math.cos(phi) * r
      );
      const pMat = new THREE.MeshBasicMaterial({ color: opts.color || 0xa8bbd9, transparent: true, opacity: 0.2 });
      const pMesh = new THREE.Mesh(new THREE.SphereGeometry(0.03, 4, 4), pMat);
      pMesh.position.copy(pos);
      group.add(pMesh);
      particles.push({ mesh: pMesh, speed: 0.1 + Math.random() * 0.2, phase: Math.random() * Math.PI * 2 });
    }
    function resize() {
      const w = container.clientWidth, h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    let clock = new THREE.Clock();
    function animate() {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const t = clock.getElapsedTime();
      group.rotation.y += delta * (opts.speed || 0.4);
      group.rotation.x = Math.sin(t * 0.15) * 0.1;
      mesh.rotation.x += delta * 0.2;
      mesh.rotation.z += delta * 0.1;
      particles.forEach(p => {
        p.mesh.position.y += Math.sin(t * p.speed + p.phase) * 0.001;
      });
      renderer.render(scene, camera);
    }
    animate();
  }

  function initClock() {
    if (!clockTime || !clockDate) return;
    const tehanOffset = 3.5 * 60 * 60 * 1000;
    function tick() {
      const now = new Date();
      const tehran = new Date(now.getTime() + tehanOffset + now.getTimezoneOffset() * 60 * 1000);
      const h = String(tehran.getUTCHours()).padStart(2, "0");
      const m = String(tehran.getUTCMinutes()).padStart(2, "0");
      const s = String(tehran.getUTCSeconds()).padStart(2, "0");
      clockTime.textContent = h + ":" + m + ":" + s;
      if (currentLang === "fa") {
        const persianMonths = ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"];
        clockDate.textContent = tehran.getUTCDate() + " " + persianMonths[tehran.getUTCMonth()] + " " + tehran.getUTCFullYear();
      } else {
        clockDate.textContent = tehran.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
      }
    }
    tick();
    setInterval(tick, 1000);
  }

  function initGitHubReport() {
    const container = document.getElementById("reportContent");
    if (!container) return;
    Promise.all([
      fetch("data/stats.json").then(r => r.json()).catch(() => null),
      fetch("data/activity.json").then(r => r.json()).catch(() => null)
    ]).then(([stats, activity]) => {
      if (!stats || !stats.user) return;
      const u = stats.user;
      const setText = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.textContent = val != null ? val : "-";
      };
      setText("statStars", u.total_stars);
      setText("statForks", u.total_forks);
      setText("statRepos", u.public_repos);
      setText("statFollowers", u.followers);
      setText("statFollowing", u.following);
      setText("statPRs", u.pull_requests);
      setText("statIssues", stats.open_issues);
      setText("statContribs", u.last_year_contributions);
      const barContainer = document.getElementById("contribBars");
      if (barContainer && Array.isArray(stats.contribution_days)) {
        barContainer.innerHTML = "";
        stats.contribution_days.forEach((count) => {
          const bar = document.createElement("div");
          bar.className = "contribution-bar";
          const h = Math.max(2, Math.min(44, count * 3.5));
          bar.style.height = h + "px";
          if (count === 0) bar.style.background = "var(--stroke)";
          else if (count <= 3) bar.style.background = "#0e4429";
          else if (count <= 6) bar.style.background = "#006d32";
          else if (count <= 10) bar.style.background = "#26a641";
          else bar.style.background = "#39d353";
          bar.title = count + " contributions";
          barContainer.appendChild(bar);
        });
      }
      const langContainer = document.getElementById("langBreakdown");
      if (langContainer && Array.isArray(stats.languages)) {
        langContainer.innerHTML = "";
        stats.languages.forEach(([name, pct]) => {
          const row = document.createElement("div");
          row.innerHTML = '<div class="skill-head"><span>' + name + '</span><strong>' + pct + '%</strong></div><div class="meter"><span style="width:' + pct + '%;background:linear-gradient(90deg,var(--accent-2),var(--accent))"></span></div>';
          langContainer.appendChild(row);
        });
      }
      if (Array.isArray(activity) && activity.length > 0) {
        const feed = document.getElementById("activityFeed");
        if (feed) {
          feed.innerHTML = "";
          activity.slice(0, 10).forEach(a => {
            const item = document.createElement("div");
            item.className = "activity-item";
            const date = new Date(a.date);
            const dateStr = date.toLocaleDateString(currentLang === "fa" ? "fa-IR" : "en-US");
            item.innerHTML = '<span>' + a.icon + '</span><span class="muted">' + a.message + '</span><span class="activity-date">' + dateStr + '</span>';
            feed.appendChild(item);
          });
        }
      }
      const focusContainer = document.getElementById("focusTags");
      if (focusContainer && Array.isArray(stats.languages)) {
        focusContainer.innerHTML = "";
        stats.languages.forEach(([name]) => {
          const tag = document.createElement("span");
          tag.className = "focus-tag";
          tag.textContent = name;
          focusContainer.appendChild(tag);
        });
      }
    });
  }

  function initHeroParallax() {
    if (reduceMotion || saveDataMode || lowPowerDevice) return;
    const hero = document.querySelector("#home .hero .container");
    if (!hero) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const y = Math.min(window.scrollY, 800);
          const progress = Math.min(y / 800, 1);
          const moveY = progress * -30;
          const rotateXVal = progress * 4;
          hero.style.transform = "perspective(800px) translateY(" + moveY.toFixed(1) + "px) rotateX(" + rotateXVal.toFixed(1) + "deg)";
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

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
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
          } else {
            entry.target.classList.remove("in");
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
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

  function initPortfolioModal() {
    const cards = document.querySelectorAll(".portfolio-card");
    const modal = document.getElementById("portfolioModal");
    const iframe = document.getElementById("portfolioIframe");
    const loading = document.getElementById("portfolioLoading");
    const urlText = document.getElementById("pmbUrlText");
    const closeBtn = modal?.querySelector(".pmb-close");
    const backdrop = modal?.querySelector(".portfolio-modal-backdrop");
    const externalBtn = document.getElementById("pmbExternal");

    if (!modal || !iframe) return;

    const proxyUrl = (url) => "https://corsproxy.io/?" + encodeURIComponent(url);

    const openModal = (url) => {
      urlText.textContent = url;
      if (externalBtn) externalBtn.href = url;
      modal.classList.add("active");
      document.body.style.overflow = "hidden";
      if (loading) loading.classList.remove("hidden");

      iframe.src = proxyUrl(url);

      let loaded = false;
      iframe.onload = () => { loaded = true; if (loading) loading.classList.add("hidden"); };
      setTimeout(() => {
        if (!loaded && loading) {
          loading.innerHTML = '<div class="portfolio-fallback" style="height:100%"><i class="bi bi-globe2" style="font-size:3rem"></i><span style="font-size:1rem">' + (dict[currentLang].portfolio_blocked || "Site blocked iframe, opening in new tab...") + '</span></div>';
          setTimeout(() => { window.open(url, "_blank"); }, 1500);
        }
      }, 6000);
    };

    const closeModal = () => {
      modal.classList.remove("active");
      document.body.style.overflow = "";
      setTimeout(() => { iframe.src = ""; }, 300);
    };

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        const url = card.dataset.url;
        if (url) openModal(url);
      });
    });

    closeBtn?.addEventListener("click", closeModal);
    backdrop?.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("active")) closeModal();
    });
  }

  initParallax();
  initHeroParallax();
  initReveal();
  initMeters();
  initClock();
  try { initThreeBackground(); } catch (e) { console.warn("3D bg error:", e); }
  try { initMiniThree("mini3dSkills", { shape: "ico", color: 0x7c3aed, ring: true, ringColor: 0x1fe0b5, ringColor2: 0x1ba5ff, particles: 25, speed: 0.3 }); } catch (e) {}
  try { initMiniThree("mini3dReport", { shape: "dode", color: 0x1ba5ff, ring: false, particles: 15, speed: 0.5 }); } catch (e) {}
  initGitHubReport();
  initPortfolioModal();
})();
