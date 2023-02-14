import React, { Component } from "react";
import {ScrollView ,View, Text, StyleSheet, Image, Dimensions, FlatList} from 'react-native';
import {TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "../Component/button";
const width =Dimensions.get("screen").width-20;
const data = require("../consts/cart.json")
export default class CartScreen extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
        this.btnAdd = this.btnAdd.bind(this);
        this.btnSub = this.btnSub.bind(this);
        this.cancelCart = this.cancelCart.bind(this);
        this.sum = this.sum.bind(this);
        this.state={
            data: props.route.params,
            id:1,
            cong:0,
            tru:0,
            dem:0,
            tong: 0,
        };
        console.log(this.state.data);
    }

    cancelCart(name){
        for(let i=0;i<data.carts.length;i++){
            if(data.carts[i].name === name){
              data.carts.splice(i,1);
              console.log('xoa thanh cong')
            }
          }
          this.navigation.navigate('Cart',data.carts)
          this.navigation.navigate('Cart')
    }

    btnAdd(name){
        var giagoc=0;
        for (let i = 0; i < data.carts.length; i++) {
          giagoc=data.carts[i].price;
          if (data.carts[i].name === name) {
            data.carts[i].soluong=data.carts[i].soluong+1;
            data.carts[i].tongdon=data.carts[i].soluong*giagoc;
            console.log(data.carts[i].soluong);
          }
        }
        this.sum();
        this.navigation.navigate('Cart')
        this.navigation.navigate('Cart',data.carts)
    }

    btnSub(name){
    let giagoc=0;
    for (let i = 0; i < data.carts.length; i++) {
      giagoc=data.carts[i].price;
      if (data.carts[i].name === name) {
        if(data.carts[i].soluong==1){
          console.log('gioi han');
        }else{
          data.carts[i].soluong=data.carts[i].soluong-1;
          data.carts[i].tongdon=data.carts[i].soluong*giagoc;
          console.log(data.carts[i].soluong);
        }
      }
    }
    this.sum();
    this.navigation.navigate('Cart')
    this.navigation.navigate('Cart',data.carts)
    }
    sum(){
        let tong = 0;
        for (let i = 0; i < data.carts.length; i++) {
            tong = tong + data.carts[i].tongdon + 20000 + 3000;
            this.setState({tong:tong});
        }
        console.log(tong);
    }
    render(){
        const RenderItem=({cart})=> {
            console.log(cart)
            return (
              <View style={style.cart}>
                <View style={style.img}>
                  <Image
                    style={{width: 120, height: 120, borderRadius:20}}
                    source={{uri: cart.img}}
                  />
                </View>
        
                <View style={style.title}>
                  <Text style={{marginLeft: 10,marginTop:5, fontSize: 18}}>{cart.name}</Text>
                  <Text style={{marginLeft:10, fontSize:16}}>{cart.tongdon.toFixed()}đ</Text>
                  <View style={style.quantity}>
                    <Text style={style.textBtn} onPress={()=> this.btnSub(cart.name)}>-</Text>
                    <Text style={style.textSL}>{cart.soluong}</Text>
                    <Text style={style.textBtn} onPress={()=> this.btnAdd(cart.name)}>+</Text>
                  </View>
                </View>
                <View style={style.cancel}>
                  <TouchableOpacity onPress={()=>this.cancelCart(cart.name)} >
                    <Text style ={{marginLeft:5,fontSize:20}}> X </Text>
                    <Text style={{fontSize:15, textDecorationLine:"underline"}}> Hủy </Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }
          for(let i=0;i<data.carts.length-1;i++){
            for(let j=i+1;j<data.carts.length;j++){
              if(data.carts[i].name == data.carts[j].name){
                data.carts.pop(data.carts[j]);
              }
            }
          }
        
        return(
                <SafeAreaView style ={{backgroundColor:"white"}}>
                    <View style={style.header}>
                        <View style ={style.back}>
                        <TouchableOpacity onPress = {()=> this.navigation.navigate("Home")}>
                        <Image source ={require('../assets/icon/back.png')} style ={{width:18, height:18, marginTop:15}}/>
                        </TouchableOpacity>
                        <Text style ={{fontSize:20, fontWeight:'bold', marginTop:10 }}> Giỏ hàng</Text>
                        </View>
                        
                        <TouchableOpacity onPress={this.sum}>
                        <View style={{width:100, height:40, backgroundColor:"#66ffff", justifyContent:"center", borderRadius:10,marginRight:10}}>
                        <Text style ={{color:"#e74c3c", fontWeight:"bold", fontSize:18, textAlign:"center"}}>Thanh toán</Text>
                        </View>
                        </TouchableOpacity>
                    </View>

                    <View style ={{paddingHorizontal: 20, paddingVertical:5, }}>
                    <View style ={{flexDirection:'row'}}>
                        <Image
                            source ={require('../assets/icon/placeholder.png')}
                            style ={{
                                width:25,
                                height:25,
                            }}                        
                        />
                        <Text style ={{fontSize:16, marginLeft:5,color:"grey", fontWeight:'bold'}}>
                            Địa chỉ nhận hàng:
                        </Text>
                    </View>
                    <TouchableOpacity>
                        <View style ={{ paddingVertical:10}}>
                            <Text style ={{fontSize:16,  marginLeft:5, fontWeight:'bold'}}>Minh - 0351854235</Text>
                            <Text style ={{fontSize:16,  marginLeft:5, fontWeight:'bold'}}>54 Lê Thanh Nghị, Bách Khoa, Hai Bà Trưng</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                    
        
                    <View style={{height:250}}>
                    <FlatList
                        data={data.carts}
                        renderItem={({item}) => <RenderItem cart={item} />}
                    />
                    
                    </View>
                    <View style={style.bottom}>
                      <View style ={style.bottomLeft}>
                        <Text style={{fontSize: 17,paddingLeft:20, paddingTop:5}}>Phí giao hàng:</Text>
                        <Text style={{fontSize: 17,paddingLeft:20, paddingTop:5}}>Phí nền tảng:</Text>
                        <Text style={{fontSize: 17,paddingLeft:20, paddingTop:5}}>Mã giảm giá:</Text>
                        <Text style={{fontSize: 19,paddingLeft:20, paddingTop:16, fontWeight:"bold", textDecorationLine:"underline"}}>Tổng đơn:</Text>

                      </View>
                      <View style = {style.bottomRight}>
                        <Text style={{fontSize: 17, paddingLeft:80, paddingTop:5}}>20000đ</Text>
                        <Text style={{fontSize: 17, paddingLeft:80, paddingTop:5}}>3000đ</Text>
                        <TextInput placeholder ="Nhập mã giảm giá" style ={style.voucher}/>
                        <Text style={{fontSize: 19, paddingLeft:80, paddingTop:5, fontWeight:"bold"}}>{this.state.tong.toFixed()}đ</Text>
                      </View>
                    </View>
                    <View style={{height:200}}></View>
                </SafeAreaView>
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
    cart: {
        marginTop: 10,
        flexDirection: 'row',
        borderRadius: 20,
        width,
        height:120,
        marginLeft:10,
        borderWidth:1,
        borderColor:"#c8d6e5"
    },
    img: {
        flex: 2.7, 
        width: 100,
        height: 100,
        marginRight:5,
    },
    title: {
        flex: 5,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'space-between',
      },
    quantity:{
        flexDirection: 'row',
        //backgroundColor: 'pink',
        width: 120,
        height: 30,
        alignItems: 'center',
        marginTop:5,
        marginLeft: 10,
        marginBottom:7
      },
      textSL: {
        fontSize: 20,
        width: 40,
        textAlign: 'center',
      },
      textBtn: {
        fontSize: 20,
        width: 30,
        height:30,
        borderRadius:30,
        backgroundColor:"#48dbfb",
        textAlign: 'center',
        color:"white"
      },
      cancel: {
        marginTop:30,
        marginRight: 5,
        justifyContent: 'space-between'
      },
      bottom:{
        flexDirection:'row',
        marginTop: 30,
        marginLeft: 10,
        marginRight: 10,
        height:140,
      },
      bottomLeft:{
        flex: 1,
        borderLeftWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomLeftRadius:10,
        borderTopLeftRadius:10,
        borderColor:"grey"
      },
      bottomRight:{
        flex: 1,
        borderRightWidth:1,
        borderTopWidth:1,
        borderBottomWidth:1,
        borderBottomRightRadius:10,
        borderTopRightRadius:10,
        borderColor:"grey"
      },
      voucher:{
        paddingLeft:30,
        width:200,
        height:40,
        fontSize:17,
      }
})