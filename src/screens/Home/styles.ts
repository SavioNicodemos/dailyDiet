import styled, { css } from "styled-components/native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  padding: 24px 24px 0 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
`;

export const HomeHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const AppLogo = styled(Image).attrs({
  contentFit: "contain",
})`
  width: 82px;
`;

export const AvatarPicture = styled(Image).attrs({
  contentFit: "cover",
})`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: solid 3px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const MealsPercentageContainer = styled.View`
  width: 100%;
  padding: 18px;
  margin: 8px 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const GoToStatisticsIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  name: "arrow-up-right",
}))`
  align-self: flex-end;
`;
