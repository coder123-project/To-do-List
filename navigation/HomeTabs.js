import React, { useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import {NavigationContainer} from "@react-navigation/native"
import AddRecordScreen from '../screens/AddRecordScreen'
import ViewRecordScreen from '../screens/ViewRecordScreen'

const Tab = createMaterialTopTabNavigator()

const HomeTabs = () => {
	const [records, setRecords] = useState([])

	return (
    <NavigationContainer>
		<Tab.Navigator>
			<Tab.Screen name='Add Record'>
				{() => <AddRecordScreen records={records} setRecords={setRecords} />}
			</Tab.Screen>
			<Tab.Screen name='View Record'>
				{() => <ViewRecordScreen records={records} setRecords={setRecords} />}
			</Tab.Screen>
		</Tab.Navigator>
       </NavigationContainer>
	)
}

export default HomeTabs
