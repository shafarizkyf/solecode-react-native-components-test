import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import Request from '../../helpers/Request';

const MyButton = ({ label, request, validation, onValidationError, onResponse, onStartApiCall, onEndApiCall, onPress: action }) => {

  const onPress = async () => {
    const { method, url, data, params, headers } = await request;
    if (validation) {
      const errors = validation();
      if (errors !== undefined) {
        onValidationError(errors);
        return;
      }
    }

    onStartApiCall();
    const response = await Request.backend(method, url, data, params, headers);
    onResponse(response);
    onEndApiCall();
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
  onStartApiCall: () => null,
  onEndApiCall: () => null,
  onValidationError: () => null,
  validation: null,
}

export default MyButton;