import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = ({ heading, body }) => {
  return (
    <View style={style.card}>
      <Text style={style.heading}>{heading}</Text>
      <Text style={style.body}>{body}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    marginBottom: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  heading: {
    fontSize: 16,
  },
  body: {
    fontSize: 12
  }
});

export default Card;