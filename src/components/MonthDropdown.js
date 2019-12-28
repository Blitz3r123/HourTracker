import React from 'react';
import {
    Picker,
    Icon
} from 'native-base';

export default class MonthDropDown extends React.Component{
    constructor(props){
        super(props);
        let today = new Date().getMonth();

        switch(today){
            case 0:
                today = 'Jan';
                break;
            case 1:
                today = 'Feb';
                break;
            case 2:
                today = 'Mar';
                break;
            case 3:
                today = 'Apr';
                break;
            case 4:
                today = 'May';
                break;
            case 5:
                today = 'Jun';
                break;
            case 6:
                today = 'Jul';
                break;
            case 7:
                today = 'Aug';
                break;
            case 8:
                today = 'Sep';
                break;
            case 9:
                today = 'Oct';
                break;
            case 10:
                today = 'Nov';
                break;
            case 11:
                today = 'Dec';
                break;
        }

        this.handleValueChange(today);

        this.state = {
            monthValue: today
        };
    }

    handleValueChange = (value) => {
        this.props.getMonthValue(value);
    }

    render(){
        return(
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Month"
                style={{color: 'white'}}
                placeholderStyle={{ color: "white" }}
                placeholderIconColor="white"
                selectedValue={this.state.monthValue}
                onValueChange={(data) => {
                    this.setState({monthValue: data});
                    this.handleValueChange(data);
                    this.props.startInput.focus();
                }}
            >
                <Picker.Item label={this.state.monthValue.toString()} value={this.state.monthValue.toString()} />
                <Picker.Item label="Jan" value="jan" />
                <Picker.Item label="Feb" value="feb" />
                <Picker.Item label="Mar" value="mar" />
                <Picker.Item label="Apr" value="apr" />
                <Picker.Item label="May" value="may" />
                <Picker.Item label="Jun" value="jun" />
                <Picker.Item label="Jul" value="jul" />
                <Picker.Item label="Aug" value="aug" />
                <Picker.Item label="Sep" value="sep" />
                <Picker.Item label="Oct" value="oct" />
                <Picker.Item label="Nov" value="nov" />
                <Picker.Item label="Dec" value="dec" />
            </Picker>
        );
    }
}