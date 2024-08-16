import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      @font-face {
         @font-face {
        font-family: 'Bivoac Regular Demo';
        src: url('./assets/fonts/Bivoac-Regular.otf') format('otf');
      }
    `}
  />
);

export default Fonts;
