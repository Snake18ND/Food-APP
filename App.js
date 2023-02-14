import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import OnBoardScreen from './screens/OnBoard';
import Tabs from "./navigation/tab";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import 'react-native-gesture-handler';

const Stack = createStackNavigator();

const App = () =>{
  return(
    <NavigationContainer>
      <StatusBar backgroundColor={'#ffffff'} barStyle="dark-content"/>
      <Stack.Navigator>
        <Stack.Screen name = "Board" options ={{headerShown:false}} component ={OnBoardScreen}/>
        <Stack.Screen name = "Signin" options = {{headerShown:false}} component ={SignInScreen}/>
        <Stack.Screen name = "Signup" options = {{headerShown:false}} component ={SignUpScreen}/>
        <Stack.Screen name = "Home" options ={{headerShown:false}} component = {Tabs}/>
      </Stack.Navigator>  
    </NavigationContainer>
  );
}

export default App;