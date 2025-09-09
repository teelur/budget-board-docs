import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeFileBlock from "./CodeFileBlock";

const ComposeFiles = (): React.ReactNode => {
  return (
    <Tabs>
      <TabItem value="compose.yml">
        <CodeFileBlock
          fileUrl="https://raw.githubusercontent.com/teelur/budget-board/refs/heads/main/compose.yml"
          language="yml"
        />
      </TabItem>
      <TabItem value="compose.override.yml">
        <CodeFileBlock
          fileUrl="https://raw.githubusercontent.com/teelur/budget-board/refs/heads/main/compose.override.yml"
          language="yml"
        />
      </TabItem>
    </Tabs>
  );
};

export default ComposeFiles;
