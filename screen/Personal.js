import React, { Component } from 'react';
import {  View, TouchableOpacity, Image, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
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
  Left,
  Picker,
  Radio,
  ListItem
} from 'native-base';
import Icon4 from "react-native-vector-icons/FontAwesome";
import Icon1 from "react-native-vector-icons/MaterialIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import Icon3 from "react-native-vector-icons/AntDesign";
import Menu from '../components/Menu';
import RadioButtonRN from 'radio-buttons-react-native';
import ImagePicker from 'react-native-image-picker';
import { log } from 'react-native-reanimated';
import axios from 'axios';


// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';
export default class Personal extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { chosenDate: new Date(), 
      noNasabah : '',
      namaNasabah : '',
      tempatLahir : '',
      tanggalLahir : new Date().getFullYear().toString()+'/'+(new Date().getMonth()+1).toString()+'/'+new Date().getDate().toString(),
      usia : '',
      jenisKelamin: '',
      typeIdentitas : '',
      noIdentitas : '',
      alamat :'',
      bank:'',
      NoRek:'',
      Gaji :'', 
      telepon : '',
      Foto : '',
      TotalTabungan:'',
      TotalPinjam:'',
      FotoIdentitas : '' };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
  }
  getDataUser = async () => {
    try {
        let dataAsyncStorage = await AsyncStorage.getItem('@dataLogin');
        dataAsyncStorage = dataAsyncStorage != null ? JSON.parse(dataAsyncStorage) : null;
        // console.log(dataAsyncStorage[0]);
        // return;
        this.setState({noNasabah:dataAsyncStorage[0].nomor_nasabah});
        this.setState({namaNasabah:dataAsyncStorage[0].nama_nasabah});
        this.setState({tempatLahir:dataAsyncStorage[0].tempat_lahir});
        this.setState({tanggalLahir:dataAsyncStorage[0].tanggal_lahir});
        this.setState({usia:dataAsyncStorage[0].usia});
        this.setState({jenisKelamin:dataAsyncStorage[0].jenis_kelamin});
        this.setState({typeIdentitas:dataAsyncStorage[0].type_identitas});
        this.setState({noIdentitas:dataAsyncStorage[0].no_identitas});
        this.setState({alamat:dataAsyncStorage[0].alamat});
        this.setState({bank:dataAsyncStorage[0].Bank});
        this.setState({NoRek:dataAsyncStorage[0].no_rek});
        this.setState({telepon:dataAsyncStorage[0].telepon});
        this.setState({Gaji:dataAsyncStorage[0].Gaji});
        this.setState({TotalTabungan:dataAsyncStorage[0].total_tabungan});
        this.setState({TotalPinjam:dataAsyncStorage[0].total_pinjam});

        return dataAsyncStorage;
      
    } catch(error) {
        console.log(error);
    }
  }

  GetOtomatisnomor =() =>{
    // console.log('aa');
    axios.get('https://koperasimobile.herokuapp.com/nasabah/124')
      .then(res=> {
        // console.log(res.data.data[0].nomor_transaksi);
        // let data= res.data;
        let data= res.data.data[0];
        // console.log(data);
  
        if (res.data.success) {
          this.setState({
            noNasabah:res.data.noNasa
          });
          // console.log(this.state.totalTabungan);
  
        }else{
          console.log('Error');
        }
      })
      .catch(error => console.log(error));
  
  }
  componentDidMount(){
    this.getDataUser();
    // this.GetOtomatisnomor();
  }
  
  Simpan = () => {
    // console.log('weew');
    const { noNasabah, namaNasabah, tempatLahir, tanggalLahir, usia, jenisKelamin, typeIdentitas, noIdentitas, alamat,
    bank, NoRek, telepon, Foto, FotoIdentitas } = this.state;
    const dataInput = {
      nomor_nasabah : noNasabah, nama_nasabah:namaNasabah ,tempat_lahir : tempatLahir,
      tanggal_lahir : tanggalLahir,usia:usia ,jenis_kelamin : jenisKelamin ,type_identitas:typeIdentitas, Gaji:Gaji,
      no_identitas:noIdentitas,alamat:alamat, Bank:bank, no_rek:NoRek, telepon:telepon,Foto:Foto,Foto_identitas:FotoIdentitas
   }
   axios.post('https://koperasimobile.herokuapp.com/nasabah',dataInput)
      .then(res=> {
        // console.log(res.data.success);
        if (res.data.success) {
          this.props.navigation.navigate('HomeScreen');
          // console.log("simpan berhasil");
          ToastAndroid.show(res.data.message,ToastAndroid.SHORT);
        }else{
          console.log("weew");
        }
      })
      .catch(error => console.log(error));
  }
  

  onValueChange(value: string) {
    this.setState({
      selected: value,
      typeIdentitas: value
    });
  }

  setDate(newDate) {

    //   alert(newDate - new Date());
    var today = new Date();
    var birthday = newDate;
    var year = 0;
    if (today.getMonth() < birthday.getMonth()) {
        year = 1;
    } else if ((today.getMonth() == birthday.getMonth()) && today.getDate() < birthday.getDate()) {
        year = 1;
    }
    var age = today.getFullYear() - birthday.getFullYear() - year;

    if(age < 0){
        age = 0;
    }
    this.setState({ chosenDate: newDate, usia: age+' Tahun' });
  }
  
  getCurrentDate=()=>{

      var date = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();

      //Alert.alert(date + '-' + month + '-' + year);
      // You can turn it in to your desired format
      return date + '-' + month + '-' + year;//format: dd-mm-yyyy;
  }

  tesFoto=()=>{
    const options_camera = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };
    
    ImagePicker.showImagePicker(options_camera, (response) => {
        console.log('Response = ', response);
    
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
        const source = { uri: response.uri };
    
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
        this.setState({
            avatarSource: source,
        });
        }
    });
  }

  render() {

    const tdata = [ 
        {
            label: 'Laki-Laki'
        },
        {
            label: 'Perempuan'
        }
    ];
      return (
        <Container>
          <Header>
            <Left>
              <Button transparent >
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30} onPress={() => {this.props.navigation.navigate("AkunSaya")}}></Icon3>
              </Button>
            </Left>
            <Body>
              <Title>Personal Data</Title>
            </Body>
            <Right>
              <Button transparent>
                {/* <Icon name='menu' /> */}
              </Button>
            </Right>
          </Header>
          <Content style={{marginBottom:50}}>
            <Form>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Nomor Nasabah</Label>
                <Input onChangeText={(value) => this.setState({noNasabah: value})} value={this.state.noNasabah} editable={false}/>
              </Item> 
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>
                  Nama Nasabah
                </Label>
                <Input onChangeText={(value) => this.setState({namaNasabah: value})} value={this.state.namaNasabah}/>
              </Item> 
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Tempat Lahir</Label>
                <Input onChangeText={(value) => this.setState({tempatLahir: value})} value={this.state.tempatLahir}/>
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label style={{fontWeight:"bold"}}>Tanggal Lahir</Label>
                <View style={{flexDirection:"row"}}>
                    <Input value={this.state.tanggalLahir.toString().substr(0,10)}></Input>
                </View>
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label style={{fontWeight:"bold"}}>Usia</Label>
                <View style={{flexDirection:"row"}}>
                  <Label>{this.state.usia}</Label>
                </View>
              </Item>
              <View style={{padding:13}}>
                <Label style={{fontWeight:"bold"}}>Jenis Kelamin</Label>                
                <Input value={this.state.jenisKelamin}></Input>
               
              </View>
              <Item stackedLabel style={{alignItems:"flex-start"}}>
                <Label style={{fontWeight:"bold"}}>Type Identitas</Label>
                <Input value={this.state.typeIdentitas}></Input>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>No Identitas</Label>
                <Input onChangeText={(value) => this.setState({noIdentitas: value})} value={this.state.noIdentitas}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Alamat</Label>
                <Input onChangeText={(value) => this.setState({alamat: value})} value={this.state.alamat}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Bank</Label>
                <Input onChangeText={(value) => this.setState({bank: value})} value={this.state.bank}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>No Rek</Label>
                <Input onChangeText={(value) => this.setState({NoRek: value})} value={this.state.NoRek.toString()}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Telepon</Label>
                <Input onChangeText={(value) => this.setState({telepon: value})} value={this.state.telepon}/>
              </Item>
              <Item disabled stackedLabel>
                <Label style={{fontWeight:"bold"}}>Gaji</Label>
                <Input value={this.state.Gaji.toString()}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Total Tabungan</Label>
                <Input value={this.state.TotalTabungan.toString()}/>
              </Item>
              <Item stackedLabel>
                <Label style={{fontWeight:"bold"}}>Total Pinjam</Label>
                <Input value={this.state.TotalPinjam.toString()}/>
              </Item>
             
              {/* <Item style={{ flexDirection:'row' }}>
                <Button rounded success style={{ marginRight:10, width:'45%' }} onPress={()=> {
                this.Simpan();
                }}>
                  <Icon1 name="save" size={40}></Icon1>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Save</Text>
                </Button> 
                <Button rounded danger style={{ marginLeft:10, width:'45%'}}>
                  <Icon2 name="cancel" size={40}></Icon2>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Cancel</Text>
                </Button> 
              </Item> */}
   
            </Form> 
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      ); 

  }
}



