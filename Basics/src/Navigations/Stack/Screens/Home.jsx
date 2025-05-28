import { View, Text ,Button} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
      <Button title='Profle'  />
    </View>
  )
}

export default Home