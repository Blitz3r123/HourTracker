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
    
    handleSubmit = (year, month, day, start, end) => {
        
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