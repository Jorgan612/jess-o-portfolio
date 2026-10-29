import "../Content.scss";
import "./Experience.scss";

function Experience() {
    return (
        <>
            <div className='item'>
                <p className='employer'>Mentors in Tech (MinT) | Elizabeth, Colorado/Remote</p> 
                <p><span className='job-title highlight'>Mentor:</span> November 2025 - November 2026</p>
                <ul>
                    <li>
                        Provided targeted one-on-one technical and career guidance for early-career developers and computer science students transitioning into the software industry.
                    </li>
                    <li>
                        Conducted mock technical interviews, code reviews, and architectural deep dives to foster engineering best practices and industry readiness.
                    </li>
                </ul>
                <div className="skills">
                    <span>Career Coaching</span>
                    <span>Networking</span>
                    <span>Constructive Feedback</span>
                    <span>Technical Interview Preparation</span>
                    <span>Collaberation</span>
                    <span>Communication</span>
                    <span>Resume and Portfolio Review</span>
                    <span>Problem Solving</span>
                </div>
            </div>

            <div className="item">
                <p className="employer">Undreamt Software Solutions | Elizabeth, Colorado/Remote </p>
                <p><span className="job-title highlight">Freelancer:</span> September 2025 - November 2025</p>
                <ul>
                    <li>
                        Architected and deployed tailored GPT and AI workflow automation tools to optimize client operations and increase process efficiency.
                    </li>
                    <li>
                       Partnered directly with stakeholders to gather technical requirements, scope deliverables, and maintain open communication throughout rapid sprint cycles.
                    </li>
                </ul>
                <div className="skills">
                    <span>Odoo</span>
                    <span>n8n</span>
                    <span>Scribe</span>
                    <span>AI</span>
                    <span>Custom GPTs</span>
                    <span>ChatGPT API</span>
                    <span>Collaberation</span>
                    <span>Communication</span>
                    <span>Problem Solving</span>
                </div>
            </div>
            <div className="item">
                <p className="employer">Mapware | Elizabeth, Colorado/Remote </p>
                <p><span className="job-title highlight">Software Engineer:</span> January 2024 - January 2025</p>
                <ul>
                    <li>
                        Co-developed and deployed an adaptive AI/ML asset detection product using computer vision (object detection and segmentation) for a $2M defense contract, automating and identifying endangered species and invasive flora across military installations.
                    </li>
                    <li>
                        Owned core UI modules for photogrammetry terrain modeling tools in Angular, developing key interactive features including custom map labeling and contour line adjustment controls using Leaflet.
                    </li>
                    <li>
                        Refactored legacy frontend codebases to improve component reusability,  state management clarity, and application performance.
                    </li>
                    <li>
                        Led technical code reviews and mentored junior engineers, establishing team standards for maintainable code and UI performance optimization.
                    </li>
                </ul>

                <p><span className="job-title highlight">Junior Front-End Software Engineer:</span> November 2022 - January 2024</p>
                <ul>
                    <li>
                        Engineered and mapped the relationship structure for an Identity and Access Management (IAM) system using Role-Based (RBAC) and Attribute-Based (ABAC) Access Control models, enabling full compliance with CMMC and DoD IL4 standards.
                    </li>
                    <li>
                        Built modular, accessible frontend components in Angular and collaborated with backend teams to establish clean REST API contracts.
                    </li>
                    <li>
                        Active participant in daily standups, sprint planning, backlog grooming, and team demos, consistently hitting velocity targets and earning a promotion within 14 months.
                    </li>
                </ul>
                <div className="skills">
                    <span>JavaScript</span>
                    <span>Angular</span>
                    <span>SCSS</span>
                    <span>Figma</span>
                    <span>Git</span>
                    <span>GitLab CI/CD</span>
                    <span>RESTful API</span>
                    <span>Cypress</span>
                    <span>Leaflet</span>
                    <span>Agile Methodologies</span>
                </div>
            </div>

            <div className="divider"></div>
            <div className="gap-context">Attended Turing School of Software and Design, Frontend Development Program, July 2021 - April 2022</div>
            <div className="divider"></div>

            <div className="item">
                <p className="employer">Mountain View Pain Center | Centennial, Colorado</p>
                <p><span className="job-title highlight">Physical Therapist Assistant:</span> November 2018 - June 2021</p>
                  <ul>
                    <li>
                        Collaborated with multidisciplinary healthcare providers to execute complex treatment plans and optimize patient outcomes.
                    </li>
                    <li>
                        Adapted treatment strategies dynamically to individual patient requirements and conducted effective telehealth consultations in a remote setup.
                    </li>
                </ul>
                <div className="skills">
                    <span>Empathy</span>
                    <span>Flexibility</span>
                    <span>Collaberation</span>
                    <span>Communication</span>
                    <span>Time Management</span>
                    <span>Clinical Documentation</span>
                </div>
            </div>

            <div className="divider"></div>
            <div className="gap-context">Attended Arapahoe Community College, Physical Therapy Assistant AAS, August 2016 - May 2018</div>
            <div className="divider"></div>

            <div className="item">
                <p className="employer">Tyco Integrated Security & ADT | Aurora, Colorado</p>
                <p><span className="job-title highlight">National Data and Download Group:</span> September 2010 - March 2016</p>
                <ul>
                    <li>
                        Led outbound/inbound support teams, delegating critical workflows during live emergency response and maintaining data integrity for high-profile national accounts.
                    </li>
                </ul>
                <div className="skills">
                    <span>Resilience</span>
                    <span>Multitasking</span>
                    <span>Adaptability</span>
                    <span>Communication</span>
                    <span>Time Management</span>
                    <span>Team Coordination</span>
                    <span>Attention to Detail</span>
                    <span>Data Entry Accuracy</span>
                    <span>Conflict Resolution</span>
                    <span>CRM Software Proficiency</span>
                </div>
            </div>
        </>
    )
}

export default Experience;
