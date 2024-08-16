import { extendTheme } from "@chakra-ui/react";
import { ColorStyle as colors } from "./ColorStyle";
// Supports weights 100-900
import "@fontsource-variable/overpass";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Overpass  Variable, sans-serif",
      },
    },
  },
  colors,
});
