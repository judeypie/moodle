import { Tab } from "@/types";

interface TabContentProps {
  activeTab: Tab | undefined;
  onContentUpdate: (id: number, changes: Partial<Tab>) => void;
}

export default function TabContent({
  activeTab,
  onContentUpdate,
}: TabContentProps) {
  if (!activeTab) {
    return (
      <div>
        <p>No page selected</p>
      </div>
    );
  }

  return (
    <div>
      <textarea
        key={activeTab.id}
        value={activeTab.data}
        onChange={(e) =>
          onContentUpdate(activeTab.id, { data: e.target.value })
        }
        placeholder="Enter tab content here..."
      />
    </div>
  );
}
