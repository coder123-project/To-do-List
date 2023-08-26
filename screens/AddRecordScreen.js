import React, { useState } from 'react'
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {
	View,
	ScrollView,
	KeyboardAvoidingView,
	StyleSheet,TouchableOpacity,Text
} from 'react-native'
import {
	Headline,
	TextInput,
	HelperText,
	Button,
	IconButton,
	Snackbar
} from 'react-native-paper'

import PushNotification from 'react-native-push-notification';


const AddRecordScreen = ({ records, setRecords }) => {
	const [title, setTitle] = useState('')
	const [value, setValue] = useState('')
	const [isValueHidden, setValueHidden] = useState(true)
	const [isSnackVisible, setSnackVisible] = useState(false)
	const [snackText, setSnackText] = useState('')


   const [alarm, setAlarm] = useState(null);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);



  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  const handleConfirm = (date) => {
    setAlarm(date);
    console.log(date)
    hideDatePicker();
  };

const addTask = () => {
  if (task.trim() === '') return;

  const taskId = Date.now();
  const taskData = { id: taskId, text: task, alarm };

  setTasksList([...tasksList, taskData]);
  setTask('');
  setAlarm(null);

  if (alarm) {
    // Schedule notification
    const notificationId = taskId.toString(); // Use task ID as notification ID
    const alarmTime = alarm.getTime();

    PushNotification.localNotificationSchedule({
      id: notificationId,
      message: task,
      date: new Date(alarmTime),
    });
  }
};


	const handleValueHidden = () => {
		setValueHidden(!isValueHidden)
	}
	const getRandomInt = (min, max) => {
		return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + min
	}
	const handleAddRecord = () => {
		if (title.length > 0 && value.length > 0) {
			const id = new Date().getTime() + getRandomInt(10000, 100000)
			const time = alarm.toLocaleString()

			setRecords([...records, { id, title, value, time }])
			setTitle('')
			setValue('')
			setSnackText('New note added')
			setSnackVisible(true)
         setAlarm(null);


         
		} else {
			setSnackText('Invalid Key/Value')
			setSnackVisible(true)
		}
	}

	return (
		<>
			<ScrollView style={styles.wrapper}>
				<Headline style={styles.title}>Create New Note</Headline>
				<View style={styles.inputWrapper}>
					<TextInput
						style={styles.input}
						label='Title'
						mode='outlined'
						value={title}
						onChangeText={(text) => setTitle(text)}
					/>
			
					<View style={styles.valueWrapper}>
						<TextInput
							style={styles.input}
							label='Note'
							mode='outlined'
							value={value}
							onChangeText={(text) => setValue(text)}
              
					
						/>

					</View>
				</View>

     <TouchableOpacity style={styles.addButton} onPress={showDatePicker}>
          <Text style={styles.addButtonText}>Set Alarm</Text>
        </TouchableOpacity>

      <Text style={styles.alarmText}>{alarm ? alarm.toLocaleString() : 'No alarm set'}</Text>



				<Button
					style={styles.addButton}
					mode='contained'
					onPress={handleAddRecord}
				>
					Add
				</Button>

     <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />


			</ScrollView>
			<Snackbar
				visible={isSnackVisible}
				onDismiss={() => setSnackVisible(false)}
				duration={2000}
			>
				{snackText}
			</Snackbar>
		</>
	)
}

const styles = StyleSheet.create({
	wrapper: {
		margin: 10
	},
	title: {
		fontSize: 30,
		fontWeight: '700',
		marginTop: 10,
		marginBottom: 20
	},
	inputWrapper: {
		marginBottom: 20
	},
	input: {
		marginTop: 15
	},
	valueWrapper: {
		position: 'relative'
	},
	viewButton: {
		position: 'absolute',
		right: 10,
		top: 26,
		zIndex: 9,
		backgroundColor: '#fff',
		borderRadius: 50
	},

    addButton: {
    backgroundColor: 'blue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
    flex: 1,
    marginRight: 10,
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
    alarmText: {
    color: 'green',
    marginRight: 10,
  },
})

export default AddRecordScreen
