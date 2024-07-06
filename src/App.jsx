import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Saya from './screens/Saya';
import Home from './screens/Home';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      tabBarActiveTintColor:'rgb(120, 69, 172)'
    }}>
      <Tab.Screen name=' Hello Sahabat' component={Home} options={{
          tabBarLabel: 'Home',
          headerStyle: {backgroundColor: 'rgb(240, 219, 255)'},
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-floor-g" color={color} size={26} />
          ),
      
      }} />
        <Tab.Screen name='Hello Sahabat' component={Saya} options={{
            tabBarLabel: 'Saya',
            headerStyle: {backgroundColor: 'rgb(240, 219, 255)'},
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
        
        }} />
    </Tab.Navigator>
   </NavigationContainer>
  );
};
  

export default App

const styles = StyleSheet.create({});