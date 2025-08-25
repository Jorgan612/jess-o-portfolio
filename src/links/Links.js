import './Links.scss';
// import email from '../images/email_icon.png';

function Links() {

    return (
        <div className='container'>
            <div>
                <a href='mailto:Jorgan612@gmail.com' target='_blank'>
                    {/* <img src={email}/>  */}
                    Contact Me</a>
                <a href='https://www.linkedin.com/in/jessicaorgan/' target='_blank'>LinkedIn</a>
                <a href='https://github.com/Jorgan612' target='_blank'>GitHub</a>
                <a href='https://app.thestorygraph.com/profile/jess_o612' target='_blank'>The StoryGraph</a>
            </div>
        </div>
    );
}

export default Links;