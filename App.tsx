import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import theme from './src/theme';
import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';
import { AppProvider } from '@hooks/index';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <StatusBar style="auto" />
        {fontsLoaded ? <Routes /> : <Loading />}
      </AppProvider>
    </ThemeProvider>
  );
}
