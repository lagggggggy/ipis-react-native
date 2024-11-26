import {NavGroup} from '../../../../../../data/models/NavItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ScrollView, View} from 'react-native';
import {Divider, List} from 'react-native-paper';
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
    title: 'Kawalan',
    items: [
      {
        key: 'peringkat',
        title: 'Peringkat',
        route: 'PeringkatCuti',
      },
      {
        key: 'proses',
        title: 'Proses',
        route: 'ProsesCuti',
      },
      {
        key: 'pegawai',
        title: 'Pegawai',
        route: 'PegawaiCuti',
      },
      {
        key: 'status',
        title: 'Status',
        route: 'StatusCuti',
      },
    ],
  },
  {
    title: 'Penyelenggaraan',
    items: [
      {
        key: 'senaraiCuti',
        title: 'Senarai Cuti',
      },
      {
        key: 'bakiCuti',
        title: 'Baki Cuti',
      },
    ],
  },
];
