import dark from "./dark";
import light from "./light";

export const defaultTheme = "light" as const;
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
  const theme = defaultTheme;
  const themeObject = mapTheme(themes[theme]);

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }
    root.classList.remove("dark");
    root.classList.remove("light");
    root.classList.add(theme);
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

export const getCurrentTheme = () => {
  const root = document.documentElement;
  return root.classList.contains("dark") ? "dark" : "light";
};
