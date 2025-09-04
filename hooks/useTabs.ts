import { useState } from "react";
import { Tab } from "@/types";

export function useTabs() {
  const [tabs, setTabs] = useState<Tab[]>([]);

  /* Defining our methods using arrow function means it cannot be called before its defined -> for saftey */
  const defaultTabData = `<p>
  Enter your instructional text here.
</p>
<pre><code>
  // Enter your code snippet here.
</code></pre>`;

  const addTab = () => {
    if (tabs.length >= 15) {
      alert("Maximum tabs reached (15)");
      return;
    }

    const newTab: Tab = {
      id: Date.now(),
      title: "New Tab",
      data: defaultTabData,
    };
    setTabs([...tabs, newTab]);
  };
  const removeTab = (id: number) => {
    if (tabs.length <= 0) {
      alert("No tabs to delete");
    }
    const updatedTabs = tabs.filter((tab) => tab.id !== id);
    setTabs(updatedTabs);
  };

  const updateTab = (id: number, changes: Partial<Tab>) => {
    const updatedTabs = tabs.map((tab) => {
      if (tab.id === id) {
        return { ...tab, ...changes };
      }
      return tab;
    });
    setTabs(updatedTabs);
  };
  return { tabs, addTab, removeTab, updateTab };
}
