import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XXL}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
