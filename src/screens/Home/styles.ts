import styled from "styled-components/native";
import { Image } from "expo-image";

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
