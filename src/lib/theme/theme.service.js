import { keyframes } from 'styled-components';

export const spacing = (num) => `${4 * Number(num)}px`;

export const fade = keyframes`
  from {
    opacity: 0;
  }
`;
