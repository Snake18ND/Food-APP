import React,{Component} from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SignInSreen from "./SignInScreen";

export default class SignUpScreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.gotoSignin = this.gotoSignin.bind(this);
    }

    gotoSignin(){
        this.navigation.navigate('Signin')
    }
    render(){
        return(
            <SafeAreaView style = {{paddingHorizontal:15, flex:1,background:"white"}}>
            <ScrollView >
                <View style={{flexDirection :'row',alignContent: 'center',justifyContent: 'center', marginTop :20}}>
                <Text style ={{fontWeight: 'bold', fontSize:50, color:"#000000"}}>
                Flash
                </Text>
                <Text style= {{fontWeight: 'bold', fontSize:50, color:"#48dbfb"}}>
                    Food
                </Text>
                </View>
                <View style = {{marginTop: 20}}>
                    <Text style = {{fontWeight:'bold', fontSize:22, color:'#000'}}>
                        Chào mừng trở lại,
                    </Text>
                    <Text style = {{fontWeight:'bold', fontSize:15, color:'#a5a5a5'}}>
                        Hãy đăng ký để tiếp tục !
                    </Text>
                </View>
                <View style ={{marginTop:5 }}>
                <View style= {STYLES.inputContainer}>
                    <Image source ={require("../assets/icon/user.png")}
                    style ={{width:20, height:20, marginTop:15,}}
                    />
                    <TextInput placeholder = "Tên đăng nhập" style={STYLES.input}/>
                </View>
                </View>
                <View style ={{marginTop:15 }}>
                <View style= {STYLES.inputContainer}>
                    <Image source ={require("../assets/icon/mail.png.png")}
                    style ={{width:20, height:20, marginTop:15,}}
                    />
                    <TextInput placeholder = "Email" style={STYLES.input}/>
                </View>
                </View>
                <View style ={{marginTop:20 }}>
                <View style= {STYLES.inputContainer}>
                    <Image source ={require("../assets/icon/lock.png")}
                    style ={{width:20, height:20, marginTop:15,}}
                    />
                    <TextInput 
                     placeholder = "Mật khẩu" 
                     style={STYLES.input}
                     secureTextEntry
                     />
                </View>
                </View>
                <View style={STYLES.btnPrimary}>
                    <Text style={{fontWeight:'bold',fontSize:18,color:'white'}}>
                        Đăng Ký
                    </Text>
                </View>
                <View style={{
                    marginVertical:20,
                    flexDirection:'row',
                    justifyContent:'center',
                    alignItems:'center',
                }}>
                    <View style={STYLES.line}></View>
                        <Text style={{fontWeight:'bold', marginHorizontal: 5}}>
                         Hoặc
                        </Text>
                    <View style={STYLES.line}></View>
                </View>
                <View style={{flexDirection: 'row',
                            justifyContent :'space-between',
                        }}>
                        <View style={STYLES.btnSeondary}>
                            <Text style={{fontWeight:'bold',fontSize:14}}>
                                Đăng ký với
                            </Text>
                            <Image source ={require("../assets/icon/facebook.png")}
                            style ={{width:20, height:20,marginLeft:8}}
                            />
                        </View>
                        <View style={{width:5}}></View>
                        <View style={STYLES.btnSeondary}>
                            <Text style={{fontWeight:'bold',fontSize:14}}>
                                Đăng ký với
                            </Text>
                            <Image source ={require("../assets/icon/gmail.png")}
                            style ={{width:20, height:20,marginLeft: 8}}
                            />
                        </View> 
                </View>
                <View style={{flexDirection:'row',
                              alignItems:'center',
                              justifyContent:'center',
                              marginTop:30,
                              marginBottom:20,
                              }}>
                            <Text style={{color:'#a5a5a5', fontWeight:'bold'}}>
                                Đã có tài khoản ?
                            </Text>
                            <TouchableOpacity onPress ={()=> this.navigation.navigate('Signin')}>
                            <Text style={{color:"#ff2d5f", fontWeight:'bold', marginLeft:5}}>
                                Đăng nhập
                            </Text>
                            </TouchableOpacity>
                </View>
            </ScrollView>
            </SafeAreaView>
        )
    }
};

const STYLES = StyleSheet.create({
    inputContainer: {
        flexDirection:'row',
        marginTop:20,
        borderBottomWidth: 0.5,
    },
    input:{
        color: "#a5a5a5",
        paddingLeft:10,
        flex :1,
        fontSize: 18,
    },
    btnPrimary:{
        backgroundColor:"#48dbfb",
        height: 50,
        marginTop: 30,
        borderRadius:10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    line:{
        height:1,
        width:20,
        backgroundColor:'#a5a5a5',
    },
    btnSeondary:{
        height:50,
        borderWidth:1,
        borderRightColor: '#a5a5a5',
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        flexDirection:'row'
    }

})


