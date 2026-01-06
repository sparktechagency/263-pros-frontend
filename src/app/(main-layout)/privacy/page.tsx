import { privacyPolicyContent } from "@/constants/policy/privacyContent";
import PolicyLayout from "@/shared/PolicyLayout";
import React from "react";

export default function page() {
  return (
    <PolicyLayout
      title={privacyPolicyContent.title}
      content={privacyPolicyContent.content}
    />
  );
}
