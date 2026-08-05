export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // Content is always developer-authored structured data, never raw user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
