import { useState } from 'react';
import { IconName } from "react-icons/fa";
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
        <div>
          <header className="App-header">
            <span className='highlight'>Jess</span>ica Organ
          </header>
          <h3>Front End Software Engineer</h3>
        </div>
        <div className='selections'>
          <Menu select={select} selectedOption={selectedOption} />
          <Links />
        </div>
        <div className='footer-note'>
          <p>I built this portfolio using <span className='highlight'>React</span> and deployed it with <span className='highlight'>[insert deployment thing here]</span>.</p>
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


{
  /*

    [ ] Make sure all content sections have overflow to enable scrollbar if needed to look the same.
    [ ] Fill out Project section
      [ ] Make whole project clickable with hover styling/cursor indication
    [ ] Fill out Education section
    [ ] Relocate section options to beneath title
    [ ] Make links icons and stick in bottom right corner

  */
}