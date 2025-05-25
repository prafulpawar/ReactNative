import { View, Text, useColorScheme ,StyleSheet } from 'react-native'
import React from 'react'

const ThemeBased = () => {
  const theme =  useColorScheme()
  const isDarkMode =  theme === 'dark';
   
  const backgroundColor = isDarkMode ? 'black' : 'white';
  const textColor = isDarkMode ? 'white' :'black'

  return (
    <View style={[styles.container , {backgroundColor:backgroundColor}]}>
      <Text style={[styles.text,{color:textColor}]}>ThemeBased</Text>
    </View>
  )
}

const styles = StyleSheet.create({
      container:{
           flex:1,
           justifyContent:'center',
           alignItems:'center',
           backgroundColor:'black'
      },

      text:{
         fontSize:20,
         fontWeight:'bold',
         color:'white'
      }

})

export default ThemeBased