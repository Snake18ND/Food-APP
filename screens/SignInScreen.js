import React,{Component} from "react";
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import { ScrollView, TextInput } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
const data = require("../consts/User.json")

export default class SignInSreen extends Component {
    constructor(props) {
        super(props);
        this.navigation = props.navigation;
        this.gotoSignup = this.gotoSignup.bind(this);
        this.gotoHome = this.gotoHome.bind(this);
        this.state={
            data:data.account,
            check:'',
            User:'',
            Pass:''
        }
    }
    checktheAccount(){
        let check=''
        let dem=0
        console.log(this.state.data)
        console.log(this.state.data[0].user , this.state.data[0].pass)

        console.log(this.state.User,this.state.Pass)

        for( let i=0;i<this.state.data.length;i++){
            if(this.state.data[i].user===this.state.User&& this.state.Pass===this.state.data[i].pass){
                alert("Đăng nhập thành công");
                this.navigation.navigate("Home", this.state.data[i]);
                dem++;
            }
        }
        if(dem===0){
            alert("Đăng nhập thất bại");
        }
    }

    gotoSignup(){
        this.navigation.navigate('Signup')
    }
    gotoHome(){
        this.navigation.navigate('Home')
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
                <View style = {{marginTop: 50}}>
                    <Text style = {{fontWeight:'bold', fontSize:22, color:"#000000"}}>
                        Chào mừng trở lại,
                    </Text>
                    <Text style = {{fontWeight:'bold', fontSize:15, color:"#a5a5a5"}}>
                        Hãy đăng nhập để nhận được nhiều ưu đãi !
                    </Text>
                </View>
                <View style ={{marginTop:15 }}>
                <View style= {STYLES.inputContainer}>
                    <Image source ={require("../assets/icon/user.png")}
                    style ={{width:20, height:20, marginTop:15,}}
                    />
                    <TextInput placeholder = "Tài khoản" style={STYLES.input} value={this.state.User}
                    onChangeText={(value)=>{this.setState({User:value})}}/>
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
                        secureTextEntry={true}
                        value={this.state.Pass}
                        onChangeText={(value)=>{this.setState({Pass:value})}}
                     />
                </View>
                </View>
                <TouchableOpacity onPress={this.checktheAccount.bind(this)}>
                    <View style={STYLES.btnPrimary}>
                        <Text style={{fontWeight:'bold',fontSize:18, color:'white'}} >
                        Đăng Nhập
                    </Text>
                    </View>
                </TouchableOpacity>
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
                <View style={{ 
                            justifyContent :'space-between',
                        }}>
                        <TouchableOpacity style = {{alignItems:'center'}}>
                            <View style={STYLES.btnSeondary}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>
                                    Đăng nhập với
                                </Text>
                                <Image source ={require("../assets/icon/facebook.png")}
                                style ={{width:20, height:20,marginLeft:8}}
                                />
                            </View>
                        <View style={{width:5}}></View>
                        </TouchableOpacity>
                        <TouchableOpacity style = {{alignItems:'center'}}>
                            <View style={STYLES.btnSeondary}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>
                                    Đăng nhập với
                                </Text>
                                <Image source ={require("../assets/icon/gmail.png")}
                                style ={{width:20, height:20,marginLeft:8}}
                                />
                            </View>
                        </TouchableOpacity> 
                        
                        <TouchableOpacity
                            onPress ={()=>this.navigation.navigate('Home')} 
                            style = {{alignItems:'center'}}
                        >
                            <View style={STYLES.btnSeondary}>
                                <Text style={{fontWeight:'bold',fontSize:14}}>
                                    Khách
                                </Text>
                                <Image source ={require("../assets/icon/user1.png")}
                                style ={{width:20, height:20,left:10}}
                                />
                            </View>
                        </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',
                              alignItems:'center',
                              justifyContent:'center',
                              marginTop:30,
                              marginBottom:20,
                              }}>
                            <Text style={{color:'#a5a5a5', fontWeight:'bold'}}>
                                Chưa có tài khoản ?
                            </Text>
                            <TouchableOpacity onPress ={()=> this.navigation.navigate('Signup')} >
                            <Text style={{color:"#ff2d5f", fontWeight:'bold', marginLeft:5}}>
                                 Đăng ký
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
        backgroundColor:"#a5a5a5",
    },
    btnSeondary:{
        height:50,
        borderWidth:1,
        width:250,
        borderRightColor: "#a5a5a5",
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        flexDirection:'row',
        marginBottom:10,
    }

})


