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
            hours: this.props.hours,
            dateValue: '',
            monthValue: '',
            startTime: 0,
            endTime: 0
        };
    }
    
    handleSubmit = (dateValue, monthValue, startTime, endTime) => {
        // this.setState({ endTime: parseInt(end) });
        let dateVal = dateValue;
        let monthVal = monthValue;
        let start = startTime;
        let end = endTime;
        
        console.log(dateVal, monthVal, start, end);
    }

    render(){
        return(
            <Container>
                <AppHeader />
                <HourList hours={this.state.hours}/>
                <FooterForm hours={this.state.hours} handleSubmit={this.handleSubmit}/>
            </Container>
        );
    }
}