import React, { Component } from 'react';
import {  View, TouchableOpacity, ToastAndroid} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
  Icon,
  Body,
  Title,
  Right,
  Left
} from 'native-base';

import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Menu from '../components/Menu';
import axios from 'axios';
import Moment from 'react-moment';
import 'moment-timezone';


// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Pengajuan extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { 
      chosenDate: new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString(),
      noTransaksi : '',
      tglTransaksi : new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString(),
      noNasabah : '',
      Ket : '' };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
  }
  
  getDataUser = async () => {
    try {
        let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
        dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;

        this.setState({noNasabah:dataAsyncStorage[0].nomor_nasabah});
        return dataAsyncStorage;
      
    } catch(error) {
        console.log(error);
    }
  }
  GetOtomatisTransaksi = async ()=>{
        try {
          let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
          dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
          axios.get(`http://localhost:3131/pengajuan/${dataAsyncStorage[0].nomor_nasabah}`)
          .then(res=> {
            if (res.data.success) {
              this.setState({
                noTransaksi:res.data.notrans
              });
          return dataAsyncStorage;
              
            }else{
              console.log('Error');
            }
      })
    .catch(error => console.log(error));
        
      } catch(error) {
          console.log(error);
      }
        
  }
  
  setDate(newDate) {
    var tomorrow = new Date(newDate);
    tomorrow.setDate(tomorrow.getDate() + 1);
    this.setState({ chosenDate: tomorrow });
  }
  componentDidMount(){
    this.getDataUser();
    this.GetOtomatisTransaksi();
  }

  
  getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
  }

  simpanData =() =>{
    // console.log(this.state);
    const { chosenDate , noTransaksi, tglTransaksi, noNasabah, Ket } = this.state;
    const dataInsert = {
       nomor_transaksi : noTransaksi, tanggal_transaksi : tglTransaksi, nomor_nasabah:noNasabah,tanggal_peminjaman : chosenDate , keterangan:Ket
    }
    if (noTransaksi == "") {
        
        ToastAndroid.show("Nomor Transaksi tidak boleh kosong",ToastAndroid.SHORT);
    }else{
      axios.post('http://localhost:3131/pengajuan',dataInsert)
      .then(res=> {          
        if (res.data.success) {
          this.props.navigation.navigate('HomeScreen');
          // console.log("simpan berhasil");
          ToastAndroid.show(res.data.message,ToastAndroid.SHORT);
        }else{
          console.log("weew");
        }
      })
      .catch(error => console.log(error));
    }
  }

  render() {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => {this.props.navigation.navigate("HomeScreen")}}>
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30} ></Icon3>
                
              </Button>
            </Left>
            <Body>
              <Title>Transaksi Pengajuan</Title>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon name='menu' /> */}
              </Button>
            </Right>
          </Header>
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Nomor Transaksi</Label>
                <Input onChangeText={(value) => this.setState({noTransaksi: value})} value={this.state.noTransaksi} required editable={false}/>
              </Item> 
              <Item stackedLabel>
                <Label>
                  Tanggal Transaksi
                </Label>
                <Label>
                  <Text>{new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString()}</Text>
                </Label>
              </Item> 
              <Item stackedLabel>
                <Label>Nomor Nasabah</Label>
                <Input onChangeText={(value) => this.setState({noNasabah: value})} value={this.state.noNasabah} editable={false}/>
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label>Tanggal Peminjaman</Label>
                <View style={{flexDirection:"row"}}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date(1990-1, 12, 31)}
                    maximumDate={new Date(2030-1, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={this.state.chosenDate.toString()}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    style={{padding:0, marginLeft:0}}
                    />
                    <Label>{this.state.chosenDate.toString().substr(4, 12)}</Label>
                    
                </View>
                {/* <Text>{new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString()}</Text> */}

              </Item>
              <Item stackedLabel>
                <Label>Keterangan</Label>
                <Input onChangeText={(value) => this.setState({Ket: value})}/>
              </Item>

              {/* <Item style={{ flexDirection:'row', marginBottom:20 }}>
                <Button iconLeft style={{ marginRight:10, width:'45%' }}>
                  <Icon4 name='attach-file' size={40}></Icon4>
                  <Text style={{flex:1,justifyContent: "center",alignItems: "center"}}>Attach File</Text>
                </Button>  
              </Item> */}
              <Item style={{ flexDirection:'row' }}>
                <Button rounded success style={{ marginRight:10, width:'45%' }} onPress={()=> {
                  this.simpanData();
                }}>
                  <Icon1 name="save" size={40}></Icon1>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Save</Text>
                </Button> 
                <Button rounded danger style={{ marginLeft:10, width:'45%'}}>
                  <Icon2 name="cancel" size={40}></Icon2>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Cancel</Text>
                </Button> 
              </Item>
            </Form> 
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      ); 
    // }
  }
}



//export default Pengajuan;