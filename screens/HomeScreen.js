import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View>
        <AppHeader />
        <Image
          source={require('../assets/logo.png')}
          style={{
            width: 200,
            height: 200,
            marginTop: 50,
            alignSelf: 'center',
          }}
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#0B80A1' }]}
          onPress={() => {
             this.props.navigation.navigate('HomeTabs', )
          }}>
          <Text style={styles.buttonText}>Click Here to Begin</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    font: 'bubbly',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
