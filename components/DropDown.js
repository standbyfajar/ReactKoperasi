import React, { Component } from 'react';
import {  View, TouchableOpacity} from 'react-native';
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
  Left
} from 'native-base';

import RNPickerSelect from 'react-native-picker-select';

export default class DropDown extends Component {
    
    handleDropdownChange = (name) => (value) => {
       this.setState({ [name]: value })
    }
    
    render() {
       const { dropdownValue } = this.state  
 
       return (
            <RNPickerSelect
                value={dropdownValue}
                items={[
                    { label: 'A', value: 'A' },
                    { label: 'B', value: 'B' },
                    { label: 'C', value: 'C' },
                ]}
                onValueChange={this.handleDropdownChange('dropdownValue')}
            />
       )
    }
 }