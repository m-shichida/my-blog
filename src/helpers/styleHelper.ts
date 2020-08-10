import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  pc: "1025px",
  tablet: "1024px",
  phone: "767px",
});

export const mediaPc = customMedia.greaterThan("pc");
export const mediaTablet = customMedia.lessThan("tablet");
export const mediaPhone = customMedia.lessThan("phone");

export const colors = {
  mainColor: "#607D8B",
  white: "#FFFFFF",
  black: "#191919",
  gray: "#999999",
  lightGray: "#EEEEEE",
  blue: "#2D7BFF",
};
