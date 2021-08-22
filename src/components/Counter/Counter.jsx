import React, { useState } from 'react';

import "./counter.css";

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [input, setInput] = useState(1);

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleAdd = () => {
        setCounter(counter + parseInt(input));
    };

    const handleSubtract = () => {
        setCounter(counter - parseInt(input));
    };

    return (
        <div>
            <h1 data-testid="header">My Counter</h1>
            <h2 data-testid="counter" className={`${counter >= 100 ? "green" : ""}${counter <= -100 ? "red" : ""}`}>{counter}</h2>
            <div>
                <button onClick={() => handleSubtract()} data-testid="subtract-button">-</button>
                <input data-testid="input" type="number" value={input} onChange={(e) => handleInput(e)} />
                <button data-testid="add-button" onClick={() => handleAdd()}>+</button>
            </div>
        </div>
    );
};

export default Counter;