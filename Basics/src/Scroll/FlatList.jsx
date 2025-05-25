import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'


const dummyUsers = [
    {
        id: 1,
        name: "Aarav Sharma",
        email: "aarav.sharma@example.com",
        image: "https://images.unsplash.com/photo-1747913647304-9f298ff28ff4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8"
    },
    {
        id: 2,
        name: "Isha Verma",
        email: "isha.verma@example.com",
        image: "https://images.unsplash.com/photo-1747996714434-64de72199155?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    {
        id: 3,
        name: "Kabir Mehta",
        email: "kabir.mehta@example.com",
        image: "https://images.unsplash.com/photo-1747570440649-ff0af69538b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"
    },
    {
        id: 4,
        name: "Tanya Singh",
        email: "tanya.singh@example.com",
        image: "https://images.unsplash.com/photo-1747760866743-97dff7918000?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 5,
        name: "Rohan Gupta",
        email: "rohan.gupta@example.com",
        image: "https://images.unsplash.com/photo-1742836531205-39cf07aee395?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 6,
        name: "Sneha Joshi",
        email: "sneha.joshi@example.com",
        image: "https://images.unsplash.com/photo-1748096089012-e601d766815f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 7,
        name: "Aditya Desai",
        email: "aditya.desai@example.com",
        image: "https://plus.unsplash.com/premium_photo-1747314222141-8c7240150597?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 8,
        name: "Neha Kapoor",
        email: "neha.kapoor@example.com",
        image: "https://images.unsplash.com/photo-1746980776869-0443aaffc7f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 9,
        name: "Yash Patil",
        email: "yash.patil@example.com",
        image: "https://plus.unsplash.com/premium_photo-1747038385188-2f345c630fcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 10,
        name: "Meera Nair",
        email: "meera.nair@example.com",
        image: "https://images.unsplash.com/photo-1747049552306-0f94c91bd351?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0Nnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 11,
        name: "Dev Malhotra",
        email: "dev.malhotra@example.com",
        image: "https://images.unsplash.com/photo-1747901718331-0e5d361cf5f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 12,
        name: "Ritika Rao",
        email: "ritika.rao@example.com",
        image: "https://source.unsplash.com/random/100x100?sig=12"
    },
    {
        id: 13,
        name: "Aniket Choudhary",
        email: "aniket.choudhary@example.com",
        image: "https://images.unsplash.com/photo-1746424919579-7c119aaa8e61?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Nnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 14,
        name: "Simran Kaur",
        email: "simran.kaur@example.com",
        image: "https://images.unsplash.com/photo-1747560249218-387bf151ad45?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 15,
        name: "Manav Sinha",
        email: "manav.sinha@example.com",
        image: "https://plus.unsplash.com/premium_photo-1747674293250-e5ef03e488b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1N3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 16,
        name: "Priya Reddy",
        email: "priya.reddy@example.com",
        image: "https://images.unsplash.com/photo-1744400363909-4627ac0acb0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1Mnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 17,
        name: "Arjun Bhatt",
        email: "arjun.bhatt@example.com",
        image: "https://images.unsplash.com/photo-1747901718331-0e5d361cf5f4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 18,
        name: "Kriti Jain",
        email: "kriti.jain@example.com",
        image: "https://images.unsplash.com/photo-1733506260573-2ddbf1db9b1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 19,
        name: "Ravi Bansal",
        email: "ravi.bansal@example.com",
        image: "https://images.unsplash.com/photo-1747586181200-96551a018ed1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
        id: 20,
        name: "Sana Qureshi",
        email: "sana.qureshi@example.com",
        image: "https://images.unsplash.com/photo-1726661025476-be2e9f427565?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMXx8fGVufDB8fHx8fA%3D%3D"
    }
];


const FlatLists = () => {
    return (
        <View style={Style.container}>



            <FlatList

                data={dummyUsers}
                renderItem={({ item }) => (
                    <View style={Style.card}>
                        <Image
                            style={{ width: 40, height: 40, borderRadius: 50 }}
                            source={{ uri: "https://images.unsplash.com/photo-1747913647304-9f298ff28ff4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }} />

                        <Text > Name </Text>
                        <Text> Email </Text>

                    </View>
                )}

            />
        </View>
    )
}

export default FlatLists

const Style = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#dadada',
        paddingVertical: 10,
        paddingHorizontal: 5
    },
    card: {
        width: 100,
        height: 100,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    }
})