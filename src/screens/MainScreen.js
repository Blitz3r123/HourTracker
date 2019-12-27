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
import HourList from '../components/HourList';

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

    

    render(){
        return(
            <Container>
                <Header>
                    <Body>
                        <Title>HourTracker</Title>
                    </Body>
                    <Right />
                </Header>
                <HourList hours={this.state.hours}/>
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