// Code CoordinatesButton Component Here
import React, { Component } from 'react'
class CoordinatesButton extends Component {
    
    handleClick = (e) => {
        const coordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinates)
    }
    
    render(){
        return(
            <div>
                <button onClick={this.handleClick}>Click Me!</button>
            </div>
        )
    }
}

export default CoordinatesButton