import { useState } from 'react';
import './App.scss';

import Menu from '../menu/Menu';
import Links from '../links/Links';
import Content from "../content/Content";

function App() {
  const [selectedOption, setSelectedOption] = useState('About Me')

  const select = (option) => {
    setSelectedOption(option.name)
  }

  return (
    <div className="App">
      <div className='left-content'>
        <div>
          <header className="App-header">
            <span className='highlight'>Jess</span>ica Organ
          </header>
          <p className='title'>Front End Software Engineer</p>
        </div>
        <div className='selections'>
          <Menu select={select} selectedOption={selectedOption} />
          <div>
            <Links />
            <div className='footer-note'>
              <p>I built this portfolio using <span className='highlight'>React</span> with <span className='highlight'>SCSS</span> and deployed with <span className='highlight'>Vercel</span>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className='right-content'>
        <Content selectedOption={selectedOption}/>
      </div>
    </div>
  );
}

export default App;