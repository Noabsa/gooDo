const THEMES = {
  light: {
    brand: "#bb2649",
    tint: "#ffe1e8",
    tone: "#e4889e",
    shade: "#570b1e",
    hot: "#fd8522",
    cool: "#540468",
    hueR: "#d3cd16",
    hueL: "#930bfc",
  },
  dark: {},
};

const COLORS = {
  black: "#000000",
  white: "#ffffff",
  light: THEMES.light,
  dark: THEMES.dark,
};
const FONTS = { brand: "Albert Sans", app: "Source Sans Pro", user: "Inter" };
const SIZES = { xs: 0.6, s: 0.75, m: 1, l: 1.25, xl: 1.5, xxl: 2 };
const PROPS = { borderRadius: 3, buttonStandard: 20, fontStandard: 16 };

export { THEMES, COLORS, FONTS, SIZES, PROPS };
