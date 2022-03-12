import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import { NavigationContainer } from '@react-navigation/native';
import Cricket from './Cricket';
import CategoryScreen from './CategoryScreen';
const Stack = createNativeStackNavigator();

const HomeNavigator = () => {
  return (

    <Stack.Navigator independent={true}>
      <Stack.Screen
        component={Home}
        name="Home"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={Cricket}
        name="Cricket"
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        component={CategoryScreen}
        name="CategoryScreen"
      />
    </Stack.Navigator>

  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
