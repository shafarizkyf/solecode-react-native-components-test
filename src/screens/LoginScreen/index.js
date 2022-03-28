import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import LogoIcon from '../../../assets/icons/logo.svg';
import Icon from 'react-native-vector-icons/Ionicons';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import colors from '../../config/colors';
import { login, profile } from '../../routes/api';
import styles from '../../config/styles';
import Storage from '../../helpers/Storage';
import RootContext from '../../context/RootContext';
import { fetchApi } from '../../helpers/Request';
import validation from './validation';

const LoginScreen = () => {
  const { setAuth } = useContext(RootContext);
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [errors, setErrors] = useState();
  const [email, setEmail] = useState('reyhanau.mochammad1@gmail.com');
  const [password, setPassword] = useState('password');
  // const [email, setEmail] = useState('testing1.solecode@gmail.com');
  // const [password, setPassword] = useState('password');

  const onResponse = async (response) => {
    console.log('onResponse', response);
    if (response?.Status === 200) {
      await Storage.set('token', response.WM_AUTH_TOKEN);
      const userProfile = await fetchApi(profile(response.userId));
      setAuth({...response, ...userProfile});
    }
  };

  return (
    <View style={[style.container]}>
      <View style={[style.logoContainer]}>
        <LogoIcon />
      </View>
      <View style={[styles.flex2, styles.justifyCenter]}>
        <MyTextInput
          leftIcon={<Icon name="person-outline" size={18} color={colors.dark} />}
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          errorMessage={errors?.email}
        />
        <MyTextInput
          leftIcon={<Icon name="lock-closed-outline" size={18} color={colors.dark} />}
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          errorMessage={errors?.password}
          secureTextEntry
        />
        <MyButton
          label="Masuk"
          request={login(email, password)}
          validation={validation({ email, password })}
          onValidationError={setErrors}
          onStartFetch={() => console.log('onStartFetch')}
          onEndFetch={() => console.log('onEndFetch')}
          onResponse={onResponse}
        />
      </View>
    </View>
  )
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    paddingVertical: 12,
    fontFamily: 'OpenSans-Regular',
    fontSize: 16
  },
  linearGradient: {
    borderRadius: 8
  },
  footer: {
    alignItems: 'center',
    marginTop: 25
  }
});

export default LoginScreen;
