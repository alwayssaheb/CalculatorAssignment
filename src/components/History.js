import React from 'react';

const History = ({ history, clearHistory, closeHistory }) => {
  return (
    <div className="history">
      <button className="close-history" onClick={closeHistory}>✖</button>
      <h3>History</h3>
      <div className="history-content">
        {history.map((entry, index) => (
          <p key={index}>{entry}</p>
        ))}
      </div>
      <button className="clear-history" onClick={clearHistory}>Clear History</button>
    </div>
  );
};

export default History;
