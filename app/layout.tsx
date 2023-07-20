// STYLES
import "../styles/globals.css";
import "../styles/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Fonts
import { Inter } from "next/font/google";

// Components
import Nav from "@/lib/components/blocks/footer-nav/nav";
import Footer from "@/lib/components/blocks/footer-nav/footer";

import { getAllPages } from "@/lib/functions/service";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageDetails = await getAllPages();

  return (
    <html>
      <body>
        <Nav pageDetails={pageDetails} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
