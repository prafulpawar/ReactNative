import { View, Text, Image, SafeAreaView, StyleSheet, Pressable } from 'react-native'
import React from 'react'
const Style = () => {
    return (

        <SafeAreaView style={styles.container}>

            <Text style={styles.text}>Hello </Text>
            <Image source={{ uri: 'https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights_2x3.jpg' }}
                style={{ width: 200, height: 200 }} />

            <Pressable style={styles.button}>
                <Text style={styles.btnText}
                    onPress={() => Alert.alert('Hello Dost')}
                    onHover={() => Alert.alert('Hello Dost')}
                >
                    Press Me
                </Text>
            </Pressable>

        </SafeAreaView>


    )
}

// In React Native, we use camelCase for styles (e.g., backgroundColor, fontSize).
// This is different from CSS where we use kebab-case (e.g., background-color, font-size).

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#ffffff',
        borderWidth: 2,
        padding:20,
        gap:10
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 10,
    },
    button:{
         width:100,
         padding:10,
         backgroundColor:"#666",
         borderRadius:50,
         alignItems:'center',
         marginTop:10,
         borderWidth:2,
         borderColor:'red'
    },
    btnText:{
        color: 'white',
        fontWeight: '500',
        
    }
})

export default Style