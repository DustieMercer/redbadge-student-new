import React, { Component } from 'react';

class StateExample extends Component{

    constructor(props) {
        super(props);
        this.state = {currentTemp: "78", location: 'Indiana'}
    }

    handleClick = ()=> {
        this.setState({currentTemp: '48'})
    }

    render () {
        return <div>Hello the current temp is {this.state.currentTemp} -in {""} {this.state.location}
        <button onClick={this.handleClick}>Click Me to Change Temp</button>
        </div>
    }
}
export default StateExample;