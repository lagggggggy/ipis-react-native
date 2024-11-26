import React, {FC} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

const Tasks: FC = () => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Text>Tasks</Text>
  </View>
);

export default Tasks;
