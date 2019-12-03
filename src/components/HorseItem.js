import React from 'react';
import PropTypes from 'prop-types';
import {Image, StyleSheet, Text, View} from 'react-native';

const HorseItem = props => {
  const {picture, name} = props.horse;
  return (
    <View style={styles.item}>
      <Image style={styles.image} source={{uri: picture}} />
      <View style={styles.itemInner}>
        <Text style={styles.title}>{name}</Text>
        <Image
          style={styles.imageCorner}
          source={require('..//assets/icon_next.png')}
        />
        <View style={styles.divider} />
      </View>
    </View>
  );
};

HorseItem.propTypes = {
  horse: PropTypes.object.isRequired,
};

export const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 8,
    marginBottom: 2,
    backgroundColor: 'black',
  },
  itemInner: {
    flex: 1,
    justifyContent: 'space-between',
  },
  divider: {
    backgroundColor: 'grey',
    height: 2,
    marginTop: 2,
  },
  image: {
    width: 150,
    height: 100,
  },
  imageCorner: {
    width: 40,
    height: 40,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 16,
    marginLeft: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 4,
  },
});

export default HorseItem;
