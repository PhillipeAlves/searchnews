import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SearchScreen from '../screens/SearchScreen'
import defaultScreenOptions from './defaultScreenOptions'

const Stack = createNativeStackNavigator()

const RootStack = () => (
  <Stack.Navigator screenOptions={defaultScreenOptions} >
    <Stack.Screen name="Search" component={SearchScreen} options={{title: ''}} />
  </Stack.Navigator>
)

export default RootStack