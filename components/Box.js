import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Box({ colorName, hexCode }) {
  return (
    <View style={[boxStyle.container, { backgroundColor: hexCode }]}>
      <Text style={boxStyle.txt}>
        {colorName} {hexCode}
      </Text>
    </View>
  );
}

const boxStyle = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 7,
   
  },
  txt:{
    // fontSize:10,
    color:'white',
    paddingVertical:10,
    textAlign:'center',
    fontWeight:'bold'
    
  }
});
