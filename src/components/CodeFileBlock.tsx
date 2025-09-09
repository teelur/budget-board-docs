import CodeBlock from "@theme/CodeBlock";
import React from "react";

interface CodeFileBlockProps {
  fileUrl: string;
  language?: string;
}

const CodeFileBlock = (props: CodeFileBlockProps): React.ReactNode => {
  const [code, setCode] = React.useState("");

  React.useEffect(() => {
    fetch(props.fileUrl)
      .then((response) => response.text())
      .then((text) => setCode(text))
      .catch((error) => setCode(`Error loading file: ${error.message}`));
  }, [props.fileUrl]);

  return (
    <CodeBlock language={props.language} showLineNumbers>
      {code}
    </CodeBlock>
  );
};

export default CodeFileBlock;
