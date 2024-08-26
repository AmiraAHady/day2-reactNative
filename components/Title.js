import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Title({heading}) {
  return (
    <View>
      <Text style={textStyle.title}>{heading}</Text>
    </View>
  )
}

const textStyle=StyleSheet.create({
  title:{
    fontSize:17,
    padding:15,
    fontWeight:'bold'
  }
})