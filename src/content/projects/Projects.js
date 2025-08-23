import '../Content.scss';
import './Projects.scss';
import woLogo from '../../images/wo_logo2.png'; 
import ketchupAll from '../../images/ketchum_all.png';


function Projects() {

    return (
        <>
            <div className='subsection'>Current Project</div>
            <div className='project'>
                <div className='details'>
                    <img src={woLogo} alt='Write On logo'></img>
                    <div>
                        <a className='highlight' href='https://github.com/Jorgan612/write-on' target='_blank'>Write On!</a>
                        <p>Currently under development, this is a passion project to help writers track their writing progress. In includes daily word count tracking, the ability to set goals, and unlock achievements for motivation.</p>
                        <div className='tech-stack'>
                            <span>React</span>
                            <span>SCSS</span>
                            <span>Chart.js</span>
                            <span>Figma</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='subsection'>My Time at Turing</div>
            <div className='project'>
                <div className='details'>
                    <img src={ketchupAll} alt='Gotta Ketchum All! logo' />
                    <div>
                        <a className='highlight' href='https://github.com/Jorgan612/Pokemon-Stretch-' target='_blank'>Gotta Ketchum All!</a>
                        <p>Currently under development, this is a passion project to help writers track their writing progress. In includes daily word count tracking, the ability to set goals, and unlock achievements for motivation.</p>
                        <div className='tech-stack'>
                            <span>React</span>
                            <span>SCSS</span>
                            <span>Chart.js</span>
                            <span>Figma</span>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )

}


export default Projects;