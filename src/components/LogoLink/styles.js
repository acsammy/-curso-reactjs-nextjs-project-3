import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
  display: flex;
  align-items: center;
  text-decorator: none;
  color: inherit;
  height: 10rem;

  > img {
    max-height: 3rem;
  }
  `}
`;
