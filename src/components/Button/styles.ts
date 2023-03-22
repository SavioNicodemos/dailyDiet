import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";

export type ButtonTypeStyleProps = "PRIMARY" | "SECONDARY";

type Props = {
  type: ButtonTypeStyleProps;
};

export const Container = styled(TouchableOpacity)<Props>`
  flex: 1;

  flex-direction: row;
  min-height: 56px;
  max-height: 56px;

  ${({ theme, type }) => css`
    background-color: ${type === "PRIMARY"
      ? theme.COLORS.GRAY_2
      : theme.COLORS.GRAY_6};
    border: ${type === "PRIMARY" ? "none" : "solid 2px " + theme.COLORS.GRAY_2};
  `};
  border-radius: 6px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<Props>`
  ${({ theme, type }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    color: ${type === "PRIMARY" ? theme.COLORS.GRAY_6 : theme.COLORS.GRAY_2};
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
`;

export const Icon = styled(Feather)`
  margin-right: 12px;
`;
