export const getTheme = () => {
  return localStorage.getItem("theme") || "light";
};

export const applyTheme = (theme) => {
  document.body.className = theme;
};

export const saveTheme = (theme) => {
  localStorage.setItem("theme", theme);
  applyTheme(theme);
};