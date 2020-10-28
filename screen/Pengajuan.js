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
import Icon4 from "react-native-vector-icons/MaterialIcons";
import Menu from '../components/Menu';



// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Pengajuan extends Component {
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
    // const { hasPermission } = this.state
    // if (hasPermission === null) {
    //   return <View />;
    // } else if (hasPermission === false) {
    //   return <Text>No access to camera</Text>;
    // } else {
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30}></Icon3>
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
                <Input />
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
                <Input />
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label>Tanggal Peminjaman</Label>
                <View style={{flexDirection:"row"}}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date(1990-1, 12, 31)}
                    maximumDate={new Date(2025-1, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    style={{padding:0, marginLeft:0}}
                    />
                    <Label>{this.state.chosenDate.toString().substr(4, 12)}</Label>
                </View>
              </Item>
              <Item stackedLabel>
                <Label>Keterangan</Label>
                <Input />
              </Item>
              <Item stackedLabel last>
                <Label>Status</Label>
                <Input />
              </Item>
              {/* <Item style={{ flexDirection:'row', marginBottom:20 }}>
                <Button iconLeft style={{ marginRight:10, width:'45%' }}>
                  <Icon4 name='attach-file' size={40}></Icon4>
                  <Text style={{flex:1,justifyContent: "center",alignItems: "center"}}>Attach File</Text>
                </Button>  
              </Item> */}
              <Item style={{ flexDirection:'row' }}>
                <Button rounded success style={{ marginRight:10, width:'45%' }}>
                  <Icon1 name="save" size={40}></Icon1>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Save</Text>
                </Button> 
                <Button rounded danger style={{ marginLeft:10, width:'45%'}}>
                  <Icon2 name="cancel" size={40}></Icon2>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Cancel</Text>
                </Button> 
              </Item>
              
              {/* <View style={{ flex: 1 }}> */}
                {/* <Camera style={{ flex: 1 }} type={this.state.cameraType}></Camera> */}
                {/* <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity> */}
                {/* <Camera style={{ flex: 1 }} type={this.state.cameraType}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}
                      onPress={()=>this.handleCameraType()}>
                      <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                  </View>
                </Camera> */}
              {/* </View> */}
            </Form> 
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      ); 
    // }
  }
}



//export default Pengajuan;