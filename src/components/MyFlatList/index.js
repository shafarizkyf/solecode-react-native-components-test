import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import Request from '../../helpers/Request';

const MyFlatList = ({ data: predefineData , fetchUrl, renderItem, keyExtractor }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (fetchUrl) {
      fetch();
    }
  }, []);

  useEffect(() => {
    setData(predefineData);
  }, [predefineData]);

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
  fetchUrl: '',
  predefineData: []
};

export default MyFlatList;