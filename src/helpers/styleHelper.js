import { css } from "styled-components";

export const colors = {
  mainColor: "#607D8B",
  white: "#FFFFFF",
  black: "#191919",
  gray: "#999999",
  lightGray: "#EEEEEE",
  blue: "#2D7BFF",
};

export const media = {
  pc: (...args) => css`
    @media only screen and (min-width: 1025px) {
      ${css(...args)};
    }
  `,
  tablet: (...args) => css`
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  phone: (...args) => css`
    @media only screen and (min-width: 120px) and (max-width: 767px) {
      ${css(...args)};
    }
  `,
};
