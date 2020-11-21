import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage} from 'react-native';

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
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';

// const Signup_view = ({navigation}) => (
    
//   <View style={[styles.scene]}>
//     <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
//         <Text h3>Sign Up for Free</Text>
//     </View> 
//     <Form>
//         <Item style={{ flexDirection:'row' }}>
//             <Item stackedLabel style={{ marginRight:10, width:'45%' }}>
//                 <Label>First Name <Text style={styles.txt_primary}>*</Text></Label>
//                 <Input />
//             </Item> 
//             <Item stackedLabel style={{ marginLeft:10, width:'45%' }}>
//                 <Label>Last Name <Text style={styles.txt_primary}>*</Text></Label>
//                 <Input />
//             </Item> 
//         </Item> 
//         <Item stackedLabel>
//             <Label>Username <Text style={styles.txt_primary}>*</Text></Label>
//             <Input />
//         </Item>
//         <Item stackedLabel>
//             <Label>Email Address <Text style={styles.txt_primary}>*</Text></Label>
//             <Input />
//         </Item>
//         <Item stackedLabel last>
//             <Label>Set A Password <Text style={styles.txt_primary}>*</Text></Label>
//             <Input />
//         </Item>
//         <View style={{ marginLeft:20,marginTop:20 }}>
//             <Button iconLeft style={{ marginRight:10, width:'95%' }}>
//                 {/* <Icon name='save' /> */}
//                 <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
//                     <Text style={{color:'white'}}>GET STARTED</Text>
//                 </View>
//             </Button>  
//         </View>
//     </Form>  
//   </View>
// );

const Signin_view = ({navigation}) => {
    const [email_login, setEmail_login] = React.useState('');
    const [pass_login, setPass_login] = React.useState('');

    

    const buttonLogin = () => {
        const dataLogin = {
            email: email_login,
            pass: pass_login.toString()
        }
        // fetch('http://localhost:3131/admin/login', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: email_login,
        //         pass: pass_login
        //     })    
        // })
        // .then((response) => response.json())
        //     .then((json) => {
        //         console.log(json);
        //         return json;
        //     })
        //     .catch((error) => {
        //         console.error(error);
        //     });

        axios.post('http://localhost:3131/admin/login', dataLogin)
          .then((res) => {
            if (res.data.data.length>0) {
                const dataLoginAsync = JSON.stringify(res.data.data);
                // console.log(JSON.stringify(dataLoginAsync));

                try {
                    AsyncStorage.setItem('@dataLogin',dataLoginAsync );
                    console.log('sukses',dataLoginAsync);

                } catch (error) {
                    console.log(error);
                }

                navigation.navigate('HomeScreen');
            }
          })
    }

    return (
        <View style={[styles.scene]} >
            <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
                <Text h3>Welcome Back!</Text>
            </View> 
            <Form>   
                <Item stackedLabel>
                    <Label>Email Address <Text style={styles.txt_primary}>*</Text></Label>
                    <Input value={{email_login}} onChangeText={(text) => setEmail_login(text)}/>
                </Item>
                <Item stackedLabel last>
                    <Label>Set A Password <Text style={styles.txt_primary}>*</Text></Label>
                    <Input value={{pass_login}} onChangeText={(text) => setPass_login(text)} />
                </Item>
                <View style={{ marginLeft:20,marginTop:20 }}>
                    <Button iconLeft style={{ marginRight:10, width:'95%' }}
                        onPress={() => buttonLogin()}
                    >
                        {/* <Icon name='save' /> */}
                        <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                            <Text style={{color:'white',}}>LOGIN</Text>
                        </View>
                    </Button>  
                    <TouchableOpacity>
                        <Text>Belum punya akun? click here</Text>
                    </TouchableOpacity>
                </View>
            </Form> 
        </View>
    )
};

const initialLayout = { width: Dimensions.get('window').width };

const Login = ({navigation}) => {

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
            <Signin_view navigation={navigation}/>
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