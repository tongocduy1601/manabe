
import React from 'react';
import { StyleSheet, View,Text, Button, StatusBar, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const Home =({navigation}) =>{
  return (<View style = {styles.container}>
    <Text style = {styles.Text, styles.textStyle}>Home</Text>
    <Button title= 'navigate'onPress={()=> navigation.navigate('Profile')}/>
  </View>)
}

const Setting =() =>{
  return (<View style = {styles.container}>
    <Text style = {styles.Text, styles.textStyle}>Setting</Text>
  </View>)
}

const Profile =() =>{
  return (<View style = {styles.container}>
    <Text style = {styles.Text, styles.textStyle}>Profile</Text>
    <Button title= 'Back'onPress={()=> navigation.goBack()}/>
  </View>)
}

function App (){
    return (
        <View>
          <StatusBar barStyle="light-content"/>
          <View style = {styles.headerContainer}>
            <View style = {styles.inputContainer}>
              <FontAwesome name = "search" size={24} color="#969696"/>
              <Text style={styles.inputText}>Ban muon tim gi hom nay ?</Text>
            </View>
            <View style={styles.cartContainer}>
            <FontAwesome name = "shopping-cart" size={24} color= "#ffffff"/>
            </View>     
          </View>
          <View style = {styles.bodyContainer}>
            <View style = {styles.sectionContainer}>
              <Text style = {styles.sectionTitle}>Điện thoại - Máy Tính Bảng</Text>
              <Image style = {styles.sectionImage} source={require('./src/assets/section_banner.png')} />
            </View>
          </View>
        </View>
    );
};


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:'center',
  },

  textStyle:{
    fontSize: 50,
  },
  headerContainer:{
    flexDirection: "row",
    paddingTop: 10,
    backgroundColor:'#1e88e5',
  },
  inputContainer:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    flex: 1,
    height:40,
    alignItems:'center',
    paddingVertical:8,
    marginBottom: 8,
    marginLeft:10,
    borderRadius:2,
    paddingHorizontal:12,
  },
  inputText:{
    marginLeft: 8,
    color: "#969696",
    fontSize:14,
    fontWeight: '500',
  },
  cartContainer:{
    paddingHorizontal: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  bodyContainer:{
    backgroundColor:'#f21'
  },
  sectionContainer:{
    backgroundColor:'#ff11ff',
    paddingHorizontal:12,
  },
  sectionTitle:{
    fontWeight:'700',
    fontSize:17,
    color:'#2f2f2f',
    marginVertical: 12,
  },
  sectionImage:{
    borderRadius:4,
  }
});


export default App;
