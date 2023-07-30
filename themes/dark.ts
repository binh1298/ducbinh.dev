import {
  Blue,
  Emerald,
  Orange,
  Red,
  Rose,
  Slate,
  Stone,
} from "./palette-tailwind";

const dark = {
  scheme: "dark",
  primary: Rose["500"],
  "primary-hover": Rose["700"],
  text: Stone["100"],
  background: Slate["950"],
  info: Blue["500"],
  success: Emerald["500"],
  warning: Orange["500"],
  error: Red["500"],
} as const;
export default dark;
