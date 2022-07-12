import { NavigationContainer } from '@react-navigation/native';




import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Feed from './Screens/Feed';
import Createposts from './Screens/CreatePost';

export default function App() {

 return(
  <NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name ="Feed" component={Feed} />
    <Tab.Screen name = "Createposts" component={Createposts}/>
   
  </Tab.Navigator>
  </NavigationContainer>
 )

}
 const Tab = createBottomTabNavigator()

