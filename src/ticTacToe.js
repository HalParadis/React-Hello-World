import React from 'react';
import './ticTacToe.css'

const board = [
    'x', null, 'o',
    'o', 'x', null,
    'x', 'o', null
];

const TicTacToe = () => {
    return <div className='tic-tac-toe'>
        <h1>Tic-Tac-Toe</h1>
        <div className='board'>{
            board.map((value, index) => {
                return <div className='cell' key={index}>
                    <span>{value}</span>
                </div>
            })
        }</div>
    </div>
}

export default TicTacToe;