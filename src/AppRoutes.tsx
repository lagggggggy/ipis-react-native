import Header from './components/Header';
import MyCutiRoutes from './features/myCuti/MyCutiRoutes';
import MyTadbirRoutes from './features/myTadbir/MyTadbirRoutes';
import Main from './pages/Main';
import Menu from './pages/Menu';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type RootStackParamList = {
  Main: undefined;
  Menu: undefined;
  MyCuti: undefined;
};

const Stack = createStackNavigator();

const AppRoutes = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        header: props => <Header {...props} />,
      }}>
      {/* core pages */}
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Menu" component={Menu} />

      {/* feature routes */}
      <Stack.Screen name="MyCuti" component={MyCutiRoutes} />
      <Stack.Screen name="MyTadbir" component={MyTadbirRoutes} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppRoutes;
