import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import AppHeader from '../components/AppHeader';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View>
        <AppHeader />
        <Text style={styles.headerText}>Create Your To-Do List for Today</Text>
        <View
          style={{ flex: 1, backgroundColor: '#caf0f8', flexDirection: 'row' }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '75%',
              borderBottomColor: '#caf0f8',
            }}
            placeholder="1"
          />

          <TextInput
            editable
            numberOfLines={1}
            maxLength={10}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '25%',
              height: '20%',
              borderBottomColor: '#caf0f8',
              marginTop: 70,
            }}
            placeholder="Time"
          />

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: '#0B80A1' }]}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
              color: 'black',
              width: '75%',
            }}
            placeholder="2"
          />

          <TextInput
            editable
            numberOfLines={1}
            maxLength={10}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '25%',
              height: '20%',
              borderBottomColor: 'white',
              marginTop: 70,
            }}
            placeholder="Time"
          />

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: '#0B80A1' }]}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, backgroundColor: '#caf0f8', flexDirection: 'row' }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '75%',
              borderBottomColor: '#caf0f8',
            }}
            placeholder="3"
          />

          <TextInput
            editable
            numberOfLines={1}
            maxLength={10}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '25%',
              height: '20%',
              borderBottomColor: '#caf0f8',
              marginTop: 70,
            }}
            placeholder="Time"
          />

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: '#0B80A1' }]}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: 'white',
              color: 'black',
              width: '75%',
            }}
            placeholder="4"
          />

          <TextInput
            editable
            numberOfLines={1}
            maxLength={10}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '25%',
              height: '20%',
              borderBottomColor: 'white',
              marginTop: 70,
            }}
            placeholder="Time"
          />

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: '#0B80A1' }]}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{ flex: 1, backgroundColor: '#caf0f8', flexDirection: 'row' }}>
          <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '75%',
              borderBottomColor: '#caf0f8',
            }}
            placeholder="5"
          />

          <TextInput
            editable
            numberOfLines={1}
            maxLength={10}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              color: 'black',
              width: '25%',
              height: '20%',
              borderBottomColor: '#caf0f8',
              marginTop: 70,
            }}
            placeholder="Time"
          />

          <TouchableOpacity
            style={[styles.goButton, { backgroundColor: '#0B80A1' }]}>
            <Text style={styles.goButtonText}>Go</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    marginTop: 20,
    marginBottom: 20,
  },

  goButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    width: '25%',
    height: 50,
    marginRight: 10,
  },

  goButtonText: {
    font: 'bubbly',
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },
});
