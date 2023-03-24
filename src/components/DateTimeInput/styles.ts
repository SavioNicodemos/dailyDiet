import styled, { css } from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex: 1;

  min-height: 76px;
  max-height: 76px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding-bottom: 5px;
`;

export const Body = styled.View`
  flex: 1;

  justify-content: center;
  ${({ theme }) => css`
    background-color: ${theme.COLORS.GRAY_7};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border: solid 1px ${theme.COLORS.GRAY_5};

    min-height: 56px;
    max-height: 56px;
  `}
  border-radius: 6px;
  padding: 12px;
`;

export const DatetimeText = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
