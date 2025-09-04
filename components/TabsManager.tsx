"use client";

import { useTabs } from "@/hooks/useTabs";
import { useState } from "react";
import TabHeaderList from "./tabs-manager-subcomponents/TabHeaderList";
import TabContent from "./tabs-manager-subcomponents/TabContent";
import { generateOutputHtml } from "@/lib/generateOutputHtml";

export default function TabsManager() {
  const { tabs, addTab, removeTab, updateTab } = useTabs();
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [outputHtml, setOutputHtml] = useState('');

  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const handleGenerate = () => {
    const generatedCode = generateOutputHtml(tabs);
    setOutputHtml(generatedCode);
  }
  return (
    <div>
      <div>
        <button onClick={addTab}> + </button>
        <button onClick={handleGenerate}>Generate Output</button>
        <textarea value={outputHtml}
        readOnly
        placeholder="Generated HTML code will appear here..."> </textarea>
      </div>

      <TabHeaderList
        tabs={tabs}
        activeTabId={activeTabId}
        onTabSelect={setActiveTabId} // Pass the setter function
        onTabRemove={removeTab}
        onTabUpdate={updateTab}
      />

      <TabContent
        activeTab ={activeTab} // Pass the entire object
        onContentUpdate={updateTab}
      />
    </div>
  );
}
