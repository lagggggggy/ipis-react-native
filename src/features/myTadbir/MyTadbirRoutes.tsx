import Header from '../../components/Header';
import CutiRoutes from './features/cuti/CutiRoutes';
import Home from './pages/Home';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type MyTadbirStackParamList = {
  Home: undefined;
  Cuti: undefined;
};

const MyTadbirStack = createStackNavigator();

const MyTadbirRoutes = () => (
  <MyTadbirStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: props => <Header {...props} />,
    }}>
    <MyTadbirStack.Screen
      name="Home"
      component={Home}
      options={{title: 'myTadbir'}}
    />
    <MyTadbirStack.Screen
      name="Cuti"
      component={CutiRoutes}
      options={{
        headerShown: false,
        title: 'myTadbir Cuti',
      }}
    />
  </MyTadbirStack.Navigator>
);

export default MyTadbirRoutes;
