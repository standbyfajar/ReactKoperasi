import React, { Component } from 'react';
import {  View, TouchableOpacity, Image } from 'react-native';
// import { Camera } from 'expo-camera';
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

// import * as Permissions from 'expo-permissions';
// import { FontAwesome, Ionicons,MaterialCommunityIcons } from '@expo/vector-icons';

export default class Personal extends Component {
  constructor(props) {
    super(props);
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    this.state = { chosenDate: new Date(), usia : '' };
    this.setDate = this.setDate.bind(this);
    this.current_date = date;
    this.current_month = month;
    this.current_year = year;
    
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
  }

  
  // state = {
  //   hasPermission: null,
  //   type: Camera.Constants.Type.back,
  // }
  // async componentDidMount() {
  //   const { status } = await Permissions.askAsync(Permissions.CAMERA);
  //   this.setState({ hasPermission: status === 'granted' });
  // }
  // handleCameraType=()=>{
  //   const { cameraType } = this.state

  //   this.setState({cameraType:
  //     cameraType === Camera.Constants.Type.back
  //     ? Camera.Constants.Type.front
  //     : Camera.Constants.Type.back
  //   })
  // }
  
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
                <Icon3 name='arrowleft' style={{color:'#f0ffff'}} size={30}></Icon3>
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
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Nomor Nasabah</Label>
                <Input />
              </Item> 
              <Item stackedLabel>
                <Label>
                  Nama Nasabah
                </Label>
                <Input />
              </Item> 
              <Item stackedLabel>
                <Label style={{fontWeight:"bold", color:'white'}}>Tempat Lahir</Label>
                <Input />
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label>Tanggal Lahir</Label>
                <View style={{flexDirection:"row"}}>
                  <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date(1990-1, 12, 31)}
                    maximumDate={new Date(2025-1, 12, 31)}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText={this.state.chosenDate.toString().substr(4, 12)}
                    textStyle={{ color: "green" }}
                    placeHolderTextStyle={{ color: "#d3d3d3" }}
                    onDateChange={this.setDate}
                    disabled={false}
                    style={{padding:0, marginLeft:0}}
                    />
                    <Label>{this.state.chosenDate.toString().substr(4, 12)}</Label>
                </View>
              </Item>
              <Item disabled stackedLabel style={{alignItems:"flex-start"}}>
                <Label>Usia</Label>
                <View style={{flexDirection:"row"}}>
                  <Label>{this.state.usia}</Label>
                </View>
              </Item>
              <View style={{padding:13}}>
                <Label>Jenis Kelamin</Label>                
                <RadioButtonRN
                data={tdata}
                selectedBtn={(e) => console.log(e)}
                />
              </View>
              <Item stackedLabel style={{alignItems:"flex-start"}}>
                <Label>Type Identitas</Label>
                <Picker style={{flexDirection:"row"}}
                    note
                    mode="dropdown"
                    style={{ width: 250 }}
                    selectedValue={this.state.selected}
                    onValueChange={this.onValueChange.bind(this)}
                    >
                    <Picker.Item label="Pilih Identitas" value="" />
                    <Picker.Item label="KTP" value="KTP" />
                    <Picker.Item label="SIM" value="SIM" />
                </Picker>
              </Item>
              <Item stackedLabel>
                <Label>No Identitas</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Alamat</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Bank</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>No Rek</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Telepon</Label>
                <Input />
              </Item>
              <Item disabled stackedLabel>
                <Label>Total Tabungan</Label>
                <Input />
              </Item>
              <Item stackedLabel>
                <Label>Foto</Label>
                <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.tesFoto()}
                  >
                  <Icon1
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity>
                <Image source={this.state.avatarSource} />
              </Item>
              <Item stackedLabel>
                <Label>Foto Identitas</Label>
                <Input />
              </Item>
              <Item disabled stackedLabel>
                <Label>Status</Label>
                <Input />
              </Item>
              <Item style={{ flexDirection:'row' }}>
                <Button rounded success style={{ marginRight:10, width:'45%' }}>
                  <Icon1 name="save" size={40}></Icon1>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Save</Text>
                </Button> 
                <Button rounded danger style={{ marginLeft:10, width:'45%'}}>
                  <Icon2 name="cancel" size={40}></Icon2>
                  <Text style={{justifyContent: "center",alignItems: "center"}}>Cancel</Text>
                </Button> 
              </Item>
   
            </Form> 
          </Content>
          <Menu navigation={this.props.navigation}/>
        </Container>
      ); 
    // }
               
              {/* <View style={{ flex: 1 }}> */}
                {/* <Camera style={{ flex: 1 }} type={this.state.cameraType}></Camera> */}
                {/* <TouchableOpacity
                  style={{
                    alignSelf: 'flex-end',
                    alignItems: 'center',
                    backgroundColor: 'transparent',
                  }}
                  onPress={()=>this.handleCameraType()}
                  >
                  <MaterialCommunityIcons
                      name="camera-switch"
                      style={{ color: "#fff", fontSize: 40}}
                  />
                </TouchableOpacity> */}
                {/* <Camera style={{ flex: 1 }} type={this.state.cameraType}>
                  <View
                    style={{
                      flex: 1,
                      backgroundColor: 'transparent',
                      flexDirection: 'row',
                    }}>
                    <TouchableOpacity
                      style={{
                        flex: 0.1,
                        alignSelf: 'flex-end',
                        alignItems: 'center',
                      }}
                      onPress={()=>this.handleCameraType()}>
                      <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
                    </TouchableOpacity>
                  </View>
                </Camera> */}
              {/* </View> */}
  }
}



//export default Pengajuan;