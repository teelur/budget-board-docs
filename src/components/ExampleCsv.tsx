import Tabs from "@theme/Tabs";
import TabItem from "@theme/TabItem";
import CodeFileBlock from "./CodeFileBlock";

const ExampleCsv = (): React.ReactNode => {
  return (
    <Tabs>
      <TabItem value="example.csv">
        <CodeFileBlock
          fileUrl="https://raw.githubusercontent.com/teelur/budget-board/refs/heads/main/example/example.csv"
          language="csv"
        />
      </TabItem>
    </Tabs>
  );
};

export default ExampleCsv;
