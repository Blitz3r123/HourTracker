import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';

import MainScreen from './screens/MainScreen';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			hours: [
				{
					month: 'December',
					dates: [
						{
							date: '24',
							times: [
								{
									startTime: 9,
									endTime: 12
								},
								{
									startTime: 10,
									endTime: 13
								}
							],
							total: 6
						},
						{
							date: '25',
							times: [
								{
									startTime: 14,
									endTime: 16
								},
								{
									startTime: 12,
									endTime: 18
								}
							],
							total: 8
						}
					],
					total: 14
				},
				{
					month: 'November',
					dates: [
						{
							date: '24',
							times: [
								{
									startTime: 9,
									endTime: 12
								},
								{
									startTime: 10,
									endTime: 13
								}
							],
							total: 6
						},
						{
							date: '25',
							times: [
								{
									startTime: 14,
									endTime: 16
								},
								{
									startTime: 12,
									endTime: 18
								}
							],
							total: 8
						},
						{
							date: '26',
							times: [
								{
									startTime: 10,
									endTime: 16
								},
								{
									startTime: 10,
									endTime: 18
								}
							],
							total: 14
						}
					],
					total: 28
				}
			]
		};
	}
	
	insertData = async (data) => {
		console.log(data);
	}

    render(){
        return(
            <MainScreen hours={this.state.hours} insertData={this.insertData}/>
        );
    }
}