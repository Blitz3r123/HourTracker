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
            data: this.props.data
        };

    }
    
    handleSubmit = (dateValue, monthValue, startTime, endTime) => {
        // this.setState({ endTime: parseInt(end) });
        let dateVal = dateValue;
        let monthVal = monthValue;
        let start = startTime;
        let end = endTime;
        
        // console.log(monthVal);
    }

    render(){
        return(
            <Container>
                <AppHeader />
                <HourList data={this.state.data}/>
                <FooterForm data={this.state.data} handleSubmit={this.handleSubmit}/>
            </Container>
        );
    }
}