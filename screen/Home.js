import React from 'react';
import { Container, Header, Content, View, Text} from 'native-base';
import { Dimensions, TouchableOpacity, Image } from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";
import Icon2 from "react-native-vector-icons/Foundation";
import Iconawe from "react-native-vector-icons/FontAwesome5";
import Icon3 from "react-native-vector-icons/Entypo";


const {height, width} = Dimensions.get("window");
// console.log(height,width);
const Home = ({navigation}) => {
    // console.log(navigation);
    
    return (

        <Container>
            <Header style={{ height:height * 0.20, width:width,backgroundColor:"red",elevation:0,alignItems:"center"}}>
            <Image
                style={{width:70, borderRadius:30,height:70,marginRight:5}}
                source={require('../assets/image/kop.jpg')}
            />
             <Text style={{fontSize:20,fontWeight:"bold"}}>Koperasi Sahabat Mandiri</Text>
            </Header>
            <Content style={{marginTop:80}}>
            <View style={{flexDirection:"column"}}>
                            <View style={{flexDirection:"row", flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                    <Text><Iconawe name="book" size={60} onPress={() => {navigation.navigate("AkunSaya")}}></Iconawe></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                    <TouchableOpacity onPress={() => {navigation.navigate("AkunSaya")}}><Text >Master Data</Text></TouchableOpacity>
                                </View>
                            </View>
                            
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center" , flex:2, alignItems:"center"}}>
                                    <Text ><Icon3 name="open-book" size={60} onPress={() => {navigation.navigate("TransaksiPengajuan")}}></Icon3></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPengajuan")}}><Text >Transaksi Pengajuan </Text></TouchableOpacity>
                                    
                                </View>
                            </View>
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Iconawe name="money-bill-wave" size={60} onPress={() => {navigation.navigate("TransaksiPeminjaman")}} ></Iconawe></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("TransaksiPeminjaman")}}><Text >Transaksi Peminjaman </Text></TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Icon name="user" size={60} onPress={() => {navigation.navigate("Personal")}}></Icon></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("Personal")}}><Text >Personal Info </Text></TouchableOpacity>
                                </View>
                            </View> */}
                            <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Icon3 name="log-out" size={60} onPress={() => {navigation.navigate("Login")}}></Icon3></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("Login")}}><Text >Login </Text></TouchableOpacity>
                                </View>
                            </View>
                            {/* <View style={{flexDirection:"row",flex:1, justifyContent:"center"}}>
                                <View style={{justifyContent:"center",flex:2, alignItems:"center"}}>
                                  <Text><Icon3 name="log-out" size={60} onPress={() => {navigation.navigate("Register")}}></Icon3></Text>
                                </View>
                                <View style={{justifyContent:"center",flex:3}}>
                                <TouchableOpacity onPress={() => {navigation.navigate("Register")}}><Text >Regis </Text></TouchableOpacity>
                                </View>
                            </View> */}

                    </View>
            </Content>
        </Container>
    )
}

export default Home;