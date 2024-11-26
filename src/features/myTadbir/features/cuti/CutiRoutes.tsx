import Header from '../../../../components/Header';
import Home from './pages/Home';
import PegawaiCuti from './pages/PegawaiCuti';
import Peringkat from './pages/PeringkatCuti';
import ProsesCuti from './pages/ProsesCuti';
import StatusCuti from './pages/StatusCuti';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type MyTadbirCutiStackParamList = {
  Home: undefined;
  PeringkatCuti: undefined;
  ProsesCuti: undefined;
  PegawaiCuti: undefined;
  StatusCuti: undefined;
  SenaraiCuti: undefined;
  BakiCuti: undefined;
};

const MyTadbirCutiStack = createStackNavigator();

const MyTadbirCutiRoutes = () => (
  <MyTadbirCutiStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: props => <Header {...props} />,
    }}>
    <MyTadbirCutiStack.Screen
      name="Home"
      component={Home}
      options={{title: 'myTadbir Cuti'}}
    />
    <MyTadbirCutiStack.Screen
      name="PeringkatCuti"
      component={Peringkat}
      options={{title: 'Peringkat Cuti'}}
    />
    <MyTadbirCutiStack.Screen
      name="ProsesCuti"
      component={ProsesCuti}
      options={{title: 'Proses Cuti'}}
    />
    <MyTadbirCutiStack.Screen
      name="PegawaiCuti"
      component={PegawaiCuti}
      options={{title: 'Pegawai Cuti'}}
    />
    <MyTadbirCutiStack.Screen
      name="StatusCuti"
      component={StatusCuti}
      options={{title: 'Status Cuti'}}
    />
    {/* <MyTadbirCutiStack.Screen
        name="SenaraiCuti"
        component={SenaraiCuti}
        options={{title: 'Senarai Cuti'}}
      />
      <MyTadbirCutiStack.Screen
        name="BakiCuti"
        component={BakiCuti}
        options={{title: 'Baki Cuti'}}
      /> */}
  </MyTadbirCutiStack.Navigator>
);

export default MyTadbirCutiRoutes;
