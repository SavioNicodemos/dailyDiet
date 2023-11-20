import { Stack } from "expo-router";

import {
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  useFonts,
} from "@expo-google-fonts/nunito-sans";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components/native";

import { Loading } from "@components/Loading";
import { AppProvider } from "@hooks/index";
import theme from "../src/theme";

export default function Layout() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar style="auto" />
        {fontsLoaded ? (
          <Stack screenOptions={{ headerShown: false }} />
        ) : (
          <Loading />
        )}
      </AppProvider>
    </ThemeProvider>
  );
}
