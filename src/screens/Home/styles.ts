import styled, { css } from "styled-components/native";
import { Image } from "expo-image";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
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

export const GoToStatisticsButton = styled.TouchableOpacity`
  z-index: 1;
`;

export const GoToStatisticsIcon = styled(Feather).attrs(({ theme }) => ({
  size: 24,
  color: theme.COLORS.GREEN_DARK,
  name: "arrow-up-right",
}))`
  align-self: flex-end;
`;

export const MealListContainer = styled.View`
  flex: 1;
  margin-top: 24px;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin: 8px 0;
`;

export const MealDateText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  margin: 8px 0;
`;

export const TopGradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: [theme.COLORS.GRAY_7, "transparent"],
}))`
  height: 40px;
  width: 100%;
  margin-top: 24px;
  margin-bottom: -40px;
  z-index: 2;
`;

export const BottomGradient = styled(LinearGradient).attrs(({ theme }) => ({
  colors: ["transparent", theme.COLORS.GRAY_7],
}))`
  height: 50px;
  width: 100%;
  margin-top: -50px;
  z-index: 2;
`;
