export interface PolicyContent {
  title: string;
  content: string;
}

export const aboutUsContent: PolicyContent = {
  title: "About Us",
  content: `
    <p class="text-base md:text-lg  leading-relaxed">
      <strong class="">263 Pros</strong> is a trusted multi-service platform dedicated to delivering high-quality domestic, professional, and property services under one roof. We connect customers with skilled, verified professionals who are committed to excellence, reliability, and customer satisfaction.
    </p>

    <p class="mt-4  leading-relaxed">
      Our mission is simple — to make everyday services easier, faster, and more dependable. Whether you need help at home, on your property, or at a worksite, 263 Pros ensures you get the right expert for the job, every time.
    </p>

    <h3 class="mt-8 text-xl font-semibold ">
      What We Do
    </h3>

    <p class="mt-3 ">
      We offer a wide range of services designed to meet both residential and commercial needs, including but not limited to:
    </p>

    <ul class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2  list-disc pl-6">
      <li>Domestic & Professional Cleaning</li>
      <li>Gardening & Outdoor Maintenance</li>
      <li>Post-Construction Cleaning</li>
      <li>Laundry & Ironing Services</li>
      <li>Painting & Decorating</li>
      <li>Plumbing Services</li>
      <li>Electrical Services</li>
      <li>Carpentry & Property Repairs</li>
    </ul>

    <h3 class="mt-10 text-xl font-semibold ">
      Why Choose 263 Pros
    </h3>

    <ul class="mt-4 space-y-2  list-disc pl-6">
      <li>Experienced and carefully vetted professionals</li>
      <li>Transparent pricing with no hidden costs</li>
      <li>Flexible scheduling that fits your lifestyle</li>
      <li>High standards of quality, safety, and reliability</li>
      <li>Customer-first approach with responsive support</li>
    </ul>

    <p class="mt-6  leading-relaxed">
      At 263 Pros, we believe that great service is built on trust, professionalism, and attention to detail. Every service provider on our platform is carefully selected to ensure they meet our quality benchmarks and deliver consistent results.
    </p>

    <p class="mt-6  leading-relaxed">
      Whether it’s maintaining your home, improving your property, or completing a professional project,
      <strong class="">263 Pros</strong> is here to help you get it done — efficiently and professionally.
    </p>

    <p class="mt-8 italic text-sm text-[#9F9F9F]">
      Your needs. Our professionals. One reliable platform.
    </p>
  `,
};
