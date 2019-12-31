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
                <Picker.Item label="Jan" value="January" />
                <Picker.Item label="Feb" value="February" />
                <Picker.Item label="Mar" value="March" />
                <Picker.Item label="Apr" value="April" />
                <Picker.Item label="May" value="May" />
                <Picker.Item label="Jun" value="June" />
                <Picker.Item label="Jul" value="July" />
                <Picker.Item label="Aug" value="August" />
                <Picker.Item label="Sep" value="September" />
                <Picker.Item label="Oct" value="October" />
                <Picker.Item label="Nov" value="November" />
                <Picker.Item label="Dec" value="December" />
            </Picker>
        );
    }
}