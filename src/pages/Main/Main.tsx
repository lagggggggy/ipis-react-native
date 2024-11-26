import Home from '../Home';
import Notifications from '../Notifications';
import Profile from '../Profile';
import Tasks from '../Tasks';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {SafeAreaView, View} from 'react-native';
import {BottomNavigation, FAB} from 'react-native-paper';

const routes = [
  {
    key: 'home',
    title: 'Home',
    focusedIcon: 'home',
    unfocusedIcon: 'home-outline',
  },
  {
    key: 'profile',
    title: 'Profile',
    focusedIcon: 'account',
    unfocusedIcon: 'account-outline',
  },
  {key: 'menu', title: 'Menu', focusedIcon: 'menu', unfocusedIcon: 'menu'},
  {
    key: 'tasks',
    title: 'Tasks',
    focusedIcon: 'format-list-bulleted-square',
    unfocusedIcon: 'format-list-checkbox',
  },
  {
    key: 'notifications',
    title: 'Notifications',
    focusedIcon: 'bell',
    unfocusedIcon: 'bell-outline',
  },
];

const Main: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();
  const [index, setIndex] = React.useState<number>(0);

  const handleIndexChange = (newIndex: number) => {
    // Prevent changing index if "Menu" is selected
    if (routes[newIndex].key === 'menu') {
      return; // Do nothing
    }
    setIndex(newIndex);
  };

  const navigateToMenu = () => {
    navigation.navigate('Menu');
  };

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    profile: Profile,
    tasks: Tasks,
    notifications: Notifications,
  });

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#D8F3FF'}}>
      <View style={{flex: 1}}>
        <BottomNavigation
          // activeColor="#37ABFF"
          labeled={false}
          navigationState={{index, routes}}
          onIndexChange={handleIndexChange}
          renderScene={renderScene}
          barStyle={{backgroundColor: 'white'}}
          activeIndicatorStyle={{backgroundColor: '#D8F3FF'}}
          safeAreaInsets={{bottom: 0}}
        />
        <FAB
          style={{
            position: 'absolute',
            bottom: 20,
            alignSelf: 'center',
            borderRadius: 30,
            backgroundColor: '#37ABFF',
          }}
          icon="menu"
          color="white"
          onPress={navigateToMenu}
        />
      </View>
    </SafeAreaView>
  );
};

export default Main;
