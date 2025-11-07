import { useEffect, useState, useRef } from 'react';
import './App.scss';

import Menu from '../menu/Menu';
import Links from '../links/Links';
import Content from "../content/Content";


function App() {
  const [selectedOption, setSelectedOption] = useState('About Me');
  const contentRef = useRef(null);

  useEffect(() => {

    contentRef.current.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });

  }, [selectedOption])

  const select = (option) => {
    setSelectedOption(option.name);
  }

  return (
    <div className="App">
      <div className='left-content'>
        <div>
          <header className="App-header">
            <span className='highlight'>Jess</span>ica Organ
          </header>
          <p className='title'>Front-End Software Engineer</p>
        </div>
        <div className='selections'>
          <Menu select={select} selectedOption={selectedOption} />
          <div>
            <Links />
            <div className='footer-note'>
              <p>I built this portfolio using <a href='https://react.dev/' target='_blank'><span className='highlight'>React</span></a> with <a href='https://sass-lang.com/' target='_blank'><span className='highlight'>SCSS</span></a> and deployed with <a href='https://vercel.com/' target='_blank'><span className='highlight'>Vercel</span></a>.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='divider'></div>
      <div className='right-content'>
        <Content selectedOption={selectedOption} ref={contentRef}/>
      </div>
    </div>
  );
}

export default App;