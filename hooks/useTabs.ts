import { useState, useEffect } from "react";
import { Tab } from "@/types";

const TABS_STORAGE_KEY = "tabsEditorData";

const defaultTabData = `<p>
  Enter your instructional text here.
</p>
<pre><code>
  // Enter your code snippet here.
</code></pre>`;

export function useTabs() {
  const [tabs, setTabs] = useState<Tab[]>([]);

  useEffect(() => {
    try {
      const storedTabs = localStorage.getItem(TABS_STORAGE_KEY);
      if (storedTabs) {
        setTabs(JSON.parse(storedTabs));
      }
    } catch (error) {
      console.error("Failed to parse tabs from localStorage", error);
    }
  }, []);

  useEffect(() => {
     if (tabs.length > 0) {
      localStorage.setItem(TABS_STORAGE_KEY, JSON.stringify(tabs));
    }
  }, [tabs]);
  /* Defining our methods using arrow function means it cannot be called before its defined -> for saftey */

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
