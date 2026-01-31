import { MyRequestsContent } from "@/feature/main-layout/my-request";
import React from "react";
import { myFetch } from "../../../../helpers/myFetch";

export default async function page() {
  const res = await myFetch("/service-booking", {
    method: "GET",
    tags: ["service-booking"],
    cache: "no-store",
  });
  const requests = Array.isArray(res?.data) ? res.data : [];

  // console.log(requests);
  return <MyRequestsContent requests={requests} />;
}
