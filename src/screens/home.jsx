import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, TextInput, Button } from 'react-native-paper';

const Home = () => {
  return (
    <View style={{padding:25, alignItems: 'center', gap: 10}}>
      <Avatar.Icon size={40} icon='account' />
      <TextInput
      style={{width: '100%'}}
      label="Email"
    />
      <TextInput
      style={{width: '100%'}}
      label="Password"
    />
    <TouchableOpacity style={{width: '100%'}}>
    <Button style={{width: '100%'}} mode="contained">
    Masuk
  </Button>
  </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})