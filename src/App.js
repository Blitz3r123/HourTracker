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

export default class App extends React.Component{
    render(){
        return(
            <Root><MainScreen /></Root>
        );
    }
}