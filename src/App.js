import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import Menu from './menu/Menu';
import Links from './links/Links';

function App() {
  const [selectedOption, setSelectedOption] = useState('about')


  const select = (option) => {
    console.log("click!", option)
    setSelectedOption(option)
    console.log('selectedOption', selectedOption)
  }



  return (
    <div className="App">
      <div className='left-content'>
        <Menu select={select} selectedOption={selectedOption} />
        <div>
          <header className="App-header">
            <span className='highlight'>Jess</span>ica Organ
          </header>
          <div className='comment'>
            Hello, I’m <span className='highlight'>Jess</span>! I’m a front-end software engineer with a passion to make intuitive user experiences.
          </div>
        </div>
        <Links />
      </div>

      <div className='right-content'>

      </div>
    </div>
  );
}

export default App;
{/*
[ ] Work on link styling
[ ] Create components for right side content 
[ ]   
*/}