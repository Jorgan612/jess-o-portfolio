import '../Content.scss';
import './Projects.scss';
import woLogo from '../../images/wo_logo2.png'; 
import ketchupAll from '../../images/ketchum_all.png';
import overlookHotel from '../../images/overlook_hotel.png';


function Projects() {

    return (
        <>
            <div className='subsection'>Current Project</div>
            <a href='https://github.com/Jorgan612/write-on' target='_blank'>
                <div className='project'>
                    <div className='details'>
                        <img src={woLogo} alt='Write On logo'></img>
                        <div>
                            <a className='highlight' href='https://github.com/Jorgan612/write-on' target='_blank'>Write On!</a>
                            <p>Currently under development, this is a passion project of mine to help writers track their writing progress. In includes daily word count tracking, the ability to set goals, and unlock achievements for motivation.</p>
                            <div className='tech-stack'>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>React Router v7</span>
                                <span>SCSS</span>
                                <span>Chart.js</span>
                                <span>Figma</span>
                                <span>VS Code</span>
                            </div>

                        </div>
                    </div>
                </div>
            </a>
            <div className='subsection'>My Time at Turing</div>
            <a href='https://github.com/Jorgan612/Pokemon-Stretch-' target='_blank'>
                <div className='project'>
                    <div className='details'>
                        <img src={ketchupAll} alt='Gotta Ketchum All! logo' />
                        <div>
                            <p>Gotta Ketchum All! was a group project to practice React. We had a stretch goal to learn TypeScript and End-to-End testing with Cypress as well.</p>
                            <div className='tech-stack'>
                                <span>JavaScript</span>
                                <span>React</span>
                                <span>React Router v6</span>
                                <span>TypeScript</span>
                                <span>SCSS</span>
                                <span>PokeApi</span>
                                <span>Cypress</span>
                                <span>Figma</span>
                                <span>VS Code</span>
                            </div>

                        </div>
                    </div>
                </div>
            </a>
            <a href='https://github.com/Jorgan612/Pokemon-Stretch-' target='_blank'>
            <div className='project'>
                <div className='details'>
                    <img src={overlookHotel} alt='Overlook Hotel logo' />
                    <div>
                        <p>The Overlook Hotel booking app was a solo project that allows you to log in to your profile with a username and password to see your past, current, and future bookings. It also allows you to make new bookings for available rooms within the hotel.</p>
                        <div className='tech-stack'>
                            <span>JavaScript</span>
                            <span>SCSS</span>
                            <span>WebPack</span>
                            <span>Mocha</span>
                            <span>Chai</span>
                            <span>Day.js</span>
                            <span>Atom</span>
                        </div>

                    </div>
                </div>
            </div>
           </a> 
        </>
    )

}


export default Projects;