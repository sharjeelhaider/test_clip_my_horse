import {NavigationService} from './NavigationService';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import React, {Component} from 'react';
import LoginPage from '../containers/LoginPage';
import HorsePage from '../containers/HorsePage';

//Switch Navigator used because we don't want our user to go back to login screen
export const AppStartNavigator = createSwitchNavigator(
  {
    Login: LoginPage,
    Main: HorsePage,
  },
  {
    initialRouteName: 'Login',
  },
);

const AppNavigator = createAppContainer(AppStartNavigator);

class Navigation extends Component {
  render() {
    return (
      <AppNavigator ref={r => NavigationService.setTopLevelNavigator(r)} />
    );
  }
}

export default Navigation;
