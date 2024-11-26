import {StackHeaderProps} from '@react-navigation/stack';
import React, {FC} from 'react';
import {View} from 'react-native';
import {IconButton, Text} from 'react-native-paper';
import {SafeAreaView} from 'react-native-safe-area-context';

const Header: FC<StackHeaderProps> = props => {
  const {navigation, options, route} = props;

  const title = options.title || route.name;

  return (
    <SafeAreaView
      edges={['top']}
      style={{
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
              }}>
              {title}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Header;
