import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { Button } from "antd";

export default function Footer() {
  const customerLinks = [
    { label: "Find a Service provider", href: "/providers" },
    { label: "Browse Services", href: "/services" },
    { label: "Customer Feedback", href: "/feedback" },
    { label: "Login", href: "/auth/login" },
  ];

  const providerLinks = [
    { label: "Join As Professional", href: "/how-it-works" },
    { label: "Help & Support", href: "/help" },
  ];

  const aboutLinks = [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ];

  return (
    <footer className="bg-[#F3F8FB] pt-16 lg:pt-24 border-t border-gray-100">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-4 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start px-2">
            <h2 className="text-3xl lg:text-4xl font-semibold text-primary mb-6">
              263 <span className="text-[#FFCB20]">Pros</span>
            </h2>

            <p className="text-[15px] font-medium text-[#2E2E2E] mb-4">
              Need Help?
            </p>
            <Link href="/contact">
              <Button
                size="large"
                className="bg-primary! text-white! border-0! h-11! px-6! rounded-lg font-medium mb-10 tracking-wide!"
              >
                Contact Us
              </Button>
            </Link>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#292929] rounded-lg flex items-center justify-center text-white hover:bg-primary transition-all"
              >
                <FaXTwitter size={18} />
              </a>
            </div>
          </div>

          {/* For Customer Column */}
          <div className="lg:col-span-3 flex flex-col lg:pl-4">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">
              For Customer
            </h3>
            <div className="flex flex-col gap-5">
              {customerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* For Service Provider Column */}
          <div className="lg:col-span-3 flex flex-col">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">
              For Service Provider
            </h3>
            <div className="flex flex-col gap-5">
              {providerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* About Column */}
          <div className="lg:col-span-2 flex flex-col">
            <h3 className="text-lg font-bold text-[#2E2E2E] mb-8">Support</h3>
            <div className="flex flex-col gap-5">
              {aboutLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#646464] hover:text-primary transition-colors font-medium text-[16px]"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="text-left text-[#646464] text-[15px] font-medium border-t border-[#EBEBEB] w-full py-4">
          <div className="flex flex-wrap items-center gap-1">
            <span>@2026 263 Pros.</span>
            <Link
              href="/terms"
              className="hover:text-primary pl-1 transition-all"
            >
              Terms and Condition/
            </Link>
            <Link
              href="/privacy"
              className="hover:text-primary pl-1 transition-all"
            >
              Privacy policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
