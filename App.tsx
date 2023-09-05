import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/Navs';
import { ThemeProvider } from '@shopify/restyle';
import StatusBar from '@/components/StatusBar';
import { useAtom } from 'jotai';
import { activeThemeAtom } from '@/states/theme';

const App = () => {
  const [activeTheme] = useAtom(activeThemeAtom)

  return (
    <NavigationContainer>
      <ThemeProvider theme={activeTheme}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
