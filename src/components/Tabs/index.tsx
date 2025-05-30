import clsx from "clsx";
import Button from "../ui/Button";
import "./index.scss";

const Tabs = ({
  tabs,
  setActiveTab,
  activeTab,
  isSeparatedTabs = false,
}: {
  tabs: string[];
  setActiveTab: (val: number) => void;
  activeTab: number;
  isSeparatedTabs?: boolean;
}) => {
  return (
    <div className={clsx("tabs", { "tabs--separated": isSeparatedTabs })}>
      {tabs?.map((tab, index) => {
        const isTabActive = index === activeTab;
        return (
          <Button
            key={index}
            className={clsx("tabs__tab", isTabActive && "tabs__tab--active")}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </Button>
        );
      })}
    </div>
  );
};

export default Tabs;
