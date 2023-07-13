import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface IMarkdown {
  markdownString: string;
}

export default function Markdown({ markdownString }: IMarkdown) {
  return (
    <ReactMarkdown children={markdownString} remarkPlugins={[remarkGfm]} />
  );
}
