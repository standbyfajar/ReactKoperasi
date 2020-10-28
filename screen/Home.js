import React from 'react';
import { Container, Header, Content, View, Text} from 'native-base';
import { Dimensions, TouchableOpacity } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Foundation";
import Iconawe from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";

const {height, width} = Dimensions.get("window");
console.log(height,width);
const Home = ({navigation}) => {
    console.log(navigation);
    return (

        <Container>
            <Header style={{ height:height * 0.20, width:width,backgroundColor:"red",elevation:0,alignItems:"center"}}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>Koperasi Mandiri</Text>
            </Header>
            <Content style={{marginTop:80}}>
            <View style={{flexDirection:"column"}}>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Icon name="contacts" size={60}></Icon></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {navigation.navigate("AkunSaya")}}><Text >Account</Text></TouchableOpacity>
                                </View>
                            </View>
                            
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center" , flex:2, alignItems:"center"}}>
                                    <Text ><Icon2 name="page-doc" size={60}></Icon2></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPengajuan")}}><Text >Transaksi Pengajuan </Text></TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Iconawe name="money-bill-wave" size={60}></Iconawe></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPeminjaman")}}><Text >Transaksi Peminjaman </Text></TouchableOpacity>
                                </View>
                            </View>
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Icon3 name="log-out" size={60} onPress={() => {navigation.navigate("Login")}}></Icon3></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}><Text >Login </Text></TouchableOpacity>
                                </View>
                            </View>

                    </View>
            </Content>
        </Container>
    )
}

export default Home;