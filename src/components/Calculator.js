import React, { useState, useEffect } from 'react';
import { evaluate } from 'mathjs';
import Display from './Display';
import Buttons from './Buttons';
import History from './History';
import Hamburger from './Hamburger';
import '../Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('0');
  const [history, setHistory] = useState([]);
  const [showHistory, setShowHistory] = useState(false);

  useEffect(() => {
    const storedHistory = localStorage.getItem('calculatorHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('calculatorHistory', JSON.stringify(history));
  }, [history]);

  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('0');
    } else if (value === 'CE') {
      const lastOperatorIndex = input.search(/[+\-*/](?!.*[+\-*/])/);
      if (lastOperatorIndex !== -1) {
        setInput(input.slice(0, lastOperatorIndex + 1));
      } else {
        setInput('0');
      }
    } else if (value === '←') {
      if (input.length === 1 || input === '0') {
        setInput('0');
      } else {
        setInput(input.slice(0, -1));
      }
    } else if (value === '=') {
      try {
        const result = evaluate(input);
        setHistory([...history, `${input} = ${result}`]);
        setInput(String(result));
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput((prev) => (prev === '0' ? value : prev + value));
    }
  };

  const clearHistory = () => {
    setHistory([]);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="calculator">
      <Display input={input} />
      <Buttons handleButtonClick={handleButtonClick} />
      <Hamburger toggleHistory={toggleHistory} />
      {showHistory && (
        <History history={history} clearHistory={clearHistory} closeHistory={() => setShowHistory(false)} />
      )}
    </div>
  );
};

export default Calculator;
