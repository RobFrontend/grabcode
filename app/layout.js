import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: { template: "%s / GrabCode Studio", default: "Witaj / GrabCode" },
  description:
    "GrabCode Studio - Profesjonalne strony internetowe na miarę Twoich potrzeb. Tworzymy nowoczesne, responsywne i dopasowane do Twojego biznesu witryny, które przyciągają klientów.",
  keywords:
    "tworzenie stron internetowych, strony www, web development, nowoczesne strony, GrabCode Studio, Robert Grabowski, konin, legionowo, warszawa, poznan, grab code, tanie strony internetowe",
  verification: {
    google: "L3iCP03l4CsnPTApYYksUo8yPdzRdh6YL6z4-U3G8E8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/icon.png" />
        <link rel="canonical" href="https://grabcode.pl" />
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-NV9WKRJ9');
            `,
          }}
        />
        {/* Google Analytics Script (gtag.js) */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-ET0VR8H197"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ET0VR8H197');
            `,
          }}
        />
        {/* JSON-LD - Dane strukturalne */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GrabCode Studio",
              url: "https://grabcode.pl",
              logo: "/icon.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+48 609 843 405",
                contactType: "customer service",
                areaServed: "PL",
                availableLanguage: "Polish",
              },
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        {/* Google Tag Manager <noscript> */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NV9WKRJ9"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
