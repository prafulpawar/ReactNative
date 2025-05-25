import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Scroll = () => {
    return (
        <View style={Style.container}>
            <Text style={Style.box1} >Scroll</Text>
            <Text style={Style.box2} >Scroll</Text>
            <Text style={Style.box3} >Scroll</Text>
        </View>
    )
}

export default Scroll


const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },

    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },

    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
})