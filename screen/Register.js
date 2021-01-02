import React from 'react';
import { View, StyleSheet, Dimensions, AsyncStorage, ToastAndroid, Image} from 'react-native';

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
            PASSWORD: pass,
            namadepan:namadepan,
            namabelakang:namabelakang,
            username:username
        }

        axios.post('https://koperasimobile.herokuapp.com/admin/regis', dataLogin)
          .then((res) => {
            //   console.log(res.data.data);
            if (res.data.success) {
                navigation.navigate('Login');
                // this.props.navigation.navigate('HomeScreen');
                // console.log("simpan berhasil");
                // message="Berhasil Daftar ! Silahkan Cek Email pada Kotak Masuk "
                ToastAndroid.show(res.data.message,ToastAndroid.SHORT);
              }else{
                // console.log("weew");
              }
            
          })
    }
    const {height, width} = Dimensions.get("window");

    return(
        
       <Container>
           <Header style={{ height:height * 0.10, width:width,
                backgroundColor:"white",marginTop:10,marginBottom:10,
                elevation:0,alignItems:"center"}}>
                    <Image
                        style={{width:70,borderRadius:35,height:70,marginRight:5}}
                        source={require('../assets/image/kop.jpg')}
                    />
                    <Text style={{fontSize:20,fontWeight:"bold"}}>Koperasi Sahabat Mandiri</Text>
                </Header>
           <View style={[styles.scene]}>
        <View style={{alignItems: "center", marginTop:20, marginBottom:20}}>
            <Text h4>Sign Up for Free</Text>
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
                <Input secureTextEntry={true} value={{pass}} onChangeText={(text) => setPass(text)}/>
            </Item>
            <View style={{ marginLeft:20,marginTop:20 }}>
                <Button iconLeft style={{ marginRight:10, width:'95%' }}
                    onPress={() => buttonRegis()} >
                    {/* onPress={() => buttonRegis()} */}
                    
                    {/* <Icon name='save' /> */}
                    
                    <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
                        <Text style={{color:'white'}}>GET STARTED</Text>
                    </View>
                </Button>  
            </View>
        </Form>  
      </View>
       </Container>
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
