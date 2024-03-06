import Theming from '../theme/Theming';
import Header from '../components/Navbar';
import Footer from '../components/Footer';
import AnimatedCursor from '../components/AnimatedCursor';

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ArjunCodess - Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theming>
          <Header />
          {/* <div className='md:inline-block hidden'><AnimatedCursor /></div> */}
          {children}
          <Footer />
        </Theming>
      </body>
    </html>
  );
}
