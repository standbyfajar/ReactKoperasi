import React, { Component } from 'react';
import {  View, TouchableOpacity, ToastAndroid, AsyncStorage} from 'react-native';
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
      username : '',
      email : '',
      PASSWORD : '' };
  
    
  }
  getDataUser = async () => {
    try {
        let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
        dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
        console.log(dataAsyncStorage);
        this.setState({username:dataAsyncStorage[0].username});
        this.setState({email:dataAsyncStorage[0].email});
        this.setState({PASSWORD:dataAsyncStorage[0].PASSWORD});

        return dataAsyncStorage;
      
    } catch(error) {
        console.log(error);
    }
  }
  componentDidMount(){
    this.getDataUser();
  }

  simpanData = async () =>{
    try {
      let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
      dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
        
        const { username , email, PASSWORD } = this.state;
        // insert database
        const dataInsert = {
          username: username,
          email: email,
          PASSWORD : PASSWORD
        }

        
        if (PASSWORD == "") {
            
            ToastAndroid.show("PASSWORD TIDAK BOLEH KOSONG,Jika ingin ganti password",ToastAndroid.LONG);
        }else{
          axios.put(`http://localhost:3131/admin/${dataAsyncStorage[0].login_id}`,dataInsert)
          .then(res=> {
            // console.log(res.data.success);
            if (res.data.success) {
              this.props.navigation.navigate('HomeScreen');
              // console.log("simpan berhasil");
              ToastAndroid.show(res.data.message,ToastAndroid.SHORT);
              return dataAsyncStorage;

            }else{
              console.log("weew");
            }
          })
          .catch(error => console.log(error));
          
        }
      }catch(error) {
        console.log(error);
    }
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
                <Input onChangeText={(value) => this.setState({username: value})}value={this.state.username} Readonly/>
              </Item> 
              <Item stackedLabel>
                <Label>Email</Label>
                <Input onChangeText={(value) => this.setState({email: value})} value={this.state.email}Readonly/>
              </Item> 
              <Item stackedLabel>
                <Label>Password</Label>
                <Input onChangeText={(value) => this.setState({PASSWORD: value})} required/>
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