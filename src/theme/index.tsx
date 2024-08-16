import { extendTheme } from "@chakra-ui/react";
import { ColorStyle as colors } from "./ColorStyle";

export const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        fontFamily: "Bivoac Regular Demo",
        fontWeight: "normal",
      },
    },
  },
  colors,
});
