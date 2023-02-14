import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import Address from "./Address";

let productjs=require("../consts/food.json")


const width =Dimensions.get("screen").width/2 -30;
export default class HomeScreen extends Component {
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.refreshFlatlist= this.refreshFlatlist.bind(this);
        this.gotoDetail = this.gotoDetail.bind(this);
        this.gotoCart = this.gotoCart.bind(this)
        this.state ={
            data: productjs.products2,
        }
    }
    gotoDetail(product){
        console.log(product);
        this.navigation.navigate('Detail', product);
    }
    gotoCart(product){
        console.log(product);
        this.navigation.navigate('Cart',product);
    }
    refreshFlatlist(products){
        console.log(products)
        this.setState(this.state.data=products)
    }
    render(){
        const Card= ({product})=>{
            return(
                <TouchableOpacity onPress={() => this.navigation.navigate("Detail",product)}>
                    <View style = {style.Card}>
                        <View>
                            <View style ={{height:120,marginTop:30,alignItems:'center',justifyContent:'center',}}>
                                <Image
                                    style ={{flex:1,resizeMode:'contain',height:300,width:100}}
                                    source ={{uri:product.img}}
                                />
                            </View>
                            <Text style ={{fontSize: 20,textAlign:'center',justifyContent:'center',fontWeight:'bold', }}>
                                {product.name}
                            </Text>
                            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}>
                                <Text style ={{fontSize:15,textAlign:'left',fontWeight:'bold',marginLeft:10, }}>
                                 {product.price} đ   
                                </Text>
                                <View style={{
                                height:25,
                                width:25,
                                backgroundColor:'#00BFFF',
                                borderRadius:5,
                                justifyContent:'center',
                                alignItems:'center',
                                marginRight:10,
                                
                            }}>
                                <Text style={{
                                    fontSize:18,
                                    color:'white',
                                    fontWeight:'bold',
                                    flex:1}}>
                                    +
                                </Text>
                            </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            );
        };

        return(
            <SafeAreaView style ={{flex: 1, backgroundColor: "#ffffff"}}>
                <View style={style.header}>
                    <View>
                        <View style ={{flexDirection: 'row'}}>
                            <Text style ={{fontSize: 26, fontWeight:'bold'}}>Flash</Text>
                            <Text style ={{fontSize: 26, color: "#48dbfb", fontWeight:'bold'}}>Food</Text>
                            {/* <Text style = {{fontSize: 26, color:"grey"}}> xin chào</Text> */}
                        </View>
                    </View>
                    <TouchableOpacity onPress={()=>this.navigation.navigate('Cart')} >
                    <Image source={require("../assets/icon/shopping-cart.png")} style={{height:35, width:35, marginTop:3 }}/>
                    </TouchableOpacity>
                </View>

                <View style ={{paddingHorizontal: 20, paddingVertical:10, }}>
                    <Text style ={{fontSize:15, color:"grey", fontWeight:'bold'}}>
                        Giao hàng đến:
                    </Text>
                    <TouchableOpacity onPress ={()=>this.navigation.navigate('Address')}>
                        <View style ={{flexDirection:'row', paddingVertical:10}}>
                            <Image
                                source ={require('../assets/icon/map.png')}
                                style ={{
                                    width:25,
                                    height:25,
                                }}                        
                            />
                            <Text style ={{fontSize:15, marginTop:3, marginLeft:5, fontWeight:'bold'}}> 54 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{flexDirection:'row',
                            top:-15,
                            alignItems: 'center',
                            paddingHorizontal: 10,}}>
                        <View style={style.searchContainer}>
                            <Image                       
                                source={require('../assets/icon/search.png')}
                                style={{
                                    width:20,
                                    height:20,
                                    marginLeft:20,
                                }}
                            />   
                            <TextInput placeholder="Tìm món ăn" style={style.inputsearch}></TextInput>  
                        </View>  
                </View>

                <View style={{flexDirection: 'row',
                            paddingVertical:5,
                            alignItems: 'center',
                            paddingHorizontal: 7,}}>
                    <View style={style.btnCategory}>
                        <TouchableOpacity style ={{flexDirection:'row'}} 
                        onPress ={()=>this.refreshFlatlist(productjs.products2)}>
                        <Image
                            source ={require('../assets/img/icpizza.png')}
                            style={{
                                width: 25,
                                height: 26,
                                marginLeft:10,
                            }}
                        />
                        <Text style ={{fontSize: 18, textAlign:"center", color: "white"}}> Pizza</Text>
                        </TouchableOpacity >
                    </View>

                    <View style={style.btnCategory}>
                        <TouchableOpacity style ={{flexDirection: 'row'}}
                        onPress ={()=>this.refreshFlatlist(productjs.products1)}>
                        <Image
                            source ={require('../assets/img/fried-chicken.png')}
                            style={{
                                width: 25,
                                height: 26,
                                marginLeft:10,
                                
                            }}
                        />
                        <Text style ={{fontSize: 18, textAlign:"center", color: "white"}}> Gà rán</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={style.btnCategory}>
                        <TouchableOpacity style ={{flexDirection:'row'}}
                        onPress ={()=>this.refreshFlatlist(productjs.products3)}>
                        <Image
                            source ={require('../assets/img/hamburger.png')}
                            style={{
                                width: 25,
                                height: 26,
                                marginLeft:10,
                            }}
                        />
                        <Text style ={{fontSize: 18, textAlign:"center", color: "white"}}> Burger</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <FlatList
                    numColumns = {2}
                    data ={this.state.data}
                    renderItem={({item})=><Card product={item}/>}
                    columnWrapperStyle={{justifyContent:'space-between'}}
                    showsHorizontalScrollIndicator={true}
                    contentContainerStyle={{
                    marginTop:15,
                    paddingBottom:80,
                    backgroundColor: "#48dbfb",
                    }}
                />
                
            
            </SafeAreaView>
        )
    }
};

const  style = StyleSheet.create({
    header:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    inputContainer:{
        flex:1,
        height:50,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor:  '#E5E5E5',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    searchContainer:{
        height:40,       
        borderRadius:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#E5E5E5',
        marginLeft:10,
        marginRight:10,
        marginTop:10
    },
    inputsearch:{
        fontSize:15,
        fontWeight:'bold',
        color:'#00BFFF',
        backgroundColor:'#E5E5E5',
        borderRadius:15,
        width:230,      
    },    
    btnCategory:{
        height:50,
        width: 120,
        borderRadius:30,
        alignItems: 'center',
        paddingHorizontal: 5,
        flexDirection: 'row',
        backgroundColor: "#48dbfb",
        marginLeft: 10,
        elevation:5
    }, 
    Card:{
        backgroundColor:'white',
        height:250,
        width,
        marginHorizontal:2,
        borderRadius:10,
        marginBottom:25,
        marginLeft:15,
        marginRight:15,
        elevation: 9,
        marginTop:10,
    },
})