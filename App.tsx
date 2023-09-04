import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/Navs';
import { ThemeProvider } from '@shopify/restyle';
import light from '@/themes/light';
import StatusBar from '@/components/StatusBar';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar />
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
