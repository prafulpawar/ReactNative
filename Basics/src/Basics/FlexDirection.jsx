import { View, Text ,StyleSheet  } from 'react-native'
import React from 'react'

const FlexDirection = () => {
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

export default FlexDirection


const Style = StyleSheet.create({
     container:{
         flexDirection:'row',
         //  justifyContent:'space-between',
         //  alignItems:'center',
         //  flexDirection:'row-reverse',
         //  flexDirection:'column-reverse',
         justifyContent:'center',
         flex:1,
         backgroundColor:'black',
        //  gap:10,
         alignItems:'center'
     }
     ,
     box1:{
         width:80,
         height:80,
         alignSelf:'flex-start',
         backgroundColor:'red'
     },
     box2:{
         width:80,
         height:80,
         backgroundColor:'yellow'
     }
     ,box3:{
          width:80,
          height:80,
         backgroundColor:'green'
     }
})