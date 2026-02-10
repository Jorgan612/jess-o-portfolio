import './Links.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaBook } from "react-icons/fa";

function Links() {

    return (
        <div className='links'>
            <a href='mailto:Jorgan612@gmail.com' target='_blank' rel='noopener noreferrer'>
                <FaEnvelope className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/jessicaorgan/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedin className='icon' />
            </a>
            <a href='https://github.com/Jorgan612' target='_blank' rel='noopener noreferrer'>
                <FaGithub className='icon' />
            </a>
            <a href='https://app.thestorygraph.com/profile/jess_o612' target='_blank' rel='noopener noreferrer'>
                <FaBook className='icon' />
            </a>
        </div>
    );
}

export default Links;