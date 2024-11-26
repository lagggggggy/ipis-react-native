import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const Notifications: FC = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Notifications</Text>
  </View>
);

export default Notifications;
