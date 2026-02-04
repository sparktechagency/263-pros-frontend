import ServicesPage from "@/feature/main-layout/services";
import React from "react";
import { myFetch } from "../../../../helpers/myFetch";
interface ServicesPageProps {
  searchParams: Promise<{
    service?: string;
    location?: string;
  }>;
}
export default async function Page({ searchParams }: ServicesPageProps) {
  const params = await searchParams;

  const { service = "", location = "" } = params;

  const res = await myFetch(`/service?searchTerm=${service}`, {
    tags: ["service"],
    method: "GET",
    cache: "no-cache",
  });
  const services = Array.isArray(res?.data) ? res.data : [];
  // console.log(services);

  return <ServicesPage services={services} />;
}
