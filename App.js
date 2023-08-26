import React from 'react';
import { View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import HomeTabs from './navigation/HomeTabs';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

const App = () => {
  return (
    <View>
      <AppContainer />
    </View>
  );
};

var AppNavigator = createSwitchNavigator({
  HomeScreen: HomeScreen,
  HomeTabs: HomeTabs,
});

const AppContainer = createAppContainer(AppNavigator);
export default App;
