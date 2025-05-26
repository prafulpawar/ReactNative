import { View, Text, StyleSheet ,TextInput ,Button } from 'react-native'
import React, { useState } from 'react'

const Input = () => {
 const [Input , SetInput] = useState('');
  
  return (
    <View style={Style.container}>
      <Text style={Style.title}>
        
        Hey How Are You


      </Text>

      <TextInput style={Style.input}
        placeholder='Enter An Text Here...'
        value={Input}
        onChangeText={(e)=>SetInput(e.target.value)}
      />

      <Button title='Submit'>
          
      </Button>


        <Text>
              Result:  {Input}
        </Text>
    </View>
  )
}

export default Input

const Style = StyleSheet.create({
     container:{
          flex:1,
          justifyContent:'center',
          alignItems:'center',
          padding:20,
          gap:10
     },
     title:{
         fontSize:20,
         fontWeight:'500'
     },
     input:{
         width:'100%',
         padding:5,
         borderWidth:2,
         borderRadius:5,
         paddingVertical:10
     }
})