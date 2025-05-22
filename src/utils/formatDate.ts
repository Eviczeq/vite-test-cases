export const formatDate = (date: Date | string): string => {
  if (!date) return "";
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  };

  return new Intl.DateTimeFormat("ja-JP", options).format(new Date(date));
};
