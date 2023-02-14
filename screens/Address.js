import React,{ Component } from "react";
import {View,
        Text,
        Button,
        Image,
        TextInput,
        SafeAreaView,
        StyleSheet} from 'react-native';
import { TouchableOpacity } from "react-native-gesture-handler";

import MapView, { PROVIDER_GOOGLE,Marker } from 'react-native-maps';

export default class Map extends Component{
    constructor (props){
        super(props);
        this.navigation = props.navigation;
    }
    render(){
        return(
            <SafeAreaView>
                <View style={styles.header}>
                <TouchableOpacity onPress={()=>this.navigation.navigate('Home')}>
                <View style={styles.btnPrimary} style={{flexDirection: 'row',justifyContent:'center'}}>
                  <Image source ={require("../assets/icon/left-arrow.png")}
                      style ={{width:30, height:30,marginRight:120}}
                          />
                          <Text style={{
                            fontWeight:'bold',
                            fontSize:18,
                            marginTop:1,
                            marginRight:150
                            }}>
                    Nhập địa chỉ
                </Text>
                </View>
              </TouchableOpacity>
            </View>
                <View style={styles.container}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={styles.map}
                        region={{
                            latitude: 21.03333,
                            longitude: 105.85000,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                    >
                    </MapView>
                    <View style={styles.searchBox}>  
                    <TextInput 
                        placeholder="Tìm kiếm"
                        placeholderTextColor="#000"
                        autoCapitalize="none"
                        style={{padding:0, flex:1, marginLeft:10,}}>
                        </TextInput>
                    <Image                       
                        source={require('../assets/icon/search.png')}
                        style={{
                            width:20,
                            height:20,
                            marginRight:10,
                            justifyContent:'center',
                            alignItems:'center',
                        }}
                    />  
                </View>
            </View>
            <View>
            <View style={styles.address}>
            <Text style={{ fontSize:15,
                 color:"#808080",
                fontWeight:'bold',
                marginTop:10,}}>
                    Giao đến
                </Text>
                <TextInput placeholder = "Địa chỉ..." 
                style={styles.input}/>
                <TextInput placeholder = "+ Thêm vào tòa nhà , tầng, số phòng"/>
            </View>
                <TouchableOpacity onPress ={()=> this.navigation.navigate('Home')}>
                <View style={styles.btnPrimary}>
                    <Text style = {{color:"#FFF"
                    ,textAlign:'center',
                    fontSize:22}}>
                        Xác nhận
                    </Text>
                </View>
              </TouchableOpacity>
            </View>
        </SafeAreaView>
        )
    }
};

const  styles = StyleSheet.create({
    header:{
        height:40,
        backgroundColor:"#fff",
        borderBottomWidth: 0.2,
    },
    container: {
        height:380,
        width: 410,
        alignItems: 'center',

      },
    map: {
        ...StyleSheet.absoluteFillObject,
        flex:1,
        height:'100%',
        width: '100%',

      },
      searchBox:{
          marginTop:10,
          flexDirection: 'row',
          backgroundColor:"#fff",
          height:40,
          borderRadius:10,
          justifyContent:'center',
          alignItems:'center',
          width:350,

      },
      address:{
          backgroundColor:'#FFF',
          paddingHorizontal: 20,
      },
      input:{
        fontSize:24,
        fontWeight:'bold',
      },
      btnPrimary:{
          height:50,
          justifyContent:'center',
          borderTopWidth:0.5,
          borderBottomStartRadius:5,
          borderBottomRightRadius:5,
          backgroundColor:"#48dbfb"
      }
})