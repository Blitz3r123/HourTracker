import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import {
    Content,
    Card,
    CardItem,
    Text,
    Body,
    List,
    ListItem
} from 'native-base';

export default class HourList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.hours
        };
    }

    displayDate = (number) => {
        let singleDigit = number % 10;

        switch(singleDigit) {
            case 1:
                return number + 'st';
                break;
            case 2:
                return number + 'nd';
                break;
            case 3: 
                return number + 'rd';
                break;
            default:
                return number + 'th';
        }
    }
    
    render(){
        return(
            <Content>
                {
                    this.state.hours.map((month, index) => {
                        return <Card key={index}>
                            <CardItem header style={styles.monthTitleContainer}>
                                <Text style={styles.monthTitle}>{month.month}</Text>
                                <Text style={styles.monthTotal}>{month.total} hours</Text>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    {
                                    month.dates.map((date, index) => {
                                        return <Card key={index} style={{width: '100%'}}>
                                            <CardItem header>
                                                <Text style={styles.dateTitle}>{this.displayDate(date.date)}</Text>
                                            </CardItem>
                                            <CardItem>
                                                <List style={{width: '100%'}}>
                                                    {
                                                        date.times.map((time, index) => {
                                                            return <ListItem style={styles.listItem} key={index}> 
                                                                <Text>
                                                                    {time.startTime} to {time.endTime}
                                                                </Text>
                                                                <Text style={styles.hoursAmount}>
                                                                    {time.endTime - time.startTime} hours
                                                                </Text>
                                                            </ListItem>
                                                        })
                                                    }
                                                    <ListItem style={styles.totalItem} key={'endKey'}>
                                                        <Text>Total</Text>
                                                        <Text>{date.total} hours</Text>
                                                    </ListItem>
                                                </List>
                                            </CardItem>
                                        </Card>
                                    })
                                    }
                                </Body>
                            </CardItem>        
                        </Card>
                    })
                }
            </Content>
        );
    }
}

const styles = StyleSheet.create({
    monthTitleContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    monthTotal: {
        marginBottom: -20
    },  
    monthTitle: {
        fontWeight: '900',
        borderBottomWidth: 1,
        marginBottom: -20,
        fontSize: 20
    },
    dateTitle: {
        marginBottom: -20
    },
    hoursAmount: {
        color: '#888'
    },
    listItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    totalItem: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    footer: {
        
    }
});