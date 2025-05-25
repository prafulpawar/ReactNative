import { View, Text } from 'react-native'
import React from 'react'

const Units = () => {
  return (
    <View style={Styles.container}>
        <View style={{width:'50%',height:'50%',backgroundColor:'red'}}>
             
        </View>
    </View>
  )
}

export default Units

const Styles = {
    container:{
        width:'100%',
        height:'100%',
        backgroundColor:'#dadada',
    }
}

//  Kyuki Alg Alg Devices Hote Unki Screen Size Alg Alg Hote Hai
//  Isliye Percentage Ka Hi Upayog Karna Chahiye
//  Aur Agar Aapko Kisi Particular Size Ki Jarurat Hai To Aap Dimensions 
// Ka Upayog Kar Sakte Ho
//  Dimensions Ka Upayog Karne Ke Liye Aapko React Native Se Dimensions Import Karna Hoga
//  Aur Uske Baad Aapko Dimensions.get('window').width Aur Dimensions.get('window').height Ka Upayog Karna Hoga
//  Isse Aapko Screen Ki Width Aur Height Mil Jayegi
//  Aur Aap Uske Anusar Apne Component Ki Width Aur Height Set Kar Sakte Ho
//  Isse Aapko Responsive Design Mil Jayega
//  Aur Agar Aapko Kisi Particular Size Ki Jarurat Hai To Aap Dimensions.get('window').width Aur Dimensions.get('window').height Ka Upayog Kar Sakte Ho