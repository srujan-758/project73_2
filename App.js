import React from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createSwitchNavigator } from 'react-navigation';

import WriteStory from './screens/WriteStory'
import ReadStory from './screens/ReadStory'
import LoginScreen from './screens/LoginScreen'

export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}


const TabNavigator = createBottomTabNavigator({
  WriteStory : {screen: WriteStory},
  ReadStory: {screen: ReadStory},
},
{
  defaultNavigationOptions:({navigation})=>({
    tabBarIcon:({})=>{
      const routeName = navigation.state.routeName;
      
      if(routeName==='WriteStory'){
        return(
          <Image
          source = {require('./assets/write.png')}
          style={{width:40, height:40}}/>
        )
       
      }else if(routeName==='ReadStory'){
        return(
          <Image
          source = {require('./assets/read.png')}
          style={{width:40, height:40}}/>
        )
      }
    }
  })
}
);

const switchNavigator= createSwitchNavigator({
  LoginScreen:{screen:LoginScreen}, 
  TabNavigator:{screen:TabNavigator}
}) 


const AppContainer= createAppContainer(switchNavigator);


