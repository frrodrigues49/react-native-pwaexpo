import * as React from 'react';
import { Feather } from '@expo/vector-icons'
import { NavigationContainer } from '@react-navigation/native';
import Main from './pages/Main';
import Camera from './pages/Camera';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator()

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          options={{ 
            tabBarIcon: ({ color }) => <Feather name="home" size={20} color={color} /> 
          }} 
          name="Main" 
          component={Main} 
        />
        <Tab.Screen
          options={{ 
            tabBarIcon: ({ color }) => <Feather name="camera" size={20} color={color} /> 
          }}  
          name="Camera" 
          component={Camera} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}