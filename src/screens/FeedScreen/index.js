import React, { useState } from 'react';
import Card from '../../components/Card';
import MyFlatList from '../../components/MyFlatList';
import api from '../../routes/api';

const FeedScreen = () => {
  return (
    <MyFlatList
      fetchUrl={api.POSTS}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => <Card heading={item.title} body={item.body} />}
    />
  )
};

export default FeedScreen;
