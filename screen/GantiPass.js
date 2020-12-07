import React, { Component } from 'react';
import {  View, TouchableOpacity, ToastAndroid} from 'react-native';
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

export default class GantiPass extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { 
      chosenDate: new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString() ,
      noTransaksi : '',
      tglTransaksi : new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString(),
      noNasabah : '',
      Ket : '' };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
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
    // console.log(chosenDate);
    
    
    }

  render() {

      return (
        <Container>
          <Header>
            <Left>
              <Button transparent onPress={() => {this.props.navigation.navigate("AkunSaya")}}>
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30} ></Icon3>
                
              </Button>
            </Left>
            <Body>
              <Title>Ganti Password</Title>
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
                <Label>Username</Label>
                <Input onChangeText={(value) => this.setState({noTranaksi: value})} Readonly/>
              </Item> 
              <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={(value) => this.setState({noTranaksi: value})} Readonly/>
              </Item> 
              <Item stackedLabel>
                <Label>Password</Label>
                <Input onChangeText={(value) => this.setState({noTranaksi: value})} required/>
              </Item> 
              
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