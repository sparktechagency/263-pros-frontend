import Footer from "@/shared/Footer";
import NavServer from "@/shared/navbar/NavServer";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="relative flex flex-col min-h-screen">
      <NavServer />
      <section className="grow">{children}</section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
