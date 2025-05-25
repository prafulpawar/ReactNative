import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Flex = () => {
  return (
    <View style={Style.container}>

      <View style={Style.box1}>

      </View>

       <View style={Style.box2}>

      </View>

       <View style={Style.box3}>

      </View>

    </View>
  )
}


export default Flex

const Style = StyleSheet.create({
     container:{
         flex:1,
        backgroundColor:'black'
     }
     ,
     box1:{
         flex:1,
         backgroundColor:'red'
     },
     box2:{
         flex:1,
         backgroundColor:'yellow'
     }
     ,box3:{
         flex:1,
         backgroundColor:'green'
     }
})