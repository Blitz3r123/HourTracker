import React from 'react';
import { Container } from 'native-base';
import { Toast } from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import AppHeader from '../components/AppHeader';
import HourList from '../components/HourList';
import FooterForm from './../components/FooterForm';

import HourData from './../data/Hours';

export default class MainScreen extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: HourData,
            refresh: 1
        };
    }

    sortByMonths(array){
        var months = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"];
              
        array.sort(function(a, b){
            return months.indexOf(a.title)
                - months.indexOf(b.title);
        });
    }

    handleSubmit = (year, month, day, start, end) => {
        start = parseInt(start);
        end = parseInt(end);

        if(start > end){
            alert("End hour can't be smaller than start hour.");
            return;
        }

        let duration = end - start;

        let newObject = {
            title: year,
            total: duration,
            months: [
                {
                    title: month,
                    total: duration,
                    days: [
                        {
                            title: day,
                            total: duration,
                            hours: [
                                {start: start, end: end}
                            ]
                        }
                    ]
                }
            ]
        };

        // Check year exists
        let yearExists;
        this.state.data.years.map((yearObj, index) => {
            if(yearObj.title == year){
                yearExists = true;
            }
        });

        // Get year index
        let yearIndex;
        if(yearExists){
            this.state.data.years.map((yearObj, index) => {
                if(year == yearObj.title){
                    yearIndex = index;
                }
            });
        }

        // Check month exists
        let monthExists;
        if(yearExists){
            this.state.data.years[yearIndex].months.map(monthObj => {
                if(monthObj.title == month){
                    monthExists = true;
                }
            });
        }

        // Get month index
        let monthIndex;
        if(yearExists && monthExists){
            this.state.data.years[yearIndex].months.map((monthObj, index) => {
                if(monthObj.title == month){
                    monthIndex = index;
                }
            });
        }

        // Check day exists
        let dayExists;
        if(yearExists && monthExists){
            this.state.data.years[yearIndex].months[monthIndex].days.map(dayObj => {
                if(day == dayObj.title){
                    dayExists = true;
                }
            });
        }

        // Get day index
        let dayIndex;
        if(yearExists && monthExists && dayExists){
            this.state.data.years[yearIndex].months[monthIndex].days.map((dayObj, index) => {
                if(dayObj.title == day){
                    dayIndex = index;
                }
            });
        }

        /* 
            1. Year does exist                              WORKING
                1.1 Month does exist                            WORKING
                    1.1.1 Day does exist                                WORKING
                        1.1.1.1 Start + end does exist                      WORKING
                            - Output error
                        1.1.1.2 Start + end does not exist                  WORKING
                            - Get year object
                            - Get month object
                            - Get day object
                            - Create start/end object
                            - Insert into date object
                    1.1.2 Day does not exist                            WORKING
                        - Get year, month object
                        - Create day object
                        - Insert into month object
                1.2 Month does not exist                        WORKING
                    - Get year object
                    - Create month object
                    - Insert into year object
            2. Year does not exist                          WORKING
                - Create year object
                - Insert into data
        */

        if(yearExists){
            // 1. Year does exist
            if(monthExists){
                // 1.1 Month does exist
                if(dayExists){
                    // 1.1.1 Day does exist
                    let dayObject = this.state.data.years[yearIndex].months[monthIndex].days[dayIndex];
                    let hoursExist;

                    dayObject.hours.map(hourObj => {
                        if(hourObj.start == start && hourObj.end == end){
                            hoursExist = true;
                        }
                    });

                    if(hoursExist){
                        // 1.1.1.1 Start and end hours already exist
                        alert('Those hours already exist.');
                    }else{
                        // 1.1.1.2 Hours dont exist
                        let newHourObject = newObject.months[0].days[0].hours[0];

                        let newData = this.state.data;
                        
                        // Update total amounts
                        newData.years[yearIndex].total += duration;
                        newData.years[yearIndex].months[monthIndex].total += duration;
                        newData.years[yearIndex].months[monthIndex].days[dayIndex].total += duration;

                        // Push new object to arrray
                        newData.years[yearIndex].months[monthIndex].days[dayIndex].hours.push(newHourObject);

                        // Sort array
                        newData.years[yearIndex].months[monthIndex].days[dayIndex].hours.sort((a, b) => {
                            return a.start > b.start;
                        });
                    }
                }else{
                    // 1.1.2 Day does not exist
                    let daysArray = this.state.data.years[yearIndex].months[monthIndex].days;
                    let newDayObject = newObject.months[0].days[0];

                    // Set durations
                    this.state.data.years[yearIndex].total += duration;
                    this.state.data.years[yearIndex].months[monthIndex].total += duration;

                    // Push object to array
                    daysArray.push(newDayObject);
                    // Sort array
                    daysArray.sort((a, b) => {
                        return a.title > b.title;
                    });
                }   
            }else{
                // 1.2 Month does not exist
                let monthsArray = this.state.data.years[yearIndex].months;
                let newMonthObject = newObject.months[0];

                // Set durations
                this.state.data.years[yearIndex].total += duration;

                // Push object to array
                monthsArray.push(newMonthObject);
                // Sort array
                this.sortByMonths(monthsArray);
            }
        }else{
            // 2. Year does not exist
            let yearsArray = this.state.data.years;

            yearsArray.push(newObject);
            yearsArray.sort((a, b) => {
                return a.title > b.title;
            });
        }

        Toast.show({
            text: "Added",
            duration: 3000,
            position: 'center',
            type: 'success'
        });
        this.setState({refresh: 1});

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