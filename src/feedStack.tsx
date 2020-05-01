import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feed from './feed';
import Details from './details';

const Stack = createStackNavigator();

const FeedStack = () => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{ headerTitle: 'Twitter' }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{ headerTitle: 'Tweet' }}
      />
    </Stack.Navigator>
  );
};

export default FeedStack;
