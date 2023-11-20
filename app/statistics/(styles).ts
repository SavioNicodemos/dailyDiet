import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type ColorScheme = "PRIMARY" | "SECONDARY";

type Props = {
  type: ColorScheme;
};

export const Container = styled(SafeAreaView)<Props>`
  flex: 1;
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  padding-top: 24px;
`;

export const StatisticsCardsContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  margin-top: 32px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 32px 24px 0 24px;
  gap: 12px;
`;

export const StatisticsTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  text-align: center;
  margin-bottom: 32px;
`;

export const OnAndOffDietContainer = styled.View`
  justify-content: space-between;
  flex-direction: row;
  gap: 12px;
`;
