import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/Animations/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Humna Asif",
  description: "UI/UX Designer & Frontend Developer",
   icons: {
    icon: "/favicon.ico", // or "/yourlogo.png" if you used PNG
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <SmoothScroll>  {children} </SmoothScroll>
      </body>
    </html>
  );
}
