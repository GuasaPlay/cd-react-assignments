import { TabContent } from "components/tabs/TabContent";
import { TabHeader } from "components/tabs/TabHeader";
import { PageTitle } from "components/ui/PageTitle";
import { useEffect, useState } from "react";
import { tabs } from "utils/dataTabs";

export const TabsPage = () => {
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => setActiveTab(tabs[0]), []);

  return (
    <div className="mx-auto mt-20 max-w-[1100px] px-3">
      <PageTitle name="20. Pestañas" />
      <section className="mt-6 rounded-lg border-2 border-slate-500">
        <TabHeader
          activeTab={activeTab}
          tabs={tabs}
          onTabClick={(tab) => setActiveTab(tab)}
        />
        <TabContent activeTab={activeTab} />
      </section>
    </div>
  );
};
