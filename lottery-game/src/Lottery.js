import React, { Component } from 'react';
import Ball from './Ball';

const button = {
    backgroundColor: 'white',
    color: 'tomato',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid tomato'
  };


class Lottery extends Component {
    
    static defaultProps = {
        title: 'Lotto',
        maxBalls: 6,
        maxNum: 40
    }

    constructor(props) {
        super(props)
        this.state = {
            nums: Array.from({length: this.props.maxBalls})
        }
        this.handleClick = this.handleClick.bind(this)
    }

    generate() {
        this.setState((currState) => ({
            nums: currState.nums.map((n) => Math.floor(Math.random() * this.props.maxNum))
        }))
    }


    handleClick() {
        this.generate()
    }
    render() {
        return (
            <section>
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map( (n) => (
                        <Ball num={n} />
                        ))}
                </div>
                <button style={button} onClick={this.handleClick}>Günün Şanslı Sayıları !</button>
            </section>
        );
    }
}

export default Lottery;