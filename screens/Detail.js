import React, { Component } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { View, SafeAreaView, Image, Text, StyleSheet, Dimensions, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SecondButton } from '../Component/button';
const data = require('../consts/cart.json')

export default class DetailScreen extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.gotoCart = this.gotoCart.bind(this)
        this.add2cart = this.add2cart.bind(this)
        this.state = {
            data: props.route.params

        }
        console.log(this.state.data)
    }
    gotoCart(product){
        console.log(product);
        this.navigation.navigate('Cart',product);
    }
    add2cart(){
        data.carts.push({tongdon: this.state.data.price, soluong: 1, name: this.state.data.name, img: this.state.data.img, price: this.state.data.price});
        console.log(data.carts);
        this.navigation.navigate('Cart')
    }
    render(){
        return(
            <ScrollView>
            <SafeAreaView style ={{backgroundColor: 'white'}}>
                <View style ={style.header}>
                    <View style ={style.back}>
                    <TouchableOpacity onPress = {()=> this.navigation.navigate("Home")}>
                    <Image source ={require('../assets/icon/back.png')} style ={{width:18, height:18, marginTop:15}}/>
                    </TouchableOpacity>
                    <Text style ={{fontSize:20, fontWeight:'bold', marginTop:10 }}> Chi tiết món ăn</Text>
                    </View>

                    <View>
                        <TouchableOpacity onPress={()=>this.navigation.navigate('Cart')}>
                        <Image
                        source = {require('../assets/icon/shopping-cart.png')}
                        style ={{height:30, width:30, marginRight:10}}
                        />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style ={style.imgCon}>
                    <Image source ={{uri:this.state.data.img}}
                    style ={{resizeMode:'contain', flex:1,height:300,width:300, borderRadius:20}}
                    />
                </View>

                <View style ={style.detail}>
                    <View style ={{flexDirection:'column', justifyContent: 'space-between'}}>
                        <Text style ={{fontSize:24,fontWeight: 'bold', color: 'white'}}>
                            {this.state.data.name}
                        </Text>
                        <View style ={style.price}>
                            <Text style = {{
                                color:'white',
                                fontWeight:'bold',
                                fontSize: 18
                                }}>
                                {this.state.data.price} đ
                            </Text>
                        </View>
                    </View>
                    <View style ={{ marginTop:10}}>
                        <Text style ={{fontSize:18, fontWeight:'bold',color:'white'}}>
                            {this.state.data.about}
                        </Text>
                    </View>
                    <Text style ={{fontSize:20, fontWeight:'bold', color:'white', marginTop:20}}>
                        Chọn size
                    </Text>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox/>
                            <Text style={style.textdetails}>Lagre 13.5 </Text> 
                            <Text style={style.textprice}>149000đ </Text>
                        </View>
                    </View>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox/>
                            <Text style={style.textdetails}>Medium 11.5 </Text> 
                            <Text style={style.textprice}>89000đ </Text>
                        </View>
                    </View>
                    <Text style={{marginTop: 10,fontSize: 20, fontWeight: 'bold', color: "white"}}>
                        Chọn đồ uống          
                    </Text>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox/>
                            <Text style={style.textdetails}>Coca Cola </Text> 
                            <Text style={style.textprice}>15000đ </Text>
                        </View>
                    </View>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox />
                            <Text style={style.textdetails}>Sprite </Text> 
                            <Text style={style.textprice}>15000đ </Text>
                        </View>
                    </View>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox />
                            <Text style={style.textdetails}>Trà đào </Text> 
                            <Text style={style.textprice}>20000đ </Text>
                        </View>
                    </View>
                    <View style={style.container}>
                        <View style={style.checkboxContainer}>
                            <BouncyCheckbox />
                            <Text style={style.textdetails}>Trà sữa </Text> 
                            <Text style={style.textprice}>20000đ </Text>
                        </View>
                    </View>
                    
                    <View style ={{marginTop:40, marginBottom:40, alignItems:'center'}}>
                        <SecondButton title ="Thêm vào đơn hàng" onPress={()=>this.add2cart()}/>
                    </View>
                </View>
                
            </SafeAreaView>
        </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    header:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    back:{
        width:150,
        height:50,
        flexDirection: 'row',

    },
    imgCon:{
        flex:0.45,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center'
    },
    detail:{
        paddingHorizontal:20,
        paddingTop: 40,
        paddingBottom: 60,
        backgroundColor:"#48dbfb",
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
    },
    container:{
        flexDirection:'row',
        marginTop:5,
    },
    checkboxContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom:5
    },
    textdetails: {
        fontSize: 18,
        color: "white",
        marginTop: 5,
        lineHeight: 20,
        fontWeight:'bold'
    },
    textprice:{
        fontSize: 18,
        color: "white",
        marginTop: 5,
        lineHeight: 20,
        textAlign: "left",
        marginLeft:10,
        justifyContent: "space-around",
        fontWeight:'bold'
    },
})