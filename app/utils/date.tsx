export function getCurrentDate(): string {
  const todaysDate = new Date();
  return todaysDate.toLocaleDateString();
}
