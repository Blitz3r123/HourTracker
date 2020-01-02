import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import { Root } from 'native-base';
import 'react-native-gesture-handler';

import MainScreen from './screens/MainScreen';

import Data from './data/Hours.js';

export default class App extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			data: Data
		};
	}

    render(){
        return(
            <Root><MainScreen data={this.state.data} insertData={this.insertData}/></Root>
        );
    }
}