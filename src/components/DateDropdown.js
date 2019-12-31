import React from 'react';
import {
    Picker,
    Icon,
    Text
} from 'native-base';

export default class DateDropdown extends React.Component{
    constructor(props){
        super(props);
        let today = new Date().getDate();
        this.state = {
            dates: [
                1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31
            ],
            dateValue: today
        };
    }

    handleValueChange = (data) => {
        this.props.getDateValue(data);
    }

    render(){
        return(
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Date"
                style={{color: 'white'}}
                placeholderStyle={{ color: "white" }}
                placeholderIconColor="white"
                selectedValue={this.state.dateValue}
                onValueChange={(data) => {
                    this.setState({dateValue: data});
                    this.handleValueChange(data);
                }}
            >
                <Picker.Item label={this.state.dateValue.toString()} value={this.state.dateValue.toString()} />
                {
                    this.state.dates.map((date, index) => {
                        return <Picker.Item key={index} label={date.toString()} value={date.toString()} />
                    })
                }
                {/* <Picker.Item label="December" value="key1" /> */}
            </Picker>
        );
    }
}