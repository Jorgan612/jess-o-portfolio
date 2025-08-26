import About from "./about/About";
import Experience from  "./experience/Experience";
import Projects from "./projects/Projects";
import Education from "./education/Education";

import './Content.scss';
import '../App.scss';

function Content({selectedOption}) {

    return (
        <section>
            <header>
                {selectedOption}
            </header>
            {selectedOption === 'About Me' && <About />}
            {selectedOption === 'Experience' && <Experience />}
            {selectedOption === 'Projects' && <Projects />}
            {selectedOption === 'Education' && <Education />}
        </section>
    )
}

export default Content;