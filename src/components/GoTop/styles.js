import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    color: ${theme.colors.white};
    background: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
    bottom: 2rem;
    right: 2rem;
    z-index: 6;
    opacity: 0.7;
  `}
`;
