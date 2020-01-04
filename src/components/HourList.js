import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {
    Container,
    Tab,
    Tabs,
    Text
} from 'native-base';

import HourTab from './HourTab';

export default class HourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
        };
    }

    render(){

        if(this.state.data.years.length > 0){
            return(
                <Container>
                    <Tabs>
                        {
                            this.state.data.years.map((year, index) => {
                                return <Tab heading={year.title + ''}>
                                    <HourTab data={year} year={year.title} />
                                </Tab>
                            })
                        }
                    </Tabs>
                </Container>
            );
        }else{
            return(
                <Container>
                    <Text style={{textAlign: 'center', width: '80%', marginLeft: '10%', marginTop: '50%', color: '#aaa'}}>Looks like you haven't recorded any hours yet. Why not add some below?</Text>
                </Container>
            );
        }

    }
}