import { RichText as CMSRichTextReactRender } from "@graphcms/rich-text-react-renderer";
import { RichTextContent } from "@graphcms/rich-text-types";

interface RichTextHygraphProps {
  text: RichTextContent
  className?: string
}
export function RichTextHygraph({ text, className }: RichTextHygraphProps) {
  return (
    <CMSRichTextReactRender
      content={text}
      renderers={{
        p: ({ children }) => <p className={`mb-4 ${className}`}>{children}</p>,
        h1: ({ children }) => <h1 className={`mt-4 ${className}`}>{children}</h1>,
        h2: ({ children }) => <h2 className={`mt-4 ${className}`}>{children}</h2>,
        h3: ({ children }) => <h3 className={`mt-4 ${className}`}>{children}</h3>,
        h4: ({ children }) => <h4 className={`mt-4 ${className}`}>{children}</h4>,
        h5: ({ children }) => <h5 className={`mt-4 ${className}`}>{children}</h5>,
        h6: ({ children }) => <h6 className={`mt-4 ${className}`}>{children}</h6>,
        ul: ({ children }) => (
          <ul className="list-disc pl-6 mb-4">{children}</ul>
        ),

        ol: ({ children }) => (
          <ol className="list-decimal pl-6 mb-4">{children}</ol>
        ),

        li: ({ children }) => (
          <li className="mb-1">{children}</li>
        ),
      }}
    />
  )
}