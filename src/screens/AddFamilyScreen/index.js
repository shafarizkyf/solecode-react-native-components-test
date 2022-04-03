import React, { useEffect, useContext, useState } from 'react';
import { View } from 'react-native';
import MyButton from '../../components/MyButton';
import MyTextInput from '../../components/MyTextInput';
import styles from '../../config/styles';
import RootContext from '../../context/RootContext';
import useValidate from '../../hooks/useValidate';
import { addFamilyMember } from '../../routes/api';
import addFamilyFormValidation, { constraint } from '../../validations/addFamilyFormValidation';

const AddFamilyScreen = ({ navigation }) => {
  const { auth } = useContext(RootContext);
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState();

  const validationHooks = useValidate(form, constraint);

  useEffect(() => {
    console.log('validationHooks', validationHooks);
    if (validationHooks) {
      //do something
    }
  }, [validationHooks]);

  const formData = new FormData;
  formData.append('userAccountId', auth?.userId);
  formData.append('placeOfBirth', 'Semarang');
  formData.append('birthDate', '2021-10-05');
  formData.append('relationId', 2);
  formData.append('jobId', 3);
  formData.append('citizenshipCode', 'WNI');
  formData.append('gender', 'laki-laki');
  formData.append('verified', true);

  const onChange = (key, value) => {
    const input = { ...form };
    input[key] = value;
    setForm(input);
    formData.append(key, value)
  };

  const onResponse = (response) => {
    console.log('onResponse', response);
  };

  return (
    <View style={[styles.flex1, styles.p20]}>
      <MyTextInput
        placeholder="Nama Lengkap"
        onChangeText={(value) => onChange('fullName', value)}
        value={form.fullName}
        errorMessage={errors?.fullName}
      />
      <MyTextInput
        placeholder="NIK"
        onChangeText={(value) => onChange('nik', value)}
        value={form.nik}
        errorMessage={errors?.nik}
      />
      <MyButton
        label="Add"
        request={addFamilyMember(formData)}
        validation={() => addFamilyFormValidation(form)}
        onValidationError={setErrors}
        onResponse={onResponse}
      />
    </View>
  );
}

export default AddFamilyScreen;
