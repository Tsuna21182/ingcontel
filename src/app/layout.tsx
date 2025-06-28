"use client";

import { Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className={`${font.className} antialiased relative bg-gray-100 `}>
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </body>
    </html>
  );
}
