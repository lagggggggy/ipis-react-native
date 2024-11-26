import {NavItem} from '../../../../data/models/NavItem';
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
          {navItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <List.Item
                title={item.title}
                disabled={!item.route}
                onPress={() => {
                  if (item.route) {
                    navigation.navigate(item.route);
                  }
                }}
                left={props => <List.Icon {...props} icon={item.icon!} />}
                right={props => <List.Icon {...props} icon="chevron-right" />}
              />
              {idx < navItems.length - 1 && <Divider />}
            </React.Fragment>
          ))}
          <Button
            mode="contained"
            buttonColor="#37ABFF"
            uppercase={false}
            icon="plus"
            onPress={() => navigation.navigate('DaftarCuti')}
            style={{
              marginTop: 24,
              borderRadius: 8,
            }}
            contentStyle={{
              height: 48,
            }}>
            Permohonan Cuti
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const navItems: NavItem[] = [
  {
    key: 'senaraiCuti',
    title: 'Senarai Cuti',
    route: 'SenaraiCuti',
    icon: 'format-list-bulleted',
  },
  {
    key: 'kelayakanCuti',
    title: 'Kelayakan Cuti',
    route: 'KelayakanCuti',
    icon: 'information',
  },
  {
    key: 'bakiCuti',
    title: 'Baki Cuti',
    route: 'BakiCuti',
    icon: 'calendar-alert',
  },
  {
    key: 'penggantiCuti',
    title: 'Pengganti Cuti',
    route: 'PenggantiCuti',
    icon: 'clipboard-account',
  },
  {
    key: 'ganjaranCuti',
    title: 'Ganjaran Cuti',
    route: 'GanjaranCuti',
    icon: 'gift',
  },
  {
    key: 'kalendarCuti',
    title: 'Kalendar Cuti',
    route: 'KalendarCuti',
    icon: 'calendar-month',
  },
];
