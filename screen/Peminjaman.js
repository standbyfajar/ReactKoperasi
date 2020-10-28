import React, { Component } from 'react';
import {  View, TouchableOpacity} from 'react-native';
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
import Menu from '../components/Menu';


// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Peminjaman extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
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
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30}></Icon3>
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
              <Item stackedLabel>
                <Label>Nomor Pengajuan</Label>
                <Input />
              </Item> 
              <Item stackedLabel>
                <Label>
                  Tanggal Transaksi
                </Label>
                <Label>
                  {this.state.chosenDate.toString().substr(4, 12)}
                </Label>
              </Item> 
              <Item stackedLabel>
                <Label>No Transaksi</Label>
                <Input />
              </Item>
              <Item  stackedLabel>
                <Label>Nasabah</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Total Tabungan</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Nominal</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>x cicilan</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Jasa</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Cicilan/Bulan</Label>
                <Input />
              </Item>
              
              <Item style={{ flexDirection:'row' }}>
                <Button rounded info style={{ marginRight:10, width:'45%' }}>
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
