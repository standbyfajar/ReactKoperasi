import React, {useEffect,useState} from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Button, Left, Body, Title, Right, Icon,View } from 'native-base';
import { AsyncStorage, TouchableOpacity } from 'react-native';
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Fontisto";
import Icon5 from "react-native-vector-icons/Entypo";
import Icon6 from "react-native-vector-icons/SimpleLineIcons";
import Menu from '../components/Menu';
import Iconawe from "react-native-vector-icons/FontAwesome5";



const Email = (props) => {
    const [email, setEmail_login] = React.useState('');
    const [namadepan, setnamadepan] = React.useState('');
    const [telepon, setTelepon] = React.useState('');
    const [namabelakang, setnamabl] = React.useState('');


    useEffect(()=>{
        getDataUser();
      }, []);

    const getDataUser = async () => {
        try {
            let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
            dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
            // console.log(dataAsyncStorage[0]);
            // return;
            setEmail_login(dataAsyncStorage[0].email);
            setnamadepan(dataAsyncStorage[0].namadepan);
            setnamabl(dataAsyncStorage[0].namabelakang);
            setTelepon(dataAsyncStorage[0].telepon);


            // this.setState({noNasabah:dataAsyncStorage[0].nomor_nasabah});
            return dataAsyncStorage;
          
        } catch(error) {
            console.log(error);
        }
      }
    
                AsyncStorage.getItem("dataLogin").then((value)=>{
                    console.log(value);
                });


    return (
        <Container>
            <Header>
            <Left>
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30} onPress={() => {props.navigation.navigate("AkunSaya")}}></Icon3>
              </Button>
            </Left>
            <Body>
              <Title>Account</Title>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon name='menu' /> */}
              </Button>
            </Right>
          </Header>
            <Content>
                <Separator bordered>
                    <Text>Information</Text>
                </Separator>
                <ListItem icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon4 name='email' style={{color:'#f0ffff'}} size={22}></Icon4>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>{email}</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon4 name='user-secret' style={{color:'white'}} size={22}></Icon4>
                        </Button> 
                    </Left>
                    <Body >
                        <Text>{namadepan} {namabelakang}</Text>
                    </Body>
                </ListItem>
                <ListItem icon last>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon4 name='phone' style={{color:'#f0ffff'}} size={22}></Icon4>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>{telepon}</Text>
                    </Body>
                </ListItem>
                <Separator bordered>
                    <Text>Settings</Text>
                </Separator>
                <ListItem icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon5 name='key' style={{color:'#f0ffff'}} size={22} onPress={() => {props.navigation.navigate("GantiPass")}}></Icon5>
                        </Button> 
                    </Left>
                    <Body>
                        <Text onPress={() => {props.navigation.navigate("GantiPass")}}>Ganti Password</Text>
                    </Body>
                </ListItem>
                <ListItem last icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'red'}}> 
                            <Icon6 name='logout' style={{color:'#f0ffff'}} size={22}></Icon6>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>Log Out</Text>
                    </Body>
                </ListItem>
                </Content>
         
            {/* <Menu navigation={props.navigation}/> */}
        </Container>
        
    
    )
}

export default Email;