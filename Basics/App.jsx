import { View, Text, Image ,Button, TouchableOpacity, Alert, TouchableHighlight, Pressable, SafeAreaView } from 'react-native';
import Basics from './src/Basics/Basics';
import Style from './src/Basics/Style';
import ThemeBased from './src/Basics/ThemeBased';
import Units from './src/Basics/Units';
import Flex from './src/Basics/Flex';
import FlexDirection from './src/Basics/FlexDirection';
import Scroll from './src/Scroll/Scroll';
import FlatLists from './src/Scroll/FlatList';
import Input from './src/UserInput/Input';
import StackNavigation from './src/Navigations/Stack/StackNavigation';


const App = () => {
  return (
        //  <Units/>  
        // <Flex/>
        // <FlexDirection/>
        // <Scroll/>
        // <FlatLists/>
        // <Input/>
        <StackNavigation/>
  )
}

export default App;