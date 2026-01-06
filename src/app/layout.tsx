import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AntProvider from "../lib/provider/AntProvider";
import { Toaster } from "sonner";
import { ConfigProvider } from "antd";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "263 Pros",
  description:
    "Discover a smarter shopping experience designed just for you. Browse thousands of products, enjoy app-only discounts, track your orders, and get everything you love — all with a single tap with Dore Hogar.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AntProvider>
      <html lang="en">
        <body className={`${poppins.variable}  antialiased`}>
          <Toaster position="top-center" duration={2000} /> 
           <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: '#055e6e',
                    },
                }}
            >   
          {children}
            </ConfigProvider>
        </body>
      </html>
    </AntProvider>
  );
}
