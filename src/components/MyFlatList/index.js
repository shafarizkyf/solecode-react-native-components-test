import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Request from '../../helpers/Request';

const MyFlatList = ({ fetchUrl, renderItem, keyExtractor }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const response = await Request.backend('GET', fetchUrl);
    setData(response);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={keyExtractor}
      renderItem={renderItem}
    />
  );
};

MyFlatList.defaultProps = {
  fetchUrl: ''
};

export default MyFlatList;