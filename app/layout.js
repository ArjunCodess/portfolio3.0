import Theming from '../theme/Theming';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import { SparklesCore } from "../components/ui/sparkles";

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArjunCodess - Portfolio",
  description: "Portfolio of a Passionate Talented Young Full-Stack Developer, Writer and Student by Profession from India 🇮🇳",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Header />
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
