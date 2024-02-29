import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Semihi Gotten</Text>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    backgroundColor:'blue',
    justifyContent:'center',
    alignItems:'center',
    flex:1,
  },
  text:{
    backgroundColor:'white',
    fontSize:30
  }
})


