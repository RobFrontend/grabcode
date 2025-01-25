import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Head from "next/head";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
// export const metadata = {
//   title: "GrabCode Studio",
//   description:
//     "GrabCode Studio - Profesjonalne strony internetowe na miarę Twoich potrzeb. Tworzymy nowoczesne, responsywne i dopasowane do Twojego biznesu witryny, które przyciągają klientów.",
//   keywords:
//     "tworzenie stron internetowych, strony www, web development, nowoczesne strony, GrabCode Studio, Robert Grabowski, konin",
//   name: "google-site-verification",
//   content: "L3iCP03l4CsnPTApYYksUo8yPdzRdh6YL6z4-U3G8E8",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <Head>
        <title>GrabCode Studio</title>
        <meta
          name="description"
          content="GrabCode Studio - Profesjonalne strony internetowe na miarę Twoich potrzeb. Tworzymy nowoczesne, responsywne i dopasowane do Twojego biznesu witryny, które przyciągają klientów."
        />
        <meta
          name="keywords"
          content="tworzenie stron internetowych, strony www, web development, nowoczesne strony, GrabCode Studio, Robert Grabowski, konin"
        />
        <meta
          name="google-site-verification"
          content="L3iCP03l4CsnPTApYYksUo8yPdzRdh6YL6z4-U3G8E8"
        />
      </Head>
      <body className={`${poppins.variable} antialiased`}>{children}</body>
    </html>
  );
}
