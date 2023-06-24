import styled from "styled-components/native";

import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_5};
`;

export const Content = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_7};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 32px 24px 0 24px;
gap: 30px;
`;

export const DateTimeContainer = styled.View`
  flex-direction: row;
  gap: 16px;
`;
