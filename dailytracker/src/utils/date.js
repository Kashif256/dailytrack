export const today = () => {
  return new Date().toISOString().split("T")[0];
};