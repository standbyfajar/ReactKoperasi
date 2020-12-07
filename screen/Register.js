import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage, ToastAndroid} from 'react-native';

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



const Register = ({navigation}) => {
    const [email, setEmail] = React.useState('');
    const [pass, setPass] = React.useState('');
    const [namadepan, setnamadepan] = React.useState('');
    const [namabelakang, setnamabelakang] = React.useState('');
    const [username, setusername] = React.useState('');

    

    const buttonRegis = () => {
        const dataLogin = {
            email: email,
            pass: pass.toString(),
            namadepan:namadepan,
            namabelakang:namabelakang,
            username:username
        }

        axios.post('http://localhost:3131/admin/regis', dataLogin)
          .then((res) => {
            //   console.log(res.data.data);
            if (res.data.success) {
                navigation.navigate('Login');
                // this.props.navigation.navigate('HomeScreen');
                // console.log("simpan berhasil");
                msg="Berhasil Daftar ! Silahkan Cek Email pada Kotak Masuk "
                ToastAndroid.show(res.data.msg,ToastAndroid.SHORT);
              }else{
                console.log("weew");
              }

            
          })
    }
    return(
        <View style={[styles.scene]}>
        <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
            <Text h3>Sign Up for Free</Text>
        </View> 
        <Form>
            <Item style={{ flexDirection:'row' }}>
                <Item stackedLabel style={{ marginRight:10, width:'45%' }}>
                    <Label>First Name <Text style={styles.txt_primary}>*</Text></Label>
                    <Input value={{namadepan}} onChangeText={(text) => setnamadepan(text)} />
                </Item> 
                <Item stackedLabel style={{ marginLeft:10, width:'45%' }}>
                    <Label>Last Name <Text style={styles.txt_primary}>*</Text></Label>
                    <Input value={{namabelakang}} onChangeText={(text) => setnamabelakang(text)}/>
                </Item> 
            </Item> 
            <Item stackedLabel>
                <Label>Username <Text style={styles.txt_primary}>*</Text></Label>
                <Input value={{username}} onChangeText={(text) => setusername(text)}/>
            </Item>
            <Item stackedLabel>
                <Label>Email Address <Text style={styles.txt_primary}>*</Text></Label>
                <Input value={{email}} onChangeText={(text) => setEmail(text)}/>
            </Item>
            <Item stackedLabel last>
                <Label>Set A Password <Text style={styles.txt_primary}>*</Text></Label>
                <Input value={{pass}} onChangeText={(text) => setPass(text)}/>
            </Item>
            <View style={{ marginLeft:20,marginTop:20 }}>
                <Button iconLeft style={{ marginRight:10, width:'95%' }}
                    onPress={() => buttonRegis()}>
                    {/* <Icon name='save' /> */}
                    
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={{color:'white'}}>GET STARTED</Text>
                    </View>
                </Button>  
            </View>
        </Form>  
      </View>
    )

}

 
const styles = StyleSheet.create({
    scene: {
      flex: 1,
    },
    txt_primary : {
        color:'red'
    }
});
export default Register;
