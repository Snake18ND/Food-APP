import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SecondButton } from '../Component/button';
export default class User extends Component{
    constructor(props){
        super(props);
        this.navigation = props.navigation;
        this.gotoSignin = this.gotoSignin.bind(this);
    }
    gotoSignin(){
        this.navigation.navigate('Signin')
    }
    render(){
        return(
            <ScrollView > 
                <SafeAreaView style ={{backgroundColor: '#dfe6e9'}}>
                    <View style ={style.header}>
                        <TouchableOpacity>
                            <Image 
                                source={require("../assets/icon/user2.png")}
                                style ={{width:80,height:80, marginTop:20,}}    
                            />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style ={{fontSize:18, fontWeight:"bold", color:'white', marginTop:20, marginBottom:20}}>Thay đổi ảnh đại diện</Text>
                        </TouchableOpacity>
                    </View>

                    <View style ={style.detail}>
                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/user1.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Thông tin người dùng</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/coupon.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Ví voucher</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/credit-card.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Liên kết thẻ ngân hàng</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/friendship.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Mời bạn bè</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/telephone.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Hỗ trợ</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/home2.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Ứng dụng cho chủ quán</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/book.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Chính sách</Text>
                            </TouchableOpacity>
                        </View>

                        <View style ={style.kc}>
                            <TouchableOpacity style ={style.detaiIcon}>
                                <Image 
                                    source ={require("../assets/icon/settings.png")}
                                    style ={style.img}
                                />
                                <Text style={style.text}>Cài đặt</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style ={{marginTop:30, marginBottom:40, alignItems:'center', height:110}}>
                        <SecondButton 
                            onPress ={()=>this.navigation.navigate('Signin')}
                            title ="Đăng xuất"
                            style ={{color:"white"}}
                        />
                    </View>
                </SafeAreaView>
            </ScrollView>        
        )
    }
};
const  style = StyleSheet.create({
    header:{
        justifyContent: 'space-between',
        backgroundColor:"#48dbfb",
        alignItems:'center',
    },
    detail:{
        marginTop:5, 
    },
    detaiIcon:{
        flexDirection:'row',
        borderBottomWidth:1,
        borderColor:'grey',
        borderRadius:5,
        backgroundColor:"white"
    },
    text:{
        fontSize:18, 
        fontWeight:'bold',
        marginLeft:10,
        color:"#48dbfb"
    },
    kc:{
        paddingTop:10,
        backgroundColor:'white'
    },  
    img:{
        width:30,
        height:30,
        marginLeft:10,
        marginBottom:5
    }

})