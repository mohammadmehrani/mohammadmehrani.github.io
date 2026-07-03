import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://mohammadmehrani.vercel.app"),
  title: "Mohammad Mehrani | DevOps Engineer",
  description: "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist",
  manifest: "/manifest.webmanifest",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Mohammad Mehrani | DevOps Engineer",
    description: "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist",
    url: "https://mohammadmehrani.vercel.app",
    siteName: "Mohammad Mehrani",
    images: [{ url: "/images/mehrani.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohammad Mehrani | DevOps Engineer",
    description: "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist",
    images: ["/images/mehrani.jpg"]
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Mehrani",
  alternateName: ["madi", "maddix", "محمد مهرانی"],
  jobTitle: "DevOps Engineer",
  url: "https://mohammadmehrani.vercel.app",
  email: "mailto:mohammad@iodeck.ir",
  image: "https://mohammadmehrani.github.io/images/mehrani.jpg",
  sameAs: [
    "https://github.com/mohammadmehrani",
    "https://www.linkedin.com/in/mohammadmehrani/",
    "https://t.me/mohammad_mehrani",
    "https://instagram.com/madi_mehrani"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <head>
        <style>{`
          @font-face {
            font-family: 'JetBrains Mono';
            font-style: normal;
            font-weight: 100 800;
            font-display: swap;
            src: url('/fonts/JetBrainsMono-wght.woff2') format('woff2');
          }
          @font-face {
            font-family: 'Vazirmatn';
            font-style: normal;
            font-weight: 100 900;
            font-display: swap;
            src: url('/fonts/Vazirmatn-wght.woff2') format('woff2');
            unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
          }
          @font-face {
            font-family: 'Vazirmatn';
            font-style: normal;
            font-weight: 100 900;
            font-display: swap;
            src: url('/fonts/Vazirmatn-arabic-wght.woff2') format('woff2');
            unicode-range: U+0600-06FF, U+0750-077F, U+0870-088E, U+0890-0891, U+0897-08E1, U+08E3-08FF, U+200C-200E, U+2010-2011, U+204F, U+2E41, U+FB50-FDFF, U+FE70-FE74, U+FE76-FEFC, U+102E0-102FB, U+10E60-10E7E, U+10EC2-10EC4, U+10EFC-10EFF, U+1EE00-1EE03, U+1EE05-1EE1F, U+1EE21-1EE22, U+1EE24, U+1EE27, U+1EE29-1EE32, U+1EE34-1EE37, U+1EE39, U+1EE3B, U+1EE42, U+1EE47, U+1EE49, U+1EE4B, U+1EE4D-1EE4F, U+1EE51-1EE52, U+1EE54, U+1EE57, U+1EE59, U+1EE5B, U+1EE5D, U+1EE5F, U+1EE61-1EE62, U+1EE64, U+1EE67-1EE6A, U+1EE6C-1EE72, U+1EE74-1EE77, U+1EE79-1EE7C, U+1EE7E, U+1EE80-1EE89, U+1EE8B-1EE9B, U+1EEA1-1EEA3, U+1EEA5-1EEA9, U+1EEAB-1EEBB, U+1EEF0-1EEF1;
          }
        `}</style>
      </head>
      <body>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <Script id="goftino-widget" strategy="lazyOnload">
          {`!function(){var i="kWrYfy",a=window,d=document;function l(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,o=localStorage.getItem("goftino_"+i);g.async=!0,g.src=o?s+"?o="+o:s;d.getElementsByTagName("head")[0].appendChild(g)}function r(){if("requestIdleCallback"in a){a.requestIdleCallback(l,{timeout:2000})}else{a.setTimeout(l,900)}};"complete"===d.readyState?r():a.attachEvent?a.attachEvent("onload",r):a.addEventListener("load",r,!1)}();`}
        </Script>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script defer data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN} src="https://plausible.io/js/script.js" />
        ) : null}
      </body>
    </html>
  );
}
