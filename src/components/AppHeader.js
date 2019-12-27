import React, { Component } from "react";
import {
    Header,
    Body,
    Title,
    Right
} from 'native-base';

export default class AppHeader extends React.Component{
    render(){
        return(
            <Header>
                <Body>
                    <Title>HourTracker</Title>
                </Body>
                <Right />
            </Header>
        );
    }
}