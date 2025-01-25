import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  title: "GrabCode Studio",
  description:
    "GrabCode Studio - Profesjonalne strony internetowe na miarę Twoich potrzeb. Tworzymy nowoczesne, responsywne i dopasowane do Twojego biznesu witryny, które przyciągają klientów.",
  keywords:
    "tworzenie stron internetowych, strony www, web development, nowoczesne strony, GrabCode Studio, Robert Grabowski, konin, legionowo, warszawa",
  verification: {
    google: "L3iCP03l4CsnPTApYYksUo8yPdzRdh6YL6z4-U3G8E8",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
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
        {/* JSON-LD - Dane strukturalne */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "GrabCode Studio",
              url: "https://grabcode.pl",
              logo: "https://grabcode.pl/logo.png",
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
        {children}
      </body>
    </html>
  );
}
