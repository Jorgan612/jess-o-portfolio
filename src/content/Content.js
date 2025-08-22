import About from "./about/About";
import Experience from  "./experience/Experience";

import './Content.scss';
import '../App.scss';

function Content({selectedOption}) {

    return (
        <section>
            <header>
                {selectedOption}
            </header>
            <div>
                {selectedOption === 'About Me' && <About />}
                {selectedOption === 'Experience' && <Experience />}
            </div>
        </section>
    )
}

export default Content;