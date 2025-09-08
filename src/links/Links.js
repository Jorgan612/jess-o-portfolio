import './Links.scss';
import { FaEnvelope, FaLinkedin, FaGithub, FaBook } from "react-icons/fa";

function Links() {

    return (
        <div className='links'>
            <a href='mailto:Jorgan612@gmail.com' target='_blank'>
                <FaEnvelope className='icon' />
            </a>
            <a href='https://www.linkedin.com/in/jessicaorgan/' target='_blank'>
                <FaLinkedin className='icon' />
            </a>
            <a href='https://github.com/Jorgan612' target='_blank'>
                <FaGithub className='icon' />
            </a>
            <a href='https://app.thestorygraph.com/profile/jess_o612' target='_blank'>
                <FaBook className='icon' />
            </a>
        </div>
    );
}

export default Links;