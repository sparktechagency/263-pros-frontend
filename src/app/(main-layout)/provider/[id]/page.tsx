import ProviderProfilePage from "@/feature/main-layout/provider-profile";
import React from "react";
import { myFetch } from "../../../../../helpers/myFetch";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const res = await myFetch(`/auth/user/${id}`, {
    method: "GET",
    tags: ["provider"],
    cache: "no-cache",
  });
  const provider = res?.data;
  // console.log(res);
  return <ProviderProfilePage provider={provider} />;
}
