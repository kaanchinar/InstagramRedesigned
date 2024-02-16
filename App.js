import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

//Icons
import {AddIcon} from './assets/svgs/AddIcon';
import {HomeIcon} from './assets/svgs/HomeIcon';
import {ExploreIcon} from './assets/svgs/ExploreIcon';
import {InboxIcon} from './assets/svgs/InboxIcon';

//Icons Focused
import {HomeIconSelected} from './assets/svgs/HomeIconSelected';
import {ExploreIconSelected} from './assets/svgs/ExploreIconSelected';
import {InboxIconSelected} from './assets/svgs/InboxIconSelected';


// Screens
import Home from './screens/home';
import Explore from './screens/Explore';
import Inbox from './screens/Inbox';
import Profile from './screens/Profile';
import CreatePost from './screens/CreatePost';


const Tab = createBottomTabNavigator()

 export default App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
        <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
        
        }}
        
        >
          <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            tabBarIcon: ({color, size, focused}) => (
              focused ? <HomeIconSelected /> : <HomeIcon />
            )
          }}
         
          />
          <Tab.Screen 
          name="Explore" 
          component={Explore}
          options={{
            tabBarIcon: ({color, size, focused}) => (
            focused ? <ExploreIconSelected /> : <ExploreIcon />
            )
          }} 
         
          />
          <Tab.Screen 
          name="CreatePost" 
          component={CreatePost} 
          options={{
            tabBarIcon: ({color, size}) => (
              <AddIcon />
            )
          }}
          
          />
          <Tab.Screen 
          name="Inbox" 
          component={Inbox} 
          options={{
            tabBarIcon: ({color, size, focused}) => (
              focused ? <InboxIconSelected /> : <InboxIcon /> 
            )
          }}
         
          />
          <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarIcon: ({focused}) =>(
              <Image
              style={[styles.avatar, {
                borderColor: focused ? 'black' : 'transparent',
                width: focused ? 28 : 24,
                height: focused ? 28 : 24,
              }]}
              source={{
                uri: 'https://pbs.twimg.com/profile_images/1728808729502441472/Rx3820wb_400x400.jpg'
              }}
              />
            )
          }}
          
          />

        </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatar:{
    width:24,
    height:24,
    borderRadius:14,
    borderWidth:1,
    
  }
})
