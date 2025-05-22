import { View, Text, Image ,Button, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View>
      <Text>Hello Dost</Text>
      <Image source={{ uri: 'https://i.natgeofe.com/k/679e983c-4461-4398-bb6d-9b508fe3e4de/norway-northern-lights_2x3.jpg' }}
         style={{width:200,height:200}}
      />
       {/* <Button title='Press Me' >
           
       </Button> */}

       <TouchableOpacity>
              <Text>
                
              </Text>
       </TouchableOpacity>

    </View>
  )
}

export default App;

