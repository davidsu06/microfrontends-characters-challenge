import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    text: {
      color1: string;
      mainFontFamily: string;
    };

    backgroundColor: {
      bg1: string;
      bg2: string;
    };
  }
}
