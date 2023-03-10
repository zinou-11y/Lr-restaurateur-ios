import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Drawer from '../Navigations/drawer';
import {useSelector} from 'react-redux';
import RestaurantstackScreen from './RestaurantFemr√©';
const RootStack = createStackNavigator();

const RootStackScreen = ({navigation}) => {
  const Commandes = useSelector(state => state.Commandes);
  const {isOpen} = Commandes;
  return isOpen ? (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Drawer" component={Drawer} />
    </RootStack.Navigator>
  ) : (
    <RestaurantstackScreen />
  );
};
export default RootStackScreen;
