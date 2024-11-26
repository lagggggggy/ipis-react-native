import Header from '../../components/Header';
import BakiCuti from './pages/BakiCuti';
import DaftarCuti from './pages/DaftarCuti';
import GanjaranCuti from './pages/GanjaranCuti';
import Home from './pages/Home';
import KalendarCuti from './pages/KalendarCuti';
import KelayakanCuti from './pages/KelayakanCuti';
import PenggantiCuti from './pages/PenggantiCuti';
import SenaraiCuti from './pages/SenaraiCuti';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

export type MyCutiStackParamList = {
  Home: undefined;
  SenaraiCuti: undefined;
  KelayakanCuti: undefined;
  BakiCuti: undefined;
  PenggantiCuti: undefined;
  GanjaranCuti: undefined;
  KalendarCuti: undefined;
  DaftarCuti: undefined;
};

const MyCutiStack = createStackNavigator();

const MyCutiRoutes = () => (
  <MyCutiStack.Navigator
    initialRouteName="Home"
    screenOptions={{
      header: props => <Header {...props} />,
    }}>
    <MyCutiStack.Screen
      name="Home"
      component={Home}
      options={{title: 'myCuti'}}
    />
    <MyCutiStack.Screen
      name="SenaraiCuti"
      component={SenaraiCuti}
      options={{title: 'Senarai Cuti'}}
    />
    <MyCutiStack.Screen
      name="KelayakanCuti"
      component={KelayakanCuti}
      options={{title: 'Kelayakan Cuti'}}
    />
    <MyCutiStack.Screen
      name="BakiCuti"
      component={BakiCuti}
      options={{title: 'Baki Cuti'}}
    />
    <MyCutiStack.Screen
      name="PenggantiCuti"
      component={PenggantiCuti}
      options={{title: 'Pengganti Cuti'}}
    />
    <MyCutiStack.Screen
      name="GanjaranCuti"
      component={GanjaranCuti}
      options={{title: 'Ganjaran Cuti'}}
    />
    <MyCutiStack.Screen
      name="KalendarCuti"
      component={KalendarCuti}
      options={{title: 'Kalendar Cuti'}}
    />
    <MyCutiStack.Screen
      name="DaftarCuti"
      component={DaftarCuti}
      options={{title: 'Permohonan Cuti'}}
    />
  </MyCutiStack.Navigator>
);

export default MyCutiRoutes;
