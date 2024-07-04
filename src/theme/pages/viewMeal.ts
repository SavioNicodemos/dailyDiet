import styled, { css } from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

type ColorScheme = "PRIMARY" | "SECONDARY";

type ColorSchemeProps = {
  type: ColorScheme;
};

export const Container = styled(SafeAreaView)<ColorSchemeProps>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 32px 24px 0 24px;
`;

export const ItemDetails = styled.View`
  flex: 1;
`;
export const Name = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.XL}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Description = styled.Text`
  padding-top: 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const DateTitle = styled.Text`
  padding-top: 24px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const DatetimeText = styled.Text`
  margin-top: 5px;
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const OnDietContainer = styled.View`
  flex-direction: row;
  gap: 8px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_6};
  margin-top: 30px;
  padding: 12px 16px;
  border-radius: 50px;
  align-self: flex-start;
  align-items: center;
`;

export const Indicator = styled.View<ColorSchemeProps>`
  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GREEN_DARK
      : theme.COLORS.RED_DARK};
  `};
  height: 15px;
  width: 15px;
  border-radius: 10px;
`;

export const OnDietText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Footer = styled.View`
  gap: 10px;
  height: 150px;
  padding: 10px 0;
`;
