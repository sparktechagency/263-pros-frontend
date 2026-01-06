interface policyPageProps {
  content: string;
  title: string;
}
export default function PolicyLayout({ content, title }: policyPageProps) {
  return (
    <div className="container mx-auto py-10 lg:py-16 min-h-[calc(100vh-68px)]">
      {/* Header */}

      <h1 className="section-title">{title}</h1>

      {/* Main Content Card */}
      <div className="bg-transparent pt-4 text-[#545454] ">
        <div
          className="prose prose-invert max-w-none leading-relaxed"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    </div>
  );
}
