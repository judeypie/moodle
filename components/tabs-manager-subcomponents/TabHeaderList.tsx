import { Tab } from "@/types";

interface TabHeaderListProps {
  tabs: Tab[];
  activeTabId: number | null;
  onTabSelect: (id: number) => void;
  onTabRemove: (id: number) => void;
  onTabUpdate: (id: number, changes: Partial<Tab>) => void;
}

export default function TabHeaderList({
  tabs,
  activeTabId,
  onTabSelect,
  onTabRemove,
  onTabUpdate,
}: TabHeaderListProps) {
  return (
    <div>
    {tabs.map(tab => (
        <div key={tab.id}
        onClick={() => onTabSelect(tab.id)}     
    className={tab.id === activeTabId ? 'bg-green-500' : ''
    }>
          <input
            type="text"
            value={tab.title}
            // When the input changes, call the update function from the parent
            onChange={(e) => onTabUpdate(tab.id, { title: e.target.value })}
          />
          {/* This button calls the remove function from the parent */}
          <button onClick={() => onTabRemove(tab.id)}>-</button>
        </div>
      ))}
    </div>
  );
}