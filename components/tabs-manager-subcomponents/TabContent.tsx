import { Tab } from "@/types";

interface TabContentProps {
  activeTab: Tab | undefined;
  onContentUpdate: (id: number, changes: Partial<Tab>) => void;
}

export default function TabContent({
  activeTab,
  onContentUpdate,
}: TabContentProps) {

  // If no tab is selected default output
  if (!activeTab) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-4 border rounded-lg border-dashed border-gray-300 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
          No Tab Selected
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Select a tab from the list above to edit its content.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full flex flex-col">
      <h3 className="text-lg font-medium mb-2">
        Content for: <span className="font-bold">{activeTab.title}</span>
      </h3>
      <textarea
        key={activeTab.id}
        value={activeTab.data}
        onChange={(e) =>
          onContentUpdate(activeTab.id, { data: e.target.value })
        }
        placeholder="Enter your HTML and text content here..."
        
        className="w-full flex-grow p-10 text-sm font-mono bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md focus:ring-1 focus:ring-blue-500 focus:outline-none resize-y"
      />
    </div>
  );
}
