import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./context/ThemeContext";
import Cookiesy from "./components/Cookiesy";
import Header from "./components/header";
import Footer from "./components/footer";
import { CookieProvider } from "./context/CookieContext";
import CookieSettingsButton from "./components/CookieButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata = {
  metadataBase: new URL("https://grabcode.pl"),
  title: { template: "%s / GrabCode Studio", default: "Witaj / GrabCode" },
  description:
    "GrabCode Studio - Profesjonalne strony internetowe na miarę Twoich potrzeb. Tworzymy nowoczesne, responsywne i dopasowane do Twojego biznesu witryny, które przyciągają klientów.",
  keywords:
    "tworzenie stron internetowych, strony www, web development, nowoczesne strony, GrabCode Studio, Robert Grabowski, konin, legionowo, warszawa, poznan, grab code, tanie strony internetowe",
  verification: {
    google: "L3iCP03l4CsnPTApYYksUo8yPdzRdh6YL6z4-U3G8E8",
  },
  alternates: {
    canonical: "/",
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

        {/* Google Consent Mode - domyślnie brak zgody */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];

        function gtag(){
          dataLayer.push(arguments);
        }

        gtag('consent', 'default', {
          analytics_storage: 'denied',
          ad_storage: 'denied',
          ad_user_data: 'denied',
          ad_personalization: 'denied'
        });
      `,
          }}
        />

        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
        (function(w,d,s,l,i){
          w[l]=w[l]||[];
          w[l].push({
            'gtm.start': new Date().getTime(),
            event:'gtm.js'
          });

          var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),
          dl=l!='dataLayer'?'&l='+l:'';

          j.async=true;
          j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;

          f.parentNode.insertBefore(j,f);

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
              "@type": "ProfessionalService",
              "@id": "https://grabcode.pl/#business",

              name: "GrabCode Studio",
              url: "https://grabcode.pl",
              logo: "https://grabcode.pl/icon.png",

              description:
                "GrabCode Studio tworzy nowoczesne strony internetowe, landing page, strony firmowe oraz sklepy internetowe dla małych i średnich firm.",

              telephone: "+48 609 843 405",

              email: "mailto:kontakt@grabcode.pl",

              areaServed: [
                {
                  "@type": "Country",
                  name: "Polska",
                },
              ],

              availableLanguage: ["pl"],

              founder: {
                "@type": "Person",
                name: "Robert Grabowski",
              },

              knowsAbout: [
                "Tworzenie stron internetowych",
                "Next.js",
                "React",
                "SEO",
                "WooCommerce",
                "Landing Page",
                "Strony firmowe",
              ],

              serviceType: [
                "Tworzenie stron internetowych",
                "Landing Page",
                "Strony firmowe",
                "Sklepy internetowe",
                "SEO techniczne",
                "Opieka nad stroną",
              ],
            }),
          }}
        />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <ThemeProvider>
          <CookieProvider>
            <Cookiesy />

            <Header />
            {children}
            <Footer />
          </CookieProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
