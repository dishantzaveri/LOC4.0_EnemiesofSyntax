import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const BottomTabs = ({route}) => {
  return (
    <Tab.Navigator initialRouteName="Home" activeColor="#fff">
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({color}) => (
            <Icon name="ios-home" color={color} size={26} />
            
          ),
        }}
      />
      <Tab.Screen
        name="Call"
        component={Call}
        options={{
          headerShown: false,
          tabBarLabel: 'Call',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({color}) => (

            <Icon name="ios-call" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Diary"
        component={Diary}
        options={{
          headerShown: false,
          tabBarLabel: 'Diary',
          tabBarColor: '#694fad',
          tabBarIcon: ({color}) => (
            <Icon name="ios-images" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile"
        component={MentalHealthNavigation}
        options={{
          headerShown: false,
          tabBarLabel: 'Mind Power',
          tabBarColor: '#d02860',
          tabBarIcon: ({color}) => (
            <Icon name="ios-musical-notes" color={color} size={26} />
          ),
        }}
      /> 
    </Tab.Navigator>
  );
};
export default BottomTabs;

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Quiz" component={Quiz} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}
