import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';

import { Home } from '@screens/Home';

import theme from './src/theme';
import { Loading } from '@components/Loading';

export default function App() {
  const [fontsLoaded] = useFonts({ NunitoSans_400Regular, NunitoSans_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="auto" />
      {fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
  );
}
