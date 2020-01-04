import React from 'react';
import {
    Footer,
    Form,
    Item,
    Picker,
    Icon,
    Input,
    DatePicker,
    Toast
} from 'native-base';
import { StyleSheet, TextInput } from 'react-native';
import MonthDropDown from './MonthDropdown';
import DateDropdown from './DateDropdown';

export default class FooterForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            chosenDate: new Date(),
            startValue: 0,
            endValue: 0
        };
        this.setDate = this.setDate.bind(this);
    }

    indexToMonth(monthNumber){
        switch(monthNumber){
            case 0:
                return 'January';
                break;
            case 1:
                return 'February';
                break;
            case 2:
                return 'March';
                break;
            case 3:
                return 'April';
                break;
            case 4:
                return 'May';
                break;
            case 5:
                return 'June';
                break;
            case 6:
                return 'July';
                break;
            case 7:
                return 'August';
                break;
            case 8:
                return 'September';
                break;
            case 9:
                return 'October';
                break;
            case 10:
                return 'November';
                break;
            case 11:
                return 'December';
                break;
        }
    }

    handleSubmit = () => {
        let date = this.state.chosenDate;
        let start = this.state.startValue;
        let end = this.state.endValue;

        let year = date.getFullYear();
        let month = this.indexToMonth(date.getMonth());
        let day = date.getDate();

        this.props.handleSubmit(year, month, day, start, end);

        this.setState({ chosenDate: new Date() });
        this.startInput.clear();
        this.endInput.clear();
    }
    
    setDate(newDate){
        this.setState({ chosenDate: newDate});
        this.startInput.focus();
    }

    render(){
        return(
            <Footer style={{display: 'flex', justifyContent: 'center'}}>
                <Form style={styles.form}>
                    <Item style={{display: 'flex', justifyContent: 'space-evenly'}}>
                        <DatePicker
                        defaultDate={new Date()}
                        locale={"en"}
                        timeZoneOffsetInMinutes={undefined}
                        modalTransparent={false}
                        animationType={"fade"}
                        androidMode={"default"}
                        placeHolderText="Select date"
                        textStyle={{ color: "white" }}
                        placeHolderTextStyle={{ color: "#d3d3d3" }}
                        onDateChange={this.setDate}
                        disabled={false}
                        />
                        <TextInput 
                            ref={input => this.startInput = input}
                            placeholder="Start Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}
                            onChangeText={(text) => this.setState({startValue: text})}
                            returnKeyType={'next'}
                            blurOnSubmit={false}
                            onSubmitEditing={() => {this.endInput.focus();}}
                            style={styles.whiteText}
                            >
                        </TextInput>
                        <TextInput 
                            ref={input => this.endInput = input}
                            placeholder="End Time" 
                            keyboardType={'number-pad'} 
                            placeholderTextColor={'white'}
                            onChangeText={(text) => this.setState({endValue: text})}
                            onEndEditing={this.handleSubmit}
                            style={styles.whiteText}>
                        </TextInput>
                    </Item>
                </Form>
            </Footer>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        width: '100%',
    },
    whiteText: {
        color: 'white'
    }
});