import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  lg: "1025px",
  md: "1024px",
  sm: "968px",
  xs: "767px",
});

export const mediaPc = customMedia.greaterThan("lg");
export const mediaTabletL = customMedia.lessThan("md");
export const mediaTablet = customMedia.lessThan("sm");
export const mediaPhone = customMedia.lessThan("xs");

export const colors = {
  mainColor: "#607D8B",
  white: "#FFFFFF",
  black: "#191919",
  gray: "#999999",
  lightGray: "#EEEEEE",
  blue: "#2D7BFF",
};
