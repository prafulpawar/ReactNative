import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

const Scroll = () => {
    return (
        <ScrollView

           contentContainerStyle={{gap:10}}
           horizontal
           
        
        style={Style.container}>
            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>

            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>

            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>

            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>

            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>

            <Text style={Style.box1} ></Text>
            <Text style={Style.box2} ></Text>
            <Text style={Style.box3} ></Text>
        </ScrollView>
    )
}

export default Scroll


const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        padding:20,
        
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        borderRadius:50
    },

    box2: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
        borderRadius:50
    },

    box3: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
        borderRadius:50
    },
})