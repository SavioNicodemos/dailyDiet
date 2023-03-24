import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding-bottom: 5px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 12px;
`;
