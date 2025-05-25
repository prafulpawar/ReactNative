import { View, Text, StyleSheet ,Image } from 'react-native'
import React from 'react'

const FlatList = () => {
  return (
    <View style={Style.container}> 

      <Text style={Style.card}>
         <Image source={{uri:''}} /> 
         
         <Text> Name </Text>
         <Text> Email </Text>

      </Text>

    </View>
  )
}

export default FlatList

const Style = StyleSheet.create({
     container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#dadada'
     }
})