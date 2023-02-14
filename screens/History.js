import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image, FlatList} from 'react-native';
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

let productjs1=require("../consts/history.json")

export default class History extends Component {
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.refreshFlatlist= this.refreshFlatlist.bind(this);
        this.gotoDetail = this.gotoDetail.bind(this);
        this.state ={
            data: productjs1.history,
        }
    }

    gotoDetail(product){
        console.log(product);
        this.navigation.navigate('Detail', product);
    }
    refreshFlatlist(history){
        console.log(history)
        this.setState(this.state.data=history)
    }
    render(){
        const Item= ({product})=>{
            return(
                <SafeAreaView>
                    <TouchableOpacity onPress={() => this.gotoDetail("Detail",product)}>
                    <View style = {style.Item}>
                        <View>  
                            <View style ={{marginHorizontal:10,flexDirection:'row',}}>
                            <Image source ={require("../assets/icon/check-mark.png")}
                                style ={{width:15, height:15,marginTop:4,}}/>
                                <Text style ={{fontSize:15,
                                    color:'#696969',
                                    marginHorizontal:5,
                                    flexDirection:'row',}}>{product.status}</Text>
                               <Text style ={{color:'#696969',
                                        fontSize:15,}}>
                                 {product.Date} 
                                </Text>     
                            </View>
                            <View style={{flexDirection:'row'}}>
                            <View style ={{height:120}}>
                                <Image
                                    style ={{flex:1,resizeMode:'contain',height:150,width:80, marginHorizontal:10,}}
                                    source ={{uri:product.img}}
                                />
                            </View>
                            <View style={{marginHorizontal:10,}}>
                            <Text style ={{marginTop:10,fontSize: 20,fontWeight:'bold'}}>
                                {product.name}
                            </Text>
                            <Text style={{fontSize:15, width:280}}>
                                {product.about}
                            </Text>
                            <Text style ={{color:'#696969',
                                        fontSize:15,
                                        marginTop:15}}>
                                 {product.price} đ (Tiền mặt) • 1 Món 
                                </Text>
                            </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.gotoDetail("Detail",product)}>
                <View style={style.btnSeondary}>
                                <Text style={{fontWeight:'bold',fontSize:16, color:'#fff'}}>
                                    Đặt lại
                                </Text>
                    </View>
                    </TouchableOpacity>
                </SafeAreaView>
            );
        };

        return(
            <SafeAreaView style ={{flex: 1, backgroundColor: "#fff"}}>
                <View style ={style.header}>
              <TouchableOpacity onPress ={()=> this.navigation.navigate('Home')}>
                <View style={style.btnPrimary}>
                  <Image source ={require("../assets/icon/back.png")}
                      style ={{width:18, height:18}}
                          />
                </View>
              </TouchableOpacity>
            <View>
                <Text style={{fontWeight:'bold',
                fontSize:18,
                marginTop:10,
                left:5
                }}>
                  Đơn hàng của tôi
                </Text>
            </View>       
            </View>
                <FlatList
                    data ={this.state.data}
                    renderItem={({item})=><Item product={item}/>}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{
                    marginTop:10,
                    paddingBottom:80,
                    backgroundColor: "#f0f8ff",
                    }}
                />
            </SafeAreaView>
        )
    }
};

const  style = StyleSheet.create({
    header:{
        height:50,
        flexDirection: 'row',
        paddingHorizontal: 5,
        backgroundColor:'#fff',
        borderBottomWidth: 0.2,

    },
    btnPrimary:{
        marginTop:11,
        height:25,
        justifyContent:'center',
        alignItems:'center',
    },
    Item:{
        width:412,
        marginTop:15,
        backgroundColor:'#fff',
        flexDirection: 'row',
        borderWidth: 0.5,
    },
    btnSeondary:{
        height:50,
        width:410,
        flex:1,
        backgroundColor:'#48dbfb',
        justifyContent:'center',
        alignItems:'center',
        marginTop:1,
        borderBottomWidth: 0.1,
        
    }
})