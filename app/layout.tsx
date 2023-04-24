import "./globals.css";
import { Montserrat } from "next/font/google";
import Navbar from "./navbar/page";
import Footer from "./footer/page";
import Home from "./page";
import About from "./about/page";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
});

export const metadata = {
  title: "Obaloluwa Olusoji",
  description: "A Programming Profile",
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} bg-light w-full min-h-screen`}
    >
      <body>
        <Navbar />
        <Home />
        <About />
        <Footer />
      </body>
    </html>
  );
}
