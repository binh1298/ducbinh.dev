import {
  Blue,
  Emerald,
  Orange,
  Red,
  Sky,
  Slate,
  Stone,
} from "./palette-tailwind";

const light = {
  scheme: "light",
  primary: Blue["400"],
  "primary-hover": Blue["600"],
  text: Stone["900"],
  background: Slate["100"],
  info: Sky["500"],
  success: Emerald["500"],
  warning: Orange["500"],
  error: Red["500"],
} as const;

export default light;
