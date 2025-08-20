import { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import Menu from './menu/Menu';

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
        <div className='details'>
          <div>
            <a href='' target='_blank'>Contact Me</a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/jessicaorgan/' target='_blank'>LinkedIn</a>
          </div>
          <div>
            <a href='https://github.com/Jorgan612' target='_blank'>GitHub</a>
          </div>
        </div>
      </div>
      <div className='right-content'>

      </div>
    </div>
  );
}

export default App;
