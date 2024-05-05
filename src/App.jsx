import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profil from './screens/profil';
import home from './screens/home';
import cari from './screens/cari';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Home' component={home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
      
      }} />
        <Tab.Screen name='Cari' component={cari} options={{
            tabBarLabel: 'Cari',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="search-web" color={color} size={26} />
            ),
        
        }} />
      <Tab.Screen name='Profil' component={Profil} options={{
          tabBarLabel: 'Profil',
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