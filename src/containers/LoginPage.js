import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {fetchData, receiveHorses} from '../actions/api';
import {horses} from '../utils/endpoints';
import {connect} from 'react-redux';
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import {NavigationService} from '../navigation/NavigationService';

export class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = (email, password) => {
    if (email && password) {
      this.props.getHorses(email, password);
    }
  };

  handleEmailText = e => {
    this.setState({
      email: e,
    });
  };

  handlePasswordText = e => {
    this.setState({
      password: e,
    });
  };

  render() {
    const {isLoading, isLoggedIn, error} = this.props.horses;
    if (isLoggedIn) {
      setTimeout(() => {
        NavigationService.navigate('Main');
      }, 100);
    }
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <Image
          style={styles.logo}
          source={require('..//assets/ic_launcher.png')}
        />
        <Text style={styles.fieldTitle}>Email</Text>
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          value={this.state.email}
          onChangeText={e => this.handleEmailText(e)}
        />
        <Text style={styles.fieldTitle}>Password</Text>
        <TextInput
          style={styles.textInput}
          secureTextEntry={true}
          autoCapitalize="none"
          value={this.state.password}
          onChangeText={e => this.handlePasswordText(e)}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() =>
            this.handleSubmit(this.state.email, this.state.password)
          }>
          {isLoading ? (
            <ActivityIndicator color="#ffffff" size="small" />
          ) : (
            <Text style={styles.textButton}>Login</Text>
          )}
        </TouchableOpacity>
        {error ? <Text style={styles.fieldTitle}>{error.message}</Text> : null}
      </View>
    );
  }
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 15,
  },
  textInput: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  },
  fieldTitle: {
    fontSize: 22,
    alignSelf: 'flex-start',
    marginTop: 10,
    color: 'white',
  },
  textButton: {
    fontSize: 22,
    alignSelf: 'center',
    color: 'white',
  },
  button: {
    marginTop: 20,
    backgroundColor: 'red',
    width: '100%',
    padding: 15,
  },
});

LoginPage.propTypes = {
  getHorses: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({horses: state.horses});
const mapDispatchToProps = dispatch => ({
  getHorses: (username, password) =>
    dispatch(fetchData(username, password, horses, receiveHorses)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
