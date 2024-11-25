"use client"
import { Inter } from "next/font/google";
import Script from 'next/script';
import "./globals.css";
// import Link from 'next/link'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react";
import "../../node_modules/aos/dist/aos.css";
import { React, useEffect } from 'react';
import AOS from 'aos';
import '../../node_modules/animate.css/animate.min.css';

import '../../node_modules/slick-carousel/slick/slick.css';
import '../../node_modules/slick-carousel/slick/slick-theme.css';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
          as="script"
          crossOrigin="anonymous"
        />

        <link
          rel="preload"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
          as="script"
          crossOrigin="anonymous"
        />


        <meta name="google-site-verification" content="W8ujVfKx-JqFfGb4OK8BL3-wTAE2htqZf_BLygbMSps" />

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-NW0YT6F0RD"></Script>
        <Script id="GA-script">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-NW0YT6F0RD');
        
        `}

        </Script>
        <Script src="https://unpkg.com/aos@2.3.4/dist/aos.js"></Script>
        <Script src="https://kit.fontawesome.com/39faeeab9d.js" crossOrigin="anonymous"></Script>
      </head>
      <body className={inter.className}>
        {children}
        <SpeedInsights />
        <Analytics />


        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossOrigin="anonymous" ></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossOrigin="anonymous" ></Script>


      </body>
    </html>
  );
}
