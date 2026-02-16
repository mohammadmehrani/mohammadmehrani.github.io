import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://mohammadmehrani.github.io"),
  title: "Mohammad Mehrani | DevOps Engineer",
  description: "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "Mohammad Mehrani | DevOps Engineer",
    description: "Mohammad Mehrani | DevOps Engineer, Cloud & Platform Specialist",
    url: "https://mohammadmehrani.github.io",
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
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  }
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohammad Mehrani",
  jobTitle: "DevOps Engineer",
  url: "https://mohammadmehrani.github.io",
  email: "mailto:admin@m-mehrani.ir",
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
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <Script id="goftino-widget" strategy="lazyOnload">
          {`!function(){var i="kWrYfy",a=window,d=document;function l(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,o=localStorage.getItem("goftino_"+i);g.async=!0,g.src=o?s+"?o="+o:s;d.getElementsByTagName("head")[0].appendChild(g)}function r(){if("requestIdleCallback"in a){a.requestIdleCallback(l,{timeout:2000})}else{a.setTimeout(l,900)}};"complete"===d.readyState?r():a.attachEvent?a.attachEvent("onload",r):a.addEventListener("load",r,!1)}();`}
        </Script>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
      </body>
    </html>
  );
}
