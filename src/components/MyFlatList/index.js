import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { fetchApi } from '../../helpers/Request';

const MyFlatList = ({ data: predefineData, fetchUrl, dataObject, renderItem, keyExtractor }) => {
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
    const response = await fetchApi(await fetchUrl());
    setData(dataObject ? response[dataObject] : response);
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