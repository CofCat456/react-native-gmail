import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigations from './src/Navs';
import { ThemeProvider } from '@shopify/restyle';
import light from '@/themes/light';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  );
};

export default App;
