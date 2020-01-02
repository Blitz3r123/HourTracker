import React from 'react';
import {
    Content,
    Card,
    CardItem,
    Text,
    List,
    ListItem,
    View
} from 'native-base';

export default class HourTab extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: this.props.data
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

    displayDay(year, month, day){
        let theDate = new Date(year, month-1, day-1);
        return this.getWeekDay(theDate.getDay());
    }

    getWeekDay(dayNumber){
        switch(dayNumber){
            case 0:
                return 'Monday';
                break;
            case 1: 
                return 'Tuesday';
                break;
            case 2:
                return 'Wednesday';
                break;
            case 3:
                return 'Thursday';
                break;
            case 4:
                return 'Friday';
                break;
            case 5:
                return 'Saturday';
                break;
            case 6:
                return 'Sunday';
                break;
        }
    }

    monthToIndex(monthName){
        switch(monthName){
            case 'January':
                return 0;
                break;
            case 'February':
                return 1;
                break;
            case 'March':
                return 2;
                break;
            case 'April':
                return 3;
                break;
            case 'May':
                return 4;
                break;
            case 'June':
                return 5;
                break;
            case 'July':
                return 6;
                break;
            case 'August':
                return 7;
                break;
            case 'September':
                return 8;
                break;
            case 'October':
                return 9;
                break;
            case 'November':
                return 10;
                break;
            case 'December':
                return 11;
                break;
        }
    }

    render(){
        return(
            <Content>
                {
                    this.state.data.months.map(month => {
                        return <Card>
                            <CardItem header style={{display: 'flex', justifyContent: 'space-between'}}>
                                <Text style={{fontSize: 20}}>{month.title}</Text>
                                <Text>{month.total} hours</Text>
                            </CardItem>
                            {
                                month.days.map((day, index) => {
                                    return <View><CardItem key={index} style={{display: 'flex', justifyContent: 'space-between'}}>
                                        <Text>{this.displayDay(this.props.year, this.monthToIndex(month.title) + 1, day.title).slice(0, 3)} {this.displayDate(day.title)}</Text>
                                        <Text style={{color: '#888'}}>{day.total} hours</Text>
                                    </CardItem>
                                    {
                                        day.hours.map(hour => {
                                            return <CardItem>
                                                <List style={{width: '100%'}}>
                                                    <ListItem style={{display: 'flex', justifyContent: 'space-between'}}>
                                                        <Text>{hour.start}:00 to {hour.end}:00</Text>
                                                        <Text style={{color: '#888'}}>{hour.end - hour.start} hours</Text>
                                                    </ListItem>
                                                </List>
                                            </CardItem>
                                        })
                                    }
                                    </View>
                                })
                            }
                        </Card>
                    })
                }
            </Content>
        );
    }
}