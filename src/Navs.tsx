import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/Main';
import Sidebar from './components/Sidebar';
import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeDrawerParamList = {
  Main: {};
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeDrawerParamList>;
  Detail: {
    noteId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Drawer = createDrawerNavigator<HomeDrawerParamList>();

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  );
};

const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigations;
