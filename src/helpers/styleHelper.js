import { css } from 'styled-components';

export const colors = {
  mainColor: '#607D8B',
  white: '#FFFFFF',
  black: '#4B4B4B',
  gray: '#999999',
  lightGray: '#EEEEEE',
  blue: '#2D7BFF'
}

export const media = {
  pc: (...args) => css`
    @media (min-width: 1024px)) {
      ${css(...args)};
    }
  `,
  phone: (...args) => css`
    @media (max-width: 767px) {
      ${css(...args)};
    }
  `
};
