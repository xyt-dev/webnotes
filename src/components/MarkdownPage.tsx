import path from "path";
import fs from "fs";
import ReactMarkdown from "react-markdown";
import "katex/dist/katex.min.css"
// import 'highlight.js/styles/github.css'; // Or any other syntax highlighting theme
import remarkGfm from 'remark-gfm'
import remarkMath from "remark-math";
import rehypeHighlight from "rehype-highlight";
import rehypeKatex from "rehype-katex";

  export interface SyntaxHighlighterProps {
    language?: string;
    style?: any;
    className?: string;
    showLineNumbers?: boolean;
    children?: React.ReactNode;
  }

export function getMarkdownContent(filePath: string) {
  const path2markdown = path.join(process.cwd(), filePath);
  const fileContent = fs.readFileSync(path2markdown, "utf8");
  return fileContent
}

export default function MarkdownPage({filePath}: {filePath: string}) {
  return (
    <div>
      {/* className prose is needed in tailwind */}
      <ReactMarkdown
        className="prose daisy-prose"
        remarkPlugins={[remarkMath, remarkGfm]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        children={getMarkdownContent(filePath)}
      />
    </div>
  )
}