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
    <div className="space-y-2">
      <h3 className="text-lg font-medium">Tab Headers</h3>
      {tabs.length === 0 && (
        <p className="text-sm text-gray-500">No tabs yet. Click Add New Tab to get started.</p>
      )}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          onClick={() => onTabSelect(tab.id)}
          // Simplified and inverted styles for the active tab.
          className={`flex items-center gap-2 p-2 border rounded-md cursor-pointer transition-colors ${
            tab.id === activeTabId
              // Active State: In light mode, it looks dark. In dark mode, it looks light.
              ? "bg-gray-900 text-white dark:bg-gray-100 dark:text-black border-gray-900 dark:border-gray-100"
              // Inactive State: A simple transparent background with a border.
              : "border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
          }`}
        >
          <input
            type="text"
            value={tab.title}
            onChange={(e) => {
              e.stopPropagation(); // Prevent the div's onClick from firing.
              onTabUpdate(tab.id, { title: e.target.value });
            }}
            // The input field's style also inverts to remain visible.
            className={`flex-grow p-1 text-sm bg-transparent border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-blue-500 ${
              tab.id === activeTabId
                ? 'border-gray-600 dark:border-gray-400 placeholder-gray-400 dark:placeholder-gray-500'
                : 'border-gray-300 dark:border-gray-600'
            }`}
            placeholder="Enter tab title"
          />
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent the div's onClick from firing.
              onTabRemove(tab.id);
            }}
            aria-label={`Remove ${tab.title} tab`}
            // The button color will inherit from the parent's text color.
            className="p-1 rounded-full hover:bg-red-500 hover:text-white transition-colors flex-shrink-0"
          >
            {/* Simple SVG for a delete icon */}
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      ))}
    </div>
  );
}
