import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

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
    Icon,
    Body,
    Title,
    Right,
    Left
  } from 'native-base';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Text } from 'react-native-elements';
import Icon3 from "react-native-vector-icons/AntDesign";


const signup_view = () => (
    
  <View style={[styles.scene]}>
    <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
        <Text h3>Sign Up for Free</Text>
    </View> 
    <Form>
        <Item style={{ flexDirection:'row' }}>
            <Item stackedLabel style={{ marginRight:10, width:'45%' }}>
                <Label>First Name <Text style={styles.txt_primary}>*</Text></Label>
                <Input />
            </Item> 
            <Item stackedLabel style={{ marginLeft:10, width:'45%' }}>
                <Label>Last Name <Text style={styles.txt_primary}>*</Text></Label>
                <Input />
            </Item> 
        </Item> 
        <Item stackedLabel>
            <Label>Username <Text style={styles.txt_primary}>*</Text></Label>
            <Input />
        </Item>
        <Item stackedLabel>
            <Label>Email Address <Text style={styles.txt_primary}>*</Text></Label>
            <Input />
        </Item>
        <Item stackedLabel last>
            <Label>Set A Password <Text style={styles.txt_primary}>*</Text></Label>
            <Input />
        </Item>
        <View style={{ marginLeft:20,marginTop:20 }}>
            <Button iconLeft style={{ marginRight:10, width:'95%' }}>
                {/* <Icon name='save' /> */}
                <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                    <Text style={{color:'white'}}>GET STARTED</Text>
                </View>
            </Button>  
        </View>
    </Form>  
  </View>
);

const signin_view = () => (
  <View style={[styles.scene]} >
    <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
            <Text h3>Welcome Back!</Text>
        </View> 
        <Form>
        
        <Item stackedLabel>
            <Label>Email Address <Text style={styles.txt_primary}>*</Text></Label>
            <Input />
        </Item>
        <Item stackedLabel last>
            <Label>Set A Password <Text style={styles.txt_primary}>*</Text></Label>
            <Input />
        </Item>
        <View style={{ marginLeft:20,marginTop:20 }}>
            <Button iconLeft style={{ marginRight:10, width:'95%' }}>
                {/* <Icon name='save' /> */}
                <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                    <Text style={{color:'white',}}>LOGIN</Text>
                </View>
            </Button>  
        </View>
    </Form> 
  </View>

);

const initialLayout = { width: Dimensions.get('window').width };

const Login = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'singup', title: 'Registrasi' },
        { key: 'signin', title: 'Masuk' },
    ]);

    const renderScene = SceneMap({
        singup: signup_view,
        signin: signin_view,
    });

    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                    <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30}></Icon3>
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right>
                    <Button transparent>
                    {/* <Icon name='menu' /> */}
                    </Button>
                </Right>
            </Header>
            {/* <Content> */}
            <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            />
            {/* </Content> */}
        </Container>
    );
}

const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
    txt_primary : {
        color:'red'
    }
});

export default Login;