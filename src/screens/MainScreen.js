import React from 'react';
import { 
    Title, 
    Container, 
    Body, 
    Right, 
} from 'native-base';

import AppHeader from '../components/AppHeader';
import HourList from '../components/HourList';
import FooterForm from './../components/FooterForm';

export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.hours
        };
    }

    UNSAFE_componentWillMount(){
        // this.props.insertData('bobby');
    }

    render(){
        return(
            <Container>
                <AppHeader />
                <HourList hours={this.state.hours}/>
                <FooterForm hours={this.state.hours}/>
            </Container>
        );
    }
}