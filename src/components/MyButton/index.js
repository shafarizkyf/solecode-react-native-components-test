import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Request from '../../helpers/Request';

const MyButton = ({ label, request, onResponse, onStartFetch, onEndFetch }) => {

  const onPress = async () => {
    onStartFetch();
    const { method, url, data, params, headers } = request;
    const response = await Request.backend(method, url, data, params, headers);
    onResponse(response);
    onEndFetch();
  };

  return (
    <TouchableOpacity style={style.button} onPress={onPress}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: '#01754A',
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  },
  label: {
    color: '#fff'
  }
});

export default MyButton;