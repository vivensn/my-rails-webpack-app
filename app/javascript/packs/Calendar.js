import React from 'react';
import DatePicker from "react-datepicker";

export default class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: new Date()
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render(){
        return (
            <DatePicker 
                selected={this.state.startDate}
                onChange={this.handleChange}
            />
        );
    }
`