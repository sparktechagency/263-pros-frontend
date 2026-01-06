import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";
import { termsConditionsContent } from "@/constants/policy/termsContent";

export default function page() {
  return (
    <PolicyLayout
      title={termsConditionsContent.title}
      content={termsConditionsContent.content}
    />
  );
}
