import '../Content.scss';
import "../experience/Experience.scss";

function Education() {


    return (
        <>
            <div className='item'>
                <p className='employer'>Turing School of Software and Design</p>
                <p><span className='job-title highlight'> ACCET-Accredited Frontend Engineering Certificate:</span> July 2021 - April 2022</p>
                <ul>
                    <li>
                        An intensive 1,500+ hour project-based program focused on frontend architecture, JavaScript/React/TypeScript, TDD, and agile methodologies.
                    </li>
                </ul>

            </div>

            <div className='item'>
                <p className='employer'>Arapahoe Community College</p> 
                <p><span className='job-title highlight'>Physical Therapy Assistant AAS:</span> August 2016 - May 2018</p>
                <ul>
                    <li>
                        Licensed Physical Therapist Assistant (NPTE certified).
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Education;