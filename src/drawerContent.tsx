import React from 'react';
import { Text, View } from 'native-base';
import {
  DrawerContentComponentProps,
  DrawerContentOptions,
} from '@react-navigation/drawer';

type Props = DrawerContentComponentProps<DrawerContentOptions>;

const DrawerContent = (props: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Drawer Content</Text>
    </View>
  )
}

export default DrawerContent;
