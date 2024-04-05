import React, { Component } from 'react';
import "./Hangman.css"
// images
import img0 from './img/0.jpg'
import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'
import img6 from './img/6.jpg'

import { randomWord } from './words';

class Hangman extends Component {

    static defaultProps = {
        images: [ img0, img1, img2, img3, img4, img5, img6
        ],
        maxWrong: 6,
    }

    constructor(props) {
        super(props)
        // Başlangıç durumu tanımla: 
        // nWrong: Yanlış tahmin sayısını tutar, başlangıçta 0 olarak ayarlanır.
        // guessed: Daha önce yapılan tahminleri takip etmek için bir Set kullanılır, başlangıçta boş bir Set olarak ayarlanır.
        // answer: Oyunun cevabını tutar, burada 'tabak' olarak ayarlanmıştır.
        this.state = { nWrong: 0, guessed: new Set(), answer: randomWord() };

        // handleGuess fonksiyonunu bağla: 
        // Bu, oyun bileşeninin içinde kullanılan bir olay işleyicisidir ve bileşen oluşturulduğunda bağlanması gereklidir.
        this.handleGuess = this.handleGuess.bind(this);
        this.restart = this.restart.bind(this);

    }

    handleGuess(e) {
        // Kullanıcı tarafından yapılan tahmini al
        let ltr = e.target.value

        // State'i güncelle
        this.setState((st) => ({
            // Tahmin edilen harfi "guessed" setine ekleyerek daha önce yapılan tahminleri sakla
            guessed: st.guessed.add(ltr),
            // Eğer tahmin edilen harf, cevapta bulunmuyorsa, yanlış tahmin sayısını artır
            nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1)
        }))
    }

    guessedWord() {
        return this.state.answer.split('')
        .map((ltr) => (this.state.guessed.has(ltr) ? ltr : '_'))
    }


    generateButtons() {
        return "abcdefghijklmnoprstuvwxyz".split('').map((ltr) => (
            <button key={ltr} value={ltr} onClick={this.handleGuess} disabled={this.state.guessed.has(ltr)}>{ltr}</button>
        ))
    }

    restart() {
        this.setState({
            nWrong: 0,
            guessed: new Set(),
            answer: randomWord()
        })
    }



    render() {

        let gameOver = this.state.nWrong >= this.props.maxWrong
        const altText = `Tahmin sayacı, ${this.state.nWrong}/${this.props.maxWrong}`
        let isWinner = this.guessedWord().join('') === this.state.answer
        let gameState = this.generateButtons()
        if(gameOver) gameState = "Üzgünüm! Kaybettin."
        if(isWinner) gameState = "Tebrikler! Kazandın."

        return (
            <div className='Hangman'>
                <h1>Adam Asmaca</h1>
                <img src={this.props.images[this.state.nWrong]} alt={altText} />
                <p className='Hangman-wrong'>Tahmin Sayacı: {this.state.nWrong}</p>
                <p className='Hangman-word'>
                    {!gameOver ? this.guessedWord() : this.state.answer}
                </p>
                <p className='Hangman-btns'>
                    {gameState}
                </p>
                <button id='Hangman-restart' onClick={this.restart}>Yeni Kelime Al!</button>
            </div>
        );
    }
}

export default Hangman;