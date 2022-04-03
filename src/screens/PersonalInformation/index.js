import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import MyButton from '../../components/MyButton';
import MyFlatList from '../../components/MyFlatList';
import styles from '../../config/styles';
import RootContext from '../../context/RootContext';
import useApiCall from '../../hooks/useApiCall';
import { getFamilyMember } from '../../routes/api';

const PersonalInformation = ({ navigation }) => {
  const { auth } = useContext(RootContext);
  const information = useApiCall(getFamilyMember(auth?.userId));

  return (
    <View style={[styles.flex1, styles.p20]}>
      <View style={styles.mb30}>
        <Text>{information?.KepalaRelationName}</Text>
        <Text>{information?.KepalaFullName}</Text>
      </View>

      <MyFlatList
        fetchUrl={() => getFamilyMember(auth?.userId)}
        dataObject="Anggota"
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text>{item.fullName}</Text>
        )}
      />

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
