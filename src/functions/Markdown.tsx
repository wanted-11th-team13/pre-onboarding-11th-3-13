import ReactMarkdown from "react-markdown";

interface IMarkdown {
  markdownString: string;
}

export default function Markdown({ markdownString }: IMarkdown) {
  return <ReactMarkdown>{markdownString}</ReactMarkdown>;
}
