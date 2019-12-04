import {connect} from 'react-redux';
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import HorseList from '../components/HorseList';

// Exporting for testing purposes
export class HorsePage extends Component {
  render() {
    const {horses} = this.props.horses;
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.horseContainer}>
          <Text style={styles.title}>Horses</Text>
          <View style={styles.divider} />
          <HorseList horses={horses} />
        </View>
      </SafeAreaView>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  horseContainer: {
    flex: 1,
  },
  divider: {
    backgroundColor: 'grey',
    height: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    backgroundColor: 'black',
    padding: 15,
    color: 'red',
  },
});

HorsePage.propTypes = {
  horses: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({horses: state.horses});

export default connect(mapStateToProps)(HorsePage);
