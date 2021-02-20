import React, { Component } from 'react'


class StateEvents extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            objeto: "Bola"
        }

        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        
    }

    changeState(){
        this.setState({
            objeto: "Quadrado"
        })
    }

    resetState(){
        this.setState({
            objeto: ""
        })
    }

   
    render(){
        return(
            <>
                <h2>
                    State e Events
                </h2>

                <div>
                    <div>
                        <p>{this.state.objeto}</p>
                    </div>
                    <button type="button" onClick={this.changeState}>OK</button>
                    <button type="button" onClick={this.resetState}>Reset</button>
                         
                </div>
            </>
            
        )
    }
}

export default StateEvents