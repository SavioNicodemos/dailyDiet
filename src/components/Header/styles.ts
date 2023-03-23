import styled, { css } from "styled-components/native";

type ContainerProps = {
  noMargin: boolean;
};

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: center;
  ${({ noMargin }) => css`
    margin: ${noMargin ? "0" : "24px 0"};
  `};
`;

export const Title = styled.Text`
  flex: 1;
  text-align: center;
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_1};
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `};
  margin-left: -32px;
`;
