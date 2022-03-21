import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MyButton from '../../components/MyButton';
import styles from '../../config/styles';
import RootContext from '../../context/RootContext';
import useFetchData from '../../hooks/useFetchData';
import { getFamilyMember } from '../../routes/api';

const PersonalInformation = ({ navigation }) => {
  const { auth } = useContext(RootContext);
  const information = useFetchData(getFamilyMember(auth?.userId));

  return (
    <View style={[styles.flex1, styles.p20]}>
      <View style={styles.mb30}>
        <Text>{information?.KepalaRelationName}</Text>
        <Text>{information?.KepalaFullName}</Text>
      </View>
      <View style={styles.mb30}>
        <MyButton
          label="Add Family Member"
          onPress={() => navigation.navigate('AddFamilyScreen')}
        />
      </View>
      <MyButton
        label="Update Profile"
        onPress={() => navigation.navigate('ProfilScreen')}
      />
    </View>
  );
}

export default PersonalInformation;
