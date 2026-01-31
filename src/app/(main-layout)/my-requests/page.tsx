import { MyRequestsContent } from "@/feature/main-layout/my-request";
import React from "react";
import { myFetch } from "../../../../helpers/myFetch";

export default async function page() {
  const res = await myFetch("/service-booking", {
    method: "GET",
    tags: ["service-booking"],
    cache: "no-store",
  });
  const acceptedRes = await myFetch("/service-booking/status?status=accepted", {
    method: "GET",
    tags: ["service-booking"],
    cache: "no-store",
  });
  const requests = Array.isArray(res?.data) ? res.data : [];
  const quotations = Array.isArray(acceptedRes?.data) ? acceptedRes.data : [];
  // console.log("quotations", quotations);
  return <MyRequestsContent requests={requests} quotations={quotations} />;
}
