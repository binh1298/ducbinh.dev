import { blackAndWhite } from "./palette-mui";
import { Blue, Emerald, Orange, Red, Sky, Stone } from "./palette-tailwind";

const light = {
  scheme: "light",
  primary: Blue["400"],
  "primary-hover": Blue["600"],
  text: Stone["900"],
  background: blackAndWhite["white"],
  info: Sky["500"],
  success: Emerald["500"],
  warning: Orange["500"],
  error: Red["500"],
} as const;

export default light;
