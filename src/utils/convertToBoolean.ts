export const convertToBoolean = (value: string | number | boolean): boolean => {
  if (typeof value === "boolean") {
    return value;
  }

  if (typeof value === "number") {
    return value === 1;
  }

  return value === "true" || value === "1";
};
