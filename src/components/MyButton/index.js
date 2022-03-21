import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import Request from '../../helpers/Request';

const MyButton = ({ label, request, onResponse, onStartFetch, onEndFetch, onPress: action }) => {

  const onPress = async () => {
    onStartFetch();
    const { method, url, data, params, headers } = await request;
    const response = await Request.backend(method, url, data, params, headers);
    onResponse(response);
    onEndFetch();
  };

  return (
    <TouchableOpacity style={style.button} onPress={request ? onPress : action}>
      <Text style={style.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  button: {
    backgroundColor: colors.buttonPrimary,
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 5
  },
  label: {
    fontFamily: 'OpenSans-SemiBold',
    color: '#fff'
  }
});

MyButton.defaultProps = {
  onStartFetch: () => null,
  onEndFetch: () => null
}

export default MyButton;