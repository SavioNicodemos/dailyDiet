import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const Title = styled.Text`
${({ theme }) => css`
  font-size:  ${theme.FONT_SIZE.XXL}px;
  font-family: ${theme.FONT_FAMILY.BOLD};
`};
`;
