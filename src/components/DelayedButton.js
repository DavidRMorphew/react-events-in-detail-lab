// Code DelayedButton Component Here

import React, { Component } from 'react'
class DelayedButton extends Component {
    
    persistEventForDelay = (e) => {
        e.persist()
        setTimeout(() => this.props.onDelayedClick(e), this.props.delay)
    }
    
    render(){
        return(
            <div>
                <button onClick={this.persistEventForDelay}>Click to Delay Me!</button>
            </div>
        )
    }
}

export default DelayedButton