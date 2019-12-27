import React from 'react';
import {
    Picker,
    Icon
} from 'native-base';

export default class MonthDropDown extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            monthValue: ''     
        };
    }

    handleValueChange = () => {

    }

    render(){
        return(
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Month"
                style={{color: 'white', width: 45}}
                placeholderStyle={{ color: "white" }}
                placeholderIconColor="white"
                selectedValue={this.state.monthValue}
                onValueChange={this.handleValueChange}
            >
                <Picker.Item label="January" value="january" />
                <Picker.Item label="February" value="february" />
                <Picker.Item label="March" value="march" />
                <Picker.Item label="April" value="april" />
                <Picker.Item label="May" value="may" />
                <Picker.Item label="June" value="june" />
                <Picker.Item label="July" value="july" />
                <Picker.Item label="August" value="august" />
                <Picker.Item label="September" value="september" />
                <Picker.Item label="October" value="october" />
                <Picker.Item label="November" value="november" />
                <Picker.Item label="December" value="december" />
            </Picker>
        );
    }
}