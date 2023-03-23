import styled, { css } from "styled-components/native";

type PropColors = "DEFAULT" | "RED" | "GREEN";

type Props = {
  type: PropColors;
};

export const Container = styled.View<Props>`
  padding: 16px;
  background-color: ${({ theme, type }) =>
    type === "GREEN"
      ? theme.COLORS.GREEN_LIGHT
      : type === "RED"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  gap: 8px;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Description = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
