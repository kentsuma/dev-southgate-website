"use client";
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
import { useState, useEffect } from "react";

// Types
import { PageDetail } from "@/lib/functions/types";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [pageDetails, setPageDetails] = useState<PageDetail[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pages = await getAllPages();
        // setPageDetails(pages);
        console.log("HELLO: ", pages);
      } catch (error) {
        console.log("Error fetching page details:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <html>
      <body>
        <Nav pageDetails={pageDetails} />{" "}
        {/* Pass the pageDetails prop to Nav */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
