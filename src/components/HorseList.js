import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';

import HorseItem from './HorseItem';

const HorseList = props => {
  const {horses} = props;
  return (
    <FlatList
      data={horses}
      renderItem={({item}) => <HorseItem horse={item} />}
      keyExtractor={(item, index) => index.toString()}
      windowSize={10}
      initialNumToRender={6}
      maxToRenderPerBatch={3}
    />
  );
};

HorseList.propTypes = {
  horses: PropTypes.array.isRequired,
};

export default HorseList;
