import React from 'react';
import './App.css';
import Header from './components/Header';
import Feed from './components/Feed';

function App() {
  return (
      <div className="App">
        <Header />
        <div className='main_body'>
          <Feed>
            {/*Create Field*/}
            {/*Posts*/}
          </Feed>
        </div>
      </div>
  );
}

export default App;
