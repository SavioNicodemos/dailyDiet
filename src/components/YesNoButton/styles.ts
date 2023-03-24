import styled, { css } from "styled-components/native";

export type ColorSchemeProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ColorSchemeProps;
};

type ContainerProps = Props & {
  isSelected: boolean;
};

export const Container = styled.TouchableOpacity<ContainerProps>`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 8px;
  border-radius: 6px;
  ${({ theme, type, isSelected }) => css`
    background-color: ${isSelected
      ? type === "PRIMARY"
        ? theme.COLORS.GREEN_LIGHT
        : theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_6};
    border: ${isSelected
      ? type === "PRIMARY"
        ? "solid 1px " + theme.COLORS.GREEN_DARK
        : "solid 1px " + theme.COLORS.RED_DARK
      : "solid 1px " + theme.COLORS.GRAY_6};
  `};
`;

export const Indicator = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "PRIMARY" ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
  height: 8px;
  width: 8px;
  border-radius: 4px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.GRAY_1};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;
