import { STUDENT_NAME, STUDENT_NUMBER, WEBSITE_NAME } from "@/lib/constants";
import { getCurrentDate } from "../utils/date";

export default function Footer() {
  return (

    <footer
      data-testid="footer"
      className="border-t border-gray-200 dark:border-gray-800 mt-auto"
    >
      <div className="container mx-auto px-4 py-6">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center sm:text-left text-sm text-gray-500 dark:text-gray-400">
          <p>&copy; {getCurrentDate()} {WEBSITE_NAME}</p>
          <p>{STUDENT_NAME}</p>
          <p>{STUDENT_NUMBER}</p>
          <p>Last Updated: {getCurrentDate()}</p>
        </div>
      </div>
    </footer>
  );
}
