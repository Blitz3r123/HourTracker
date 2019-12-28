import React from 'react';
import {
    Footer,
    Form,
    Item,
    Picker,
    Icon,
    Input
} from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import MonthDropDown from './MonthDropdown';
import DateDropdown from './DateDropdown';

export default class FooterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            hours: this.props.hours,
            dateValue: '',
            monthValue: '',
            startValue: 0,
            endValue: 0
        };
    }

    getMonthValue = (value) => {
        this.setState({monthValue: value});
    }
    
    getDateValue = (value) => {
        this.setState({dateValue: value});
    }

    handleSubmit = () => {
        let dateValue = this.state.dateValue;
        let monthValue = this.state.monthValue;
        let startTime = parseInt(this.state.startValue);
        let endTime = parseInt(this.state.endValue);

        // Check for empty start/end time values
        if(startTime == 0 || endTime == 0){
            if(startTime == 0){
                alert('You left the start time empty.');
            }else{
                alert('You left the end time empty.');
            }
        }else{
            // Check that start/end time is under 24
            if(startTime > 24 || endTime > 24){
                alert("You can't have a time greater than 24.");
            }else{
                // Check that end is bigger than start
                if(endTime < startTime){
                    alert(endTime + " can't be smaller than " + startTime + ".");
                }else{
                    // All values should be good to go from here
                    this.props.handleSubmit(dateValue, monthValue, startTime, endTime);
                }
            }

        }
    }

    render(){
        return(
            <Footer>
                <Form style={styles.form}>
                    <Item picker style={styles.formContent}>
                        <DateDropdown getDateValue={this.getDateValue}/>
                        <MonthDropDown getMonthValue={this.getMonthValue} startInput={this.startInput}/>
                        <TextInput 
                            ref={input => this.startInput = input}
                            style={{marginRight: 20, color: 'white'}}
                            placeholder="Start Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}
                            onChangeText={(text) => this.setState({startValue: text})}
                            returnKeyType={'next'}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.endInput.focus();}}
                            >
                        </TextInput>
                        <TextInput 
                            style={{marginRight: 20, color: 'white'}}
                            ref={input => this.endInput = input}
                            placeholder="End Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}
                            onChangeText={(text) => this.setState({endValue: text})}
                            onEndEditing={this.handleSubmit}>
                        </TextInput>
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