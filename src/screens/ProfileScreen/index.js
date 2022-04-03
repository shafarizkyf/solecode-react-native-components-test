import React, { useContext, useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import RootContext from '../../context/RootContext';
import { updateProfile } from '../../routes/api';

const ProfilScreen = ({ navigation }) => {
  const { auth } = useContext(RootContext);
  const [form, setForm] = useState(auth);

  const onChange = (key, value) => {
    const input = { ...form };
    input[key] = value;
    setForm(input);
  };

  const onResponse = (response) => {
    console.log('onResponse', response);
    if (response?.result === 1) {
      Alert.alert('Berhasil', 'Berhasil memperbarui data');
    }
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <MyTextInput
        placeholder="Nama Lengkap"
        onChangeText={(value) => onChange('customerName', value)}
        value={form.customerName}
      />
      <MyTextInput
        placeholder="Alamat Email"
        onChangeText={(value) => onChange('customerEmail', value)}
        value={form.customerEmail}
        keyboardType="email-address"
      />
      <MyTextInput
        placeholder="No. Telepon"
        onChangeText={(value) => onChange('customerContact', value)}
        value={form.customerContact}
        keyboardType="number-pad"
      />
      <MyButton
        label="Update"
        request={updateProfile({
          Contact: form.customerContact,
          Email: form.customerEmail,
          FullName: form.customerName,
          UserId: form.userId
        })}
        onStartApiCall={() => console.log('onStartApiCall')}
        onEndApiCall={() => console.log('onEndApiCall')}
        onResponse={onResponse}
      />
    </View>
  );
};

export default ProfilScreen;
