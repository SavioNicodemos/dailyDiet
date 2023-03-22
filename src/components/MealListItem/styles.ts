import { Text } from "react-native";
import styled, { css } from "styled-components/native";

type SuccessSignProps = {
  isOnDiet: boolean;
};

export const Container = styled.TouchableOpacity`
  ${({ theme }) => css`
    border: 2px solid ${theme.COLORS.GRAY_5};
    background-color: ${theme.COLORS.GRAY_7};
  `};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 14px 16px 14px 12px;
  margin: 4px 0;
  gap: 12px;
`;

export const Time = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Separator = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_4};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const Name = styled(Text).attrs({
  numberOfLines: 1,
  ellipsizeMode: "tail",
})`
  flex: 1;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_2};
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;

export const SuccessSign = styled.View<SuccessSignProps>`
  ${({ theme, isOnDiet }) => css`
    background-color: ${isOnDiet
      ? theme.COLORS.GREEN_MID
      : theme.COLORS.RED_MID};
  `};
  height: 15px;
  width: 15px;
  border-radius: 10px;
`;
