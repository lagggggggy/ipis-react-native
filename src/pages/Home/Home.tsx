import {NavItem} from '../../data/models/NavItem';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View, ScrollView, TouchableOpacity} from 'react-native';
import {
  Avatar,
  Text,
  IconButton,
  Badge,
  Button,
  Card,
} from 'react-native-paper';

const Home: FC = () => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  return (
    <ScrollView
      style={{
        backgroundColor: 'white',
      }}>
      <View
        style={{
          height: 200,
          padding: 16,
          backgroundColor: '#D8F3FF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Selamat Datang
          </Text>
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

      <View
        style={{
          padding: 16,
        }}>
        <Card
          style={{
            height: 200,
            borderRadius: 16,
            backgroundColor: '#fefefe', //lightgray
          }}>
          <Card.Content>
            <Text> </Text>
          </Card.Content>
        </Card>
        <View
          style={{
            marginTop: 16,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: 'bold',
            }}>
            Menu Pantas
          </Text>
          <Button
            uppercase={false}
            textColor="#1e88e5"
            onPress={() => navigation.navigate('Menu')}>
            Lihat Semua
          </Button>
        </View>
        <View
          style={{
            marginTop: 16,
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
      </View>
    </ScrollView>
  );
};

export default Home;

const navItems: NavItem[] = [
  {
    key: 'myTugasan',
    title: 'myTugasan',
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
    key: 'myITPro',
    title: 'myITPro',
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
];
