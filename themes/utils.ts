import dark from "./dark";
import light from "./light";

interface IThemes {
  dark: typeof dark;
  light: typeof light;
}

const mapTheme = (variables: typeof dark | typeof light) => {
  const result: Record<string, any> = {};
  Object.keys(variables).forEach((key) => {
    const value = (variables as any)[key];
    result[`--color-${key}`] = value;
  });

  return result;
};

const themes: IThemes = {
  dark,
  light,
};
export const applyTheme = (
  theme: keyof IThemes,
  prevTheme: keyof IThemes,
): void => {
  const themeObject = mapTheme(themes[theme]);
  const prevThemeObject = mapTheme(themes[prevTheme]);
  if (!themeObject) return;

  const root = document.documentElement;

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
