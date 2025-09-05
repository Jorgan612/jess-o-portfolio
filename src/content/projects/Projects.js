import '../Content.scss';
import './Projects.scss';
import woLogo from '../../images/wo_logo2.png'; 
import ketchupAll from '../../images/ketchum_all.png';
import overlookHotel from '../../images/overlook_hotel.png';
import worthWild from '../../images/worth_wild.png';


function Projects() {

    return (
        <>
            <div className='subsection'>Current Project</div>
            <a href='https://github.com/Jorgan612/write-on' target='_blank'>
                <div className='project'>
                    <div className='details'>
                        <img src={woLogo} alt='Write On logo'></img>
                        <div>
                            <p>Currently under development, this is a passion project of mine to help writers track their writing progress. It will include daily word count tracking with visual representation of their progress in the form of graphs, the ability to set goals, and unlock achievements for motivation.</p>
                            <div className='skills'>
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
            <a href='https://github.com/Worth-Wild' target='_blank'>
                <div className='project'>
                    <div className='details'>
                        <img src={worthWild} alt='Worth Wild' />
                        <div>
                            <p>
                                I pitched this app as a capstone project during the final mod of the program. It was selected, leading to a team of eight developers, myself included, building both the front and back ends of the application. It is designed to help users discover critically imperiled species, with features like dynamic searching, additional species details, and favoriting to track conservation status.
                            </p>
                            <div className='skills'>
                                <span>JavaScript</span>
                                <span>Vue.js</span>
                                <span>Heroku</span>
                                <span>Custom API</span>
                                <span>CircleCi</span>
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
                        <img src={ketchupAll} alt='Gotta Ketchum All! logo' />
                        <div>
                            <p>Gotta Ketchum All! was a group project created with React. Notable features include favoriting pokemon and dynamic search filtering. Our stretch goal was learning TypeScript, and testing consisted of end-to-end testing with Cypress.</p>
                            <div className='skills'>
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
                            <div className='skills'>
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