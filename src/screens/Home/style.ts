import { Text } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
  ${({ theme }) => css`
    background-color: ${theme.colors.gray600};
    flex: 1;
  `}
`;

// export const Title = styled.Text`
//   ${({ theme }) => css`
//     font-size: ${theme.font.sizes.large};
//     font-family: ${theme.font.family.regular};
//   `}
// `;
