import Link from "next/link";
import React from "react";

import Image from "next/image";

export default async function Footer() {
  const links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms Condition", href: "/terms-condition" },
  ];
  return (
    <footer className="pt-16 lg:pt-20 bg-[#E6F8F3] ">
      <div className="container flex flex-col items-center justify-center">
        <Image
          src="/Logo2.png"
          alt="Logo"
          width={1200}
          height={1200}
          draggable={false}
          className="h-fit lg:h-28 w-fit mb-10"
        />
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-4 lg:gap-6 text-xs lg:text-sm text-black/80 mb-8 md:mb-10 items-center justify-center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-black font-medium "
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Bottom copyright */}
        <div className="text-center  text-sm text-black/70 border-t border-[#37373A] w-full py-4">
          © 2025 263 Pros. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
