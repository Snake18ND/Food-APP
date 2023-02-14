import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/Detail";
import CartScreen from "../screens/Cart";
import Address from "../screens/Address";
const Stack = createStackNavigator();
const screenOptionStyle ={
    headerStyle: {
        backgroundColor: "#9AC4F8",
      },
      headerTintColor: "white",
      headerBackTitle: "Back",
};

const MainStackNavigator = () =>{
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen 
            name='Home' 
            component={HomeScreen} 
            options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen screenOptions={screenOptionStyle} 
            name='Detail' 
            component={DetailScreen}
            options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen screenOptions={screenOptionStyle} 
            name='Cart' 
            component={CartScreen}
            options={{headerShown: false}}
            >
            </Stack.Screen>
            <Stack.Screen screenOptions={screenOptionStyle} 
            name='Address' 
            component={Address}
            options={{headerShown: false}}
            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
export default MainStackNavigator;