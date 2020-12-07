import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Button, Left, Body, Title, Right, Icon,View } from 'native-base';
import { TouchableOpacity } from 'react-native';
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Fontisto";
import Icon5 from "react-native-vector-icons/Entypo";
import Icon6 from "react-native-vector-icons/FontAwesome";
import Menu from '../components/Menu';
import Iconawe from "react-native-vector-icons/FontAwesome5";



const Akun = (props) => {
    console.log(props); 
    return (
        <Container>
            <Header>
            <Left>
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30} onPress={() => {props.navigation.navigate("HomeScreen")}}></Icon3>
              </Button>
            </Left>
            <Body>
              <Title>Master Data</Title>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon name='menu' /> */}
              </Button>
            </Right>
          </Header>
          <Content style={{marginTop:180}}>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Icon6 name="user-circle" size={60} onPress={() => {props.navigation.navigate("Personal")}}></Icon6></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate("Personal")}}><Text >Personel Info </Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Icon5 name="email" size={60} onPress={() => {props.navigation.navigate("Email")}}></Icon5></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate("Email")}}><Text >Akun Saya </Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Icon5 name="key" size={60} onPress={() => {props.navigation.navigate("GantiPass")}}></Icon5></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {props.navigation.navigate("GantiPass")}}><Text >Ganti Password </Text></TouchableOpacity>
                                </View>
                            </View>
                          </Content>
            <Menu navigation={props.navigation}/>
        </Container>
        
    
    )
}

export default Akun;