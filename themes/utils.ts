import dark from "./dark";
import light from "./light";

const mapTheme = (variables: typeof dark | typeof light) => {
  const result: Record<string, any> = {};
  Object.keys(variables).forEach((key) => {
    const value = (variables as any)[key];
    result[`--color-${key}`] = value;
  });

  return result;
};

const themes = {
  dark,
  light,
} as const;

export const initTheme = (): void => {
  const root = document.documentElement;
  const theme = root.classList.contains("dark") ? "dark" : "light";
  const themeObject = mapTheme(themes[theme]);

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
export const switchTheme = (): void => {
  const root = document.documentElement;
  let theme: keyof typeof themes = "dark";
  let prevTheme: keyof typeof themes = "light";

  console.log(theme, prevTheme);
  if (root.classList.contains("dark")) {
    theme = "light";
    prevTheme = "dark";
  }

  const themeObject = mapTheme(themes[theme]);
  const prevThemeObject = mapTheme(themes[prevTheme]);

  Object.keys(prevThemeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, "");
    root.classList.remove(prevTheme);
  });

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
    root.classList.add(theme);
  });
};
