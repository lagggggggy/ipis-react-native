import {NavGroup} from '../../../../data/models/NavItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {Button, Divider, List} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Home: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <SafeAreaView
      edges={['bottom']}
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <ScrollView>
        <View
          style={{
            paddingHorizontal: 16,
          }}>
          {navItemGroups.map((group, idx) => (
            <List.Section
              key={idx}
              style={{
                marginBottom: idx < group.items.length - 1 ? 16 : 0,
              }}>
              <List.Subheader
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                }}>
                {group.title}
              </List.Subheader>
              {group.items.map((item, idy) => (
                <React.Fragment key={idy}>
                  <List.Item
                    title={item.title}
                    disabled={item.disabled || !item.route}
                    onPress={() => {
                      if (item.route) {
                        navigation.navigate(item.route);
                      }
                    }}
                    right={props => (
                      <List.Icon {...props} icon="chevron-right" />
                    )}
                  />
                  {idy < group.items.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List.Section>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const navItemGroups: NavGroup[] = [
  {
    title: 'DDSA',
    items: [
      {
        key: 'agama',
        title: 'Agama',
        route: 'Agama',
      },
      {
        key: 'jantina',
        title: 'Jantina',
        route: 'Jantina',
      },
      {
        key: 'perkahwinan',
        title: 'Perkahwinan',
        route: 'Perkahwinan',
      },
      {
        key: 'hubungan',
        title: 'Hubungan',
        route: 'Hubungan',
      },
      {
        key: 'keturunan',
        title: 'Keturunan',
        route: 'Keturunan',
      },
      {
        key: 'warganegara',
        title: 'Warganegara',
        route: 'Warganegara',
      },
      {
        key: 'negara',
        title: 'Negara',
        route: 'Negara',
      },
    ],
  },
  {
    title: 'iPIS',
    items: [
      {
        key: 'pengguna',
        title: 'Pengguna',
        route: 'Pengguna',
      },
      {
        key: 'urusan',
        title: 'Urusan',
        route: 'Urusan',
      },
      {
        key: 'cuti',
        title: 'Cuti',
        route: 'Cuti',
      },
      {
        key: 'rentas',
        title: 'Rentas',
        route: 'Rentas',
      },
      {
        key: 'portfolio',
        title: 'Portfolio',
        route: 'Portfolio',
      },
      {
        key: 'tuntutan',
        title: 'Tuntutan',
        route: 'Tuntutan',
      },
    ],
  },
];
