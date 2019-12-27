import React from 'react';
import {
    Footer,
    Form,
    Item,
    Picker,
    Icon,
    Input
} from 'native-base';
import { StyleSheet } from 'react-native';
import MonthDropDown from './MonthDropdown';
import DateDropdown from './DateDropdown';

export default class FooterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.hours,
            monthValue: 'Month'
        };
    }

    render(){
        return(
            <Footer>
                <Form style={styles.form}>
                    <Item picker style={styles.formContent}>
                        <DateDropdown />
                        <MonthDropDown />
                        <Input 
                            placeholder="Start Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}>
                        </Input>
                        <Input 
                            placeholder="End Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}>
                        </Input>
                    </Item>
                </Form>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    formContent: {
        borderWidth: 1,
    },
    form: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-evenly'
    }
});