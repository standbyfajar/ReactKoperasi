import React, { Component } from 'react';
import BottomNavigation, {
    FullTab
} from 'react-native-material-bottom-navigation'
import {  View, TouchableOpacity, SafeAreaView} from 'react-native';
import Icon from "react-native-vector-icons/Foundation";
import Iconawe from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";

import { 
    Container, 
    Header, 
    Content, 
    Form, 
    Item, 
    Input, 
    Label, 
    DatePicker, 
    Button, 
    Text, 
    // Icon,
    Body,
    Title,
    Right,
    Left
} from 'native-base';

const Menu = (props) => {
  console.log('porps',props);

  return(
    <View style={{ flexDirection:'row',marginTop:-40, height:50, alignItems:"baseline", borderWidth:1}}>
      <TouchableOpacity style={{marginHorizontal:31}}><Icon name="home" size={40} onPress={()=>{props.navigation.navigate("HomeScreen")}}/></TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:31}}><Icon3 name="open-book" size={40} onPress={()=>{props.navigation.navigate("TransaksiPengajuan")}}/></TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:31}}><Iconawe name="money-bill-wave" size={40} onPress={()=>{props.navigation.navigate("TransaksiPeminjaman")}}/></TouchableOpacity>
      <TouchableOpacity style={{marginHorizontal:31}}><Icon name="torso" size={40} onPress={()=>{props.navigation.navigate("AkunSaya")}}/></TouchableOpacity>
    </View>  
  );
}

export default Menu;

// export default class Menu extends React.Component {
//     constructor(props) {
//       super(props); 
//       // console.log('propss',props.navigation); 
//     }

//     handlePindah = () => {
//       console.log(props);
//     }
   
//     render() {
//       return (
//         <View style={{ flexDirection:'row', alignSelf:"center"}}>
//           <Text style={{marginHorizontal:50}}><Icon name="home" size={30} onPress={()=>{handlePindah()}}/></Text>
//           <Text style={{marginHorizontal:50}}>a</Text>
//           <Text style={{marginHorizontal:50}}>a</Text>
//           <Text style={{marginHorizontal:50}}>a</Text>
//         </View>
//       )
//     }
//   }


  {/* <View style={{ flex: 1 }}> */}
            {/* Your screen contents depending on current tab. */}
          {/* </View> */}
          // <BottomNavigation
          //   activeTab={this.state.activeTab}
          //   onTabPress={() => {
          //     // handleChangeScreen(this.key);
          //     console.log('this',this.tabs.key);
          //   }}
          //   renderTab={this.renderTab}
          //   tabs={this.tabs}
          // />