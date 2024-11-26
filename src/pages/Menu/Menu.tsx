import {NavItem} from '../../data/models/NavItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {Avatar, Badge, IconButton, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Menu: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          padding: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <IconButton icon="arrow-left" onPress={() => navigation.goBack()} />
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                alignSelf: 'center',
              }}>
              Menu
            </Text>
          </View>
          <View
            style={{
              position: 'relative',
            }}>
            <IconButton icon="bell-outline" />
            <Badge
              visible={false}
              style={{
                position: 'absolute',
                top: 4,
                right: 4,
              }}>
              3
            </Badge>
          </View>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            padding: 16,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}>
          {navItems.map((item, idx) => (
            <TouchableOpacity
              key={idx}
              disabled={!item.route}
              onPress={() => {
                if (item.route) {
                  navigation.goBack();
                  navigation.navigate(item.route);
                }
              }}
              style={{
                alignItems: 'center',
                width: '30%',
                marginBottom: 24,
              }}>
              <Avatar.Icon
                size={60}
                icon={item.icon!}
                style={{
                  backgroundColor: item.backgroundColor,
                }}
              />
              <Text
                style={{
                  marginTop: 8,
                  textAlign: 'center',
                }}>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Menu;

const navItems: NavItem[] = [
  {
    key: 'myDashboard',
    title: 'myDashboard',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myTugasan',
    title: 'myTugasan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myInfo',
    title: 'myInfo',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myKhidmat',
    title: 'myKhidmat',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myPortfolio',
    title: 'myPortfolio',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myPendapatan',
    title: 'myPendapatan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myCuti',
    title: 'myCuti',
    route: 'MyCuti',
    icon: 'calendar',
    backgroundColor: '#E9FBEA',
  },
  {
    key: 'myUrusan',
    title: 'myUrusan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myTuntutan',
    title: 'myTuntutan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myLatihan',
    title: 'myLatihan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myHadir',
    title: 'myHadir',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myPerubatan',
    title: 'myPerubatan',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myRentas',
    title: 'myRentas',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myITPro',
    title: 'myITPro',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myDirektori',
    title: 'myDirektori',
    icon: 'folder',
    backgroundColor: '#D8F3FF',
  },
  {
    key: 'myTadbir',
    title: 'myTadbir',
    route: 'MyTadbir',
    icon: 'folder',
    backgroundColor: '#E9FBEA',
  },
];
