export const isObjectEmpty = (obj: object): boolean => {
  return typeof obj === "object" && Object.keys(obj).length === 0;
};
