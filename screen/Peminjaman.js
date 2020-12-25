import React, { Component } from 'react';
import {  View, TouchableOpacity,ToastAndroid, LogBox} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import { Camera } from 'expo-camera';
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
import Icon4 from "react-native-vector-icons/Entypo";

import Menu from '../components/Menu';
import axios from 'axios';


// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Peminjaman extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { chosenDate: new Date(),
      noPengajuan : '',
      tanggaltransaksi : new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString(),
      noPinjam : '',
      noNasabah: '',
      totalTabungan:0,
      nominal : '',
      cicil : '',
      bunga :'',
      kredit:'',
      ket:''  };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
  }


  GetOtomatisPengajuan  = async () =>{
    
      try {

        let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
        dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
        
        axios.get(`http://localhost:3131/peminjaman/${dataAsyncStorage[0].nomor_nasabah}`)
              .then(res=> {
                let data = res.data.data[0];

                this.setState({
                  noPengajuan:data.nomor_transaksi,
                  noNasabah:data.nomor_nasabah, 
                  noPinjam:res.data.notransaksi,
                  totalTabungan:res.data.tabungan
                });
                return dataAsyncStorage;
      })
      .catch(error => console.log(error));
      } catch(error) {
          console.log(error);
      }
    
  }

  simpanData =() =>{
    // console.log(this.state);
    const { chosenDate, noPengajuan,tanggaltransaksi, noPinjam, noNasabah, nominal, cicil, bunga, kredit, ket, totalTabungan } = this.state;
    const dataInsert = {
       nomor_pengajuan : noPengajuan, tanggal_transaksi : tanggaltransaksi, nomor_pinjam:noPinjam,
       nomor_nasabah : noNasabah ,nominal:nominal,cicilan:cicil,bunga:bunga,kredit_bulan:kredit, keterangan:ket
    }
    // console.log(dataInsert);
    
      if(nominal > totalTabungan){
        ToastAndroid.show('Tidak bisa cok', ToastAndroid.LONG);
      }else{
        axios.post('http://localhost:3131/peminjaman',dataInsert)
        .then(res=> {
          // console.log(res.data);
          // console.log(res.data.success);
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

  
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  
  getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
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
              <Title>Transaksi Peminjaman</Title>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon name='menu' /> */}
              </Button>
            </Right>
          </Header>
          <Content style={{marginBottom:50}}>
            <Form>
              <Item stackedLabel style={{alignItems:"flex-start"}}>
                <View style={{flexDirection:'row'}}>
                  <Label>Nomor Pengajuan </Label>
                  <TouchableOpacity transparent onPress={()=> this.GetOtomatisPengajuan()}>
                    <Icon4 name='popup' style={{color:'#f0ffff', marginTop:10}} size={20}>

                    </Icon4>
                  </TouchableOpacity>
                </View> 
                <Input onChangeText={(value) => this.setState({noPengajuan: value})} value={this.state.noPengajuan} editable={false}/>
              </Item> 
              <Item stackedLabel>
                <Label>
                  Tanggal Transaksi
                </Label>
                <Label>
                <Text>{new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString()}</Text>
                  {/* {this.state.chosenDate.toString().substr(4, 12)} */}
                </Label>
              </Item> 
              <Item stackedLabel>
                <Label>No Transaksi</Label>
                <Input onChangeText={(value) => this.setState({noPinjam: value})} editable={false} value={this.state.noPinjam}/>
              </Item>
              <Item  stackedLabel>
                <Label>Nasabah</Label>
                <Input onChangeText={(value) => this.setState({noNasabah: value})} value={this.state.noNasabah} editable={false}/>
                
              </Item>
              <Item stackedLabel>
                <Label>Total Tabungan </Label>
                <Input onChangeText={(value) => this.setState({totalTabungan: value})} editable={false} value={this.state.totalTabungan.toString()}/>
              </Item>
              <Item stackedLabel last>
                <Label>Nominal</Label>
                <Input onChangeText={(value) => this.setState({nominal: value})}/>
              </Item>
              <Item stackedLabel last>
                <Label>x cicilan</Label>
                <Input onChangeText={(value) => this.setState({cicil: value})}/>
              </Item>
              <Item stackedLabel last>
                <Label>Jasa</Label>
                <Input onChangeText={(value) => this.setState({bunga: value})}/>
              </Item>
              <Item stackedLabel last>
                <Label>Setor/Bulan</Label>
                <Input onChangeText={(value) => this.setState({kredit: value})}/>
              </Item>
              <Item stackedLabel last>
                <Label>keterangan</Label>
                <Input onChangeText={(value) => this.setState({ket: value})}/>
              </Item>
              
              <Item style={{ flexDirection:'row' }}>
                <Button rounded info style={{ marginRight:10, width:'45%' }} onPress={()=>{
                  this.simpanData();
                }}>
                  <Icon1 name="save" size={40} style={{marginLeft:10}}></Icon1>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Save</Text>
                </Button> 
                <Button rounded danger style={{ marginLeft:10, width:'45%' }}>
                  <Icon2 name="cancel" size={40} style={{marginLeft:10}}></Icon2>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Cancel</Text>
                </Button> 
              </Item>
        
            </Form> 
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      ); 
    
  }
}

  // state = {
  //   hasPermission: null,
  //   type: Camera.Constants.Type.back,
  // }
  // async componentDidMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasPermission: status === 'granted' });
  // }
  // handleCameraType=()=>{
  //   const { cameraType } = this.state

  //   this.setState({cameraType:
  //     cameraType === Camera.Constants.Type.back
  //     ? Camera.Constants.Type.front
  //     : Camera.Constants.Type.back
  //   })
  // }