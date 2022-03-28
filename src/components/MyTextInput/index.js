import React from 'react';
import { TextInput, View, Text, StyleSheet, Platform } from 'react-native';
import colors from '../../config/colors';
import styles from '../../config/styles';

const MyTextInput = ({ leftIcon, placeholder, value, errorMessage, onChangeText, secureTextEntry, containerStyle }) => (
  <View style={[styles.mb15, containerStyle]}>
    <View style={[style.inputContainer]}>
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
    { errorMessage && <Text style={styles.errorMessage}>{errorMessage}</Text> }
  </View>
);

const style = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputTextBackgroundColor,
    borderColor: colors.inputTextBorderColor,
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: Platform.OS === 'ios' ? 13 : 0,
    height: Platform.OS === 'ios' ? 46 : null
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