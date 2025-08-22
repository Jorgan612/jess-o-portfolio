import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import Menu from './menu/Menu';
import Links from './links/Links';
import Content from "./content/Content";

function App() {
  const [selectedOption, setSelectedOption] = useState('About Me')


  const select = (option) => {
    console.log("click!", option)
    setSelectedOption(option.name)
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
          <h3>Front End Software Engineer</h3>
        </div>
        <Links />
        <div className='footer-note'>
          <p>This portfolio was built with <span className='highlight'>React</span> and deployed with <span className='highlight'>[insert deployment thing here]</span>.</p>
        </div>
      </div>
      <div className='vertical-divider'></div>
      <div className='right-content'>
        <Content selectedOption={selectedOption}/>

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