import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text className='font-bold text-3xl my-10 font-rubik'>Welcome to ReState</Text>
    </View>
  )
}

export default Index