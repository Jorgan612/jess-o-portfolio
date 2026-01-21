import '../Content.scss';
import "../experience/Experience.scss";

function Education() {


    return (
        <>
            <div className='item'>
                <p className='employer'>Turing School of Software and Design</p>
                <p><span className='job-title highlight'>Frontend Development Program:</span> July 2021 - April 2022</p>
                <ul>
                    <li>
                        An intensive, ACCET-accredited program focused on frontend technologies and agile methodologies.
                    </li>
                </ul>

            </div>

            <div className='item'>
                <p className='employer'>Arapahoe Community College</p> 
                <p><span className='job-title highlight'>Physical Therapy Assistant AAS:</span> August 2016 - May 2018</p>
                <ul>
                    <li>
                        A rigorous, 2-year program accredited by CAPTE. License obtained by passing the NPTE, administered by FSBPT. 
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Education;