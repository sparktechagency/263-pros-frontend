import Image from "next/image";
import React from "react";
import ContactUsForm from "./component/ContactUsForm";
import { getTranslate } from "@/lib/helpers/getTranslate";

export default async function ContactPage() {
  const t: any = await getTranslate("contact");

  return (
    <div className="min-h-screen flex items-center justify-center container">
      <div className="grid md:grid-cols-2 gap-12 items-center justify-center pt-[88px]">
        <div className="py-6 ">
          <h1 className="section-title text-[#06825C] lg:mb-2">{t.title}</h1>
          <p className="section-subtitle text-[#717171] -mt-2 lg:mt-0 mb-8">
            {t.subtitle}
          </p>

          <div data-aos="fade-up" data-aos-delay={100}>
            <ContactUsForm t={t} />
          </div>
        </div>

        <div className="hidden md:block">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/assets/images/contact/office.png"
              alt="Office workspace"
              width={500}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
