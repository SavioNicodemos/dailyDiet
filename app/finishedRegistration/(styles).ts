import styled, { css } from "styled-components/native";
import { Image } from "expo-image";

export type ColorScheme = "PRIMARY" | "SECONDARY";

type Props = {
  type: ColorScheme;
};

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  padding: 24px;
  gap: 30px;
`;

export const TextsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Subtitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
  text-align: center;
`;

export const BoldText = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Illustration = styled(Image).attrs({
  contentFit: "contain",
})`
  min-height: 300px;
  width: 300px;
`;
