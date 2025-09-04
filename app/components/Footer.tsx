import { STUDENT_NAME, STUDENT_NUMBER, WEBSITE_NAME } from "../constants";
import { getCurrentDate } from "../utils/date";

export default function Footer() {
  return <>
    <footer className="flex items-center">
        <p> &copy;{WEBSITE_NAME} </p>
        <p> {STUDENT_NAME} </p>
        <p> {STUDENT_NUMBER} </p>
        <p> {getCurrentDate()} </p> {/* Calls external utility function to get current date formated with users default format */}
    </footer>
  </>;
}
