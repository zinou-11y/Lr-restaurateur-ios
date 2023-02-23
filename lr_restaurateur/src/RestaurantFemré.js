import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import RestaurantsFerme from '../Components/Close';

const RootStack = createStackNavigator();

const RestaurantstackScreen = ({navigation}) => (
  <RootStack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <RootStack.Screen name="RestaurantsFerme" component={RestaurantsFerme} />
  </RootStack.Navigator>
);

export default RestaurantstackScreen;
