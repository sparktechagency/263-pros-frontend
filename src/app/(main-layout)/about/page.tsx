import { aboutUsContent } from "@/constants/policy/aboutContent";
import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";

export default function page() {
  return (
    <PolicyLayout
      title={aboutUsContent.title}
      content={aboutUsContent.content}
    />
  );
}
