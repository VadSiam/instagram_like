import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

import MainPage from '../../components/main-page';
import ProfilePage from '../../components/profile-page';
import LoginLogo from './header-decore';

const AppNavigator = ({}) => {
    return <OnBoarding />;
};

export default AppNavigator;

export const OnBoarding = createStackNavigator({
    main: {
        screen: MainPage,
        navigationOptions: ({ navigation }) => ({
            header: <LoginLogo onPress={() => navigation.navigate('profile')}  />,
            ...headerView
        })
    },
    profile: {
        screen: ProfilePage,
        navigationOptions: ({ navigation }) => ({
            header: <LoginLogo goBack={() => navigation.navigate('main')}/>,
            ...headerView
        })
    }
});

const styles = StyleSheet.create({
headerTitleStyle: {
    flex: 6,
    padding: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  headerStyle: {
    marginTop: 20,
    backgroundColor: '#ffffff',
    shadowColor: '#ffffff'
  }
});

const headerView = {
    headerTitleStyle: styles.headerTitleStyle,
    headerStyle: styles.headerStyle
};