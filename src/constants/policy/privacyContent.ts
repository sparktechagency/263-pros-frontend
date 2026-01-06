export interface PolicyContent {
  title: string;
  content: string;
}

export const privacyPolicyContent: PolicyContent = {
  title: "Privacy Policy",
  content: `
    <p class="text-base md:text-lg leading-relaxed">
      At <strong>263 Pros</strong>, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our platform.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      1. Information We Collect
    </h3>
    <p class="mt-3 leading-relaxed">
      We may collect personal information such as your name, contact details, location, and service preferences when you register or use our services.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      2. How We Use Your Information
    </h3>
    <ul class="mt-4 list-disc pl-6 space-y-2">
      <li>To connect you with relevant service providers</li>
      <li>To improve platform functionality and user experience</li>
      <li>To communicate updates, support, and service-related information</li>
    </ul>

    <h3 class="mt-8 text-xl font-semibold">
      3. Information Sharing
    </h3>
    <p class="mt-3 leading-relaxed">
      We do not sell or rent your personal data. Information is shared only with service providers as necessary to deliver requested services or when required by law.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      4. Data Security
    </h3>
    <p class="mt-3 leading-relaxed">
      We implement reasonable security measures to protect your personal information from unauthorized access, disclosure, or misuse.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      5. Cookies
    </h3>
    <p class="mt-3 leading-relaxed">
      263 Pros may use cookies and similar technologies to enhance user experience and analyze platform usage.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      6. Your Rights
    </h3>
    <p class="mt-3 leading-relaxed">
      You have the right to access, update, or request deletion of your personal information, subject to applicable laws.
    </p>

    <h3 class="mt-8 text-xl font-semibold">
      7. Policy Updates
    </h3>
    <p class="mt-3 leading-relaxed">
      This Privacy Policy may be updated periodically. Continued use of the platform indicates acceptance of the updated policy.
    </p>
  `,
};
