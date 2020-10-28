import React from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator, Button, Left, Body, Title, Right, Icon } from 'native-base';
import Icon3 from "react-native-vector-icons/AntDesign";
import Icon4 from "react-native-vector-icons/Fontisto";
import Icon5 from "react-native-vector-icons/Entypo";
import Icon6 from "react-native-vector-icons/SimpleLineIcons";
import Menu from '../components/Menu';


const Akun = (props) => {
    return (
        <Container>
            <Header>
            <Left>
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30}></Icon3>
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
                        <Text>Email</Text>
                    </Body>
                </ListItem>
                <ListItem icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon4 name='user-secret' style={{color:'white'}} size={22}></Icon4>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>Username</Text>
                    </Body>
                </ListItem>
                <ListItem icon last>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon4 name='phone' style={{color:'#f0ffff'}} size={22}></Icon4>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>Handphone</Text>
                    </Body>
                </ListItem>
                <Separator bordered>
                    <Text>Settings</Text>
                </Separator>
                <ListItem icon>
                    <Left>
                        <Button transparent style={{backgroundColor:'orange'}}> 
                            <Icon5 name='key' style={{color:'#f0ffff'}} size={22}></Icon5>
                        </Button> 
                    </Left>
                    <Body>
                        <Text>Ganti Password</Text>
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
            <Menu navigation={props.navigation}/>
        </Container>
        
    
    )
}

export default Akun;