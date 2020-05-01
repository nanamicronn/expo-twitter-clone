import React from "react";
import { Text, View } from 'native-base';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent';

const Drawer = createDrawerNavigator();

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
