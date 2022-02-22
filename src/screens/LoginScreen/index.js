import React, { useState } from 'react';
import { Alert, View } from 'react-native';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import api from '../../routes/api';

const LoginScreen = () => {
  const [email, setEmail] = useState('eve.holt@reqres.in');
  const [password, setPassword] = useState('cityslicka');

  return (
    <View style={{ padding: 50 }}>
      <MyTextInput
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChangeText={setEmail}
      />
      <MyTextInput
        label="Password"
        placeholder="Enter your password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <MyButton
        label="Login"
        request={{
          url: api.LOGIN,
          method: 'POST',
          data: { email, password }
        }}
        onStartFetch={() => console.log('onStartFetch')}
        onEndFetch={() => console.log('onEndFetch')}
        onResponse={(a) => Alert.alert('response', JSON.stringify(a))}
      />
    </View>
  )
};

export default LoginScreen;
