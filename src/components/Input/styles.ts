import styled, { css } from "styled-components/native";
import { TextInput } from "react-native";

type TextInputProps = {
  isMultiline: boolean;
};

export const Container = styled.View<TextInputProps>`
  flex: 1;
  ${({ isMultiline }) => css`
    min-height: ${isMultiline ? 146 : 76}px;
    max-height: ${isMultiline ? 146 : 76}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  padding-bottom: 5px;
`;

export const TextInputStyled = styled(TextInput)<TextInputProps>`
  flex: 1;
  ${({ theme, isMultiline }) => css`
    background-color: ${theme.COLORS.GRAY_7};
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;

    border: solid 1px ${theme.COLORS.GRAY_5};

    min-height: ${isMultiline ? 120 : 56}px;
    max-height: ${isMultiline ? 120 : 56}px;
  `}
  border-radius: 6px;
  padding: 12px;
`;
