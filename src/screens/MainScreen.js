import React from 'react';
import { 
    Title, 
    Container, 
    Header, 
    Content, 
    Card, 
    CardItem, 
    Body, 
    Text, 
    List, 
    ListItem, 
    Right, 
    Left,
    Footer,
    Form,  
    Item,
    Picker,
    Icon
} from 'native-base';
import { StyleSheet } from 'react-native';

import FooterForm from './../components/FooterForm';

export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.hours
        };
    }

    UNSAFE_componentWillMount(){
        this.props.insertData('bobby');
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
            <Container>
                <Header>
                    <Body>
                        <Title>HourTracker</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    {
                        this.state.hours.map(month => {
                            // console.log(month);
                            return <Card>
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
                <FooterForm hours={this.state.hours}/>
            </Container>
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