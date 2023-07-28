import night from "./night";
import pastel from "./pastel";

interface IThemes {
  night: typeof night;
  pastel: typeof pastel;
}

const mapTheme = (variables: typeof night | typeof pastel) => {
  const result: Record<string, any> = {};
  Object.keys(variables).forEach((key) => {
    const value = (variables as any)[key];
    result[`--color-${key}`] = value;
  });

  return result;
};

const themes: IThemes = {
  night,
  pastel,
};
export const applyTheme = (
  theme: keyof IThemes,
  prevTheme: keyof IThemes
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
  });

  Object.keys(themeObject).forEach((property) => {
    if (property === "name") {
      return;
    }

    root.style.setProperty(property, themeObject[property]);
  });
};
