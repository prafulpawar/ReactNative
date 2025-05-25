import { View, Text, Image ,Button, TouchableOpacity, Alert, TouchableHighlight, Pressable } from 'react-native';
import React from 'react'

const Basics = () => {
    return (
        <View>
            <Text>Hello Dost</Text>
            <Image source={{ uri: 'https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights_2x3.jpg' }}
                style={{ width: 200, height: 200 }}
            />
            {/* Least Use */}
            <Button title='Press Me' >

            </Button>

            {/* Rare */}
            <TouchableOpacity>
                <Text style={{ padding: 10, backgroundColor: 'blue' }}
                    onPress={() => Alert.alert('Hello Dost')}

                >
                    Bhai Mere Chotu
                </Text>
            </TouchableOpacity>
            {/* Second Most */}
            <TouchableHighlight>
                <Text style={{ padding: 10, backgroundColor: 'blue' }}
                    onPress={() => Alert.alert('Hello Dost')}

                >
                    Bhai Mere Chotu
                </Text>
            </TouchableHighlight>
            {/*  Most Used */}
            <Pressable>
                <Text style={{ padding: 10, backgroundColor: 'blue' }}
                    onPress={() => Alert.alert('Hello Dost')}
                    onHover={() => Alert.alert('Hello Dost')}
                >
                    Bhai Mere Chotu
                </Text>
            </Pressable>


        </View>
    )
}

export default Basics