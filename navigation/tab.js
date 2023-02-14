import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainStackNavigator from "./HomeStack";

import HomeScreen from '../screens/HomeScreen';
import History from '../screens/History';
import User from '../screens/User';
const Tab = createBottomTabNavigator();
const CustomTabBarButton =({children, onPress}) =>(
    <TouchableOpacity
    style={{
        top:-30,
        justifyContent: 'center',
        alignItems: 'center',
        ...styles.shadow
    }}
    onPress={onPress}
    >
       <View style={{
           width: 70,
           height: 70,
           borderRadius: 35,
           backgroundColor: '#ffffff'
       }}
       >
           {children}
       </View>
    </TouchableOpacity>
)

const Tabs = () =>{
    return(
        <Tab.Navigator
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                bottom:0,
                left:0,
                right:0,
                elevation:0,
                backgroundColor:'#ffffff',
                height:60,
                ...styles.shadow 
            }
        }}
        >
            <Tab.Screen name = "Home" component={MainStackNavigator}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../assets/icon/home.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#00BFFF' : '#748c94'
                        }}
                        />
                        <Text style ={{color: focused ? '#00BFFF': '#748c94', fontSize:12}}>
                            Trang chủ
                        </Text>
                    </View>
                ),
            }}
        />   
            <Tab.Screen name = "History" component={History}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../assets/icon/history.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#00BFFF' : '#748c94'
                        }}
                        />
                        <Text style ={{color: focused ? '#00BFFF': '#748c94', fontSize:12}}>
                            Lịch sử đơn hàng
                        </Text>
                    </View>
                ),
            }}
        /> 
        {/* <Tab.Screen name = "Notice" component={Notice}
            options ={{
                tabBarIcon: ({focused})=>(
                    <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../assets/icon/form.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#00BFFF' : '#748c94'
                        }}
                        />
                        <Text style ={{color: focused ? '#00BFFF': '#748c94', fontSize:12}}>
                            Thông tin đơn 
                        </Text>
                    </View>
                ),
            }}
        /> */}
            <Tab.Screen name = "User" component={User}
            options ={{
                tabBarIcon: ({focused})=>(
                        <View style ={{alignItems: 'center', justifyContent: 'center'}}>
                        <Image
                        source ={require('../assets/icon/user.png')}
                        resizeMode = 'contain'
                        style={{
                            width:25,
                            height:25,
                            tintColor: focused ? '#00BFFF' : '#748c94'
                        }}
                        />
                        <Text style ={{color: focused ? '#00BFFF': '#748c94', fontSize:12}}>
                            Tài khoản
                        </Text>
                    </View>
                ),
            }}
        /> 
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F6DF0',
        shadowOffset: {
            width:0,
            height:10,
        },
        shadowOpacity: 0.25,
        shadowRadius:3.5,
        elevation:5,
    }
});

export default Tabs;