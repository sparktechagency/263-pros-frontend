import React, { Suspense } from "react";
import { ConfigProvider } from "antd";
import ServicesContent from "./sections/ServiceContent";
import Spinner from "@/shared/Spinner";
import ServiceBanner from "./sections/ServiceBanner";

export default function ServicesPage() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#005B6F",
          borderRadius: 8,
        },
      }}
    >
      <Suspense fallback={<Spinner />}>
        <section>
          <ServiceBanner />
          <ServicesContent />
        </section>
      </Suspense>
    </ConfigProvider>
  );
}
