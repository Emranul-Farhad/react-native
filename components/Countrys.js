import { View, Text } from 'react-native'
import React from 'react'


export default function Countrys({country}) {
  return (
    <View>
      <Text>   {country.name.common} </Text>
    </View>
  )
}