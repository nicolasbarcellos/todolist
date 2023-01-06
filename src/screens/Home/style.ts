import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.blue};
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 48px;
    font-family: ${theme.fonts.family.regular};
  `}
`;
