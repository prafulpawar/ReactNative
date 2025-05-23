import { View, Text ,Image, SafeAreaView,StyleSheet, Pressable } from 'react-native'
import React from 'react'
const Style = () => {

  return (


    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Style</Text>
        <Image source={{ uri: 'https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights_2x3.jpg' }}
                      style={{ width: 200, height: 200 }} />       
   
        <Pressable>
            <Text style={{ padding: 10, backgroundColor: 'blue' }}
                onPress={() => Alert.alert('Hello Dost')}
                onHover={() => Alert.alert('Hello Dost')}
            >
                Bhai Mere Chotu
            </Text>
        </Pressable>
    </SafeAreaView>


  )
}

// In React Native, we use camelCase for styles (e.g., backgroundColor, fontSize).
// This is different from CSS where we use kebab-case (e.g., background-color, font-size).

const styles = StyleSheet.create({
    container:{
        with:100,
        height:100,
        backgroundColor:'#ffff',
        borderColor:'red',
        borderWidth:2,
    },
    text:{
        color:'red',
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:10,
        padding:10,
        backgroundColor:'blue'
    }
})

export default Style