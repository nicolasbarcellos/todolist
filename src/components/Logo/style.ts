import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 173px;
    background-color: ${theme.colors.gray700};
  `}
`;

export const Logo = styled.Image`
  ${({ theme }) => css`
    width: 110px;
    height: 32px;
  `}
`;
