import React from 'react';
import { TextInput, View, Text, StyleSheet } from 'react-native';

const MyTextInput = ({ label, placeholder, value, onChangeText, secureTextEntry }) => (
  <View style={style.container}>
    <Text style={style.label}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      style={style.textInput}
      secureTextEntry={secureTextEntry}
    />
  </View>
);

const style = StyleSheet.create({
  container: {
    borderColor: '#000',
    borderWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5
  },
  label: {
    fontSize: 10,
    marginBottom: 5
  },
  textInput: {
    fontSize: 14
  }
});

MyTextInput.defaultProps = {
  secureTextEntry: false
};

export default MyTextInput;