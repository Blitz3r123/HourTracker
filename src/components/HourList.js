import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {
    Container,
    Tab,
    Tabs
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
                    {/* <Tab heading="2019">
                        <HourTab data={this.state.data.years[0]} year={this.state.data.years[0].title}/>
                    </Tab> */}
                </Tabs>
            </Container>
        );
    }
}