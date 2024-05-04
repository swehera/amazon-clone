import type { Metadata } from "next";

// import "../styles/globals.css";
import "../../styles/globals.css";

import "react-toastify/dist/ReactToastify.css";
import Layout from "@/ui/Layout";

// import Layout from "@/ui/Layout";

export const metadata: Metadata = {
  title: "Amazon.com. Spend less. Smile more.11",
  description: "Generated by Lutfor Rahman 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" font-Montserrat">
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
