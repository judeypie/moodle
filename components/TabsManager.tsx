"use client";

import { useTabs } from "@/hooks/useTabs";
import { useState } from "react";
import TabHeaderList from "./tabs-manager-subcomponents/TabHeaderList";
import TabContent from "./tabs-manager-subcomponents/TabContent";
import { generateOutputHtml } from "@/lib/generateOutputHtml";



export default function TabsManager() {
  const { tabs, addTab, removeTab, updateTab } = useTabs();
  const [activeTabId, setActiveTabId] = useState<number | null>(null);
  const [outputHtml, setOutputHtml] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);
  const activeTab = tabs.find((tab) => tab.id === activeTabId);

  const handleGenerate = () => {
    const generatedCode = generateOutputHtml(tabs);
    setOutputHtml(generatedCode);
  };

  //This copies the HMTL onto the clipboard
  const handleCopy = () => {
    if (!outputHtml) return;
    navigator.clipboard.writeText(outputHtml).then(() => {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000); // Reset message after 2 seconds
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <button
          onClick={addTab}
          className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 transition-colors"
        >
          Add New Tab
        </button>
        <button
          onClick={handleGenerate}
          className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-300 dark:bg-green-500 dark:hover:bg-green-600 dark:focus:ring-green-800 transition-colors"
        >
          Generate Output
        </button>
      </div>

      {/* Main editor interface, split into two columns on larger screens */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column for managing tab headers and content */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tab Editor</h2>
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
            <TabHeaderList
              tabs={tabs}
              activeTabId={activeTabId}
              onTabSelect={setActiveTabId}
              onTabRemove={removeTab}
              onTabUpdate={updateTab}
            />
          </div>
          <div className="p-4 border rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700 min-h-[200px]">
            <TabContent activeTab={activeTab} onContentUpdate={updateTab} />
          </div>
        </div>

        {/* Right column for displaying the generated HTML output */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Generated HTML</h2>
            <button
              onClick={handleCopy}
              disabled={!outputHtml}
              className="px-4 py-2 text-sm font-medium text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-500 dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-colors disabled:opacity-50"
            >
              {copySuccess ? "Copied!" : "Copy"}
            </button>
          </div>
          <textarea
            value={outputHtml}
            readOnly
            placeholder="Generated HTML code will appear here..."
            className="w-full h-96 p-4 font-mono text-sm bg-gray-100 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>
    </div>
  );
}
