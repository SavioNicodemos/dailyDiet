import styled, { css } from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 24px;
`;

export const Body = styled.View`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  align-items: center;
`;

export const Message = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
  `}
  text-align: center;
  margin: 20px;
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  gap: 20px;
  padding-top: 15px;
`;
