import React, { Component } from 'react'
import "./Dice.css"

class Dice extends Component {
    render() {
        let cls = `Dice fa-solid fa-8x fa-dice-${this.props.face} ${this.props.rolling && "shaking"}`
        return <i className={cls}></i>
    }
}

export default Dice

