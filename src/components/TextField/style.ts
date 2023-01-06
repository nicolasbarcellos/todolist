import styled, { css, DefaultTheme } from "styled-components/native";

type InputProps = {
  isFocused: boolean;
};

const inputModifiers = {
  isFocused: (theme: DefaultTheme) => css`
    border-color: ${theme.colors.purpleDark};
  `,
};

export const Wrapper = styled.View`
  ${({ theme }) => css`
    padding: 0 24px;
    margin-top: -30px;
  `}
`;

export const Input = styled.TextInput<InputProps>`
  ${({ theme, isFocused }) => css`
    background-color: ${theme.colors.gray500};
    border: 1px solid ${theme.colors.gray700};
    border-radius: ${theme.border.radius};
    height: 54px;
    font-family: ${theme.font.family.regular};
    font-size: ${theme.font.sizes.large};
    padding: 16px;
    color: ${theme.colors.gray100};

    ${isFocused && inputModifiers.isFocused(theme)}
  `}
`;
