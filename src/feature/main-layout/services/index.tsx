import React, { Suspense } from "react";
import { ConfigProvider } from "antd";
import ServicesContent from "./sections/ServiceContent";
import Spinner from "@/shared/Spinner";
import ServiceBanner from "./sections/ServiceBanner";
import ServiceTags from "./sections/ServiceTags";
import { myFetch } from "../../../../helpers/myFetch";
export default async function ServicesPage() {  
  const res = await myFetch(`/service`, {
      tags: ["service"],
      method: "GET",
      // cache: "no-store",
    });
   const services = Array.isArray(res?.data) ? res.data : [];

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
          <ServicesContent services={services} />
          <ServiceTags />
        </section>
      </Suspense>
    </ConfigProvider>
  );
}
