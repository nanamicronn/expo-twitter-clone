import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from './drawerContent';
import FeedStack from './feedStack';

const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="FeedStack" component={FeedStack} />
    </Drawer.Navigator>
  );
};

export default RootNavigator;
