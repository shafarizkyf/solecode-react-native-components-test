import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';

const MyTextInput = ({ leftIcon, placeholder, value, onChangeText, secureTextEntry,containerStyle }) => (
  <View style={[style.container, containerStyle]}>
    {
      leftIcon && (
        <View style={style.leftIcon}>
          { leftIcon }
        </View>
      )
    }
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputTextBackgroundColor,
    borderColor: colors.inputTextBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? 13 : 0,
    height: Platform.OS === 'ios' ? 46 : null,
    marginBottom: 10
  },
  textInput: {
    marginLeft: 10,
    flex: 1,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16,
    color: colors.inputTextColor,
  },
  toggleVisibility: {
    marginRight: 10
  },
  leftIcon: {
    marginLeft: 15,
    width: 25
  }
});

MyTextInput.defaultProps = {
  secureTextEntry: false
};

export default MyTextInput;