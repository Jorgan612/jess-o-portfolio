import "../Content.scss";
import "./Experience.scss";

function Experience() {
    return (
        <div className="experience-section">
            <div className="item">
                <p className="employer">Mapware | Elizabeth, Colorado/Remote </p>
                <p><span className="job-title highlight">Software Engineer:</span> January 2024 - January 2025</p>
                <ul>
                    <li>
                        Worked in the photogrammetry application that processed geotagged images into 2D/3D terrain models.
                    </li>
                    <li>
                        Owned key UI components, enhancing user experience through thoughtful design, leading the implementation of features such as map labeling and contour line adjustment controls.
                    </li>
                    <li>
                        Collaborated and communicated with multiple teams to refine requirements and ensure intuitive UX.

                    </li>
                    <li>
                        Refactored legacy code to improve maintainability and scalability across the front-end architecture.
                    </li>
                    <li>
                        Conducted code reviews and mentored junior engineers, contributing to team growth and best practices.
                    </li>
                </ul>

                <p><span className="job-title highlight">Junior Front-End Software Engineer:</span> November 2022 - January 2024</p>
                <ul>
                    <li>
                        Built responsive, visually engaging UI components using Angular.
                    </li>
                    <li>
                        Maintained high standards of code quality through rigorous testing and attention to detail.
                    </li>
                    <li>
                        Partnered with back-end engineers to integrate APIs and deliver seamless end-to-end user experiences.
                    </li>
                    <li>
                        Participated in agile ceremonies and contributed to sprint planning, retrospectives, and team demos.
                    </li>
                    <li>
                        Actively sought feedback and implemented improvements, leading to consistent delivery of high-quality code and a promotion within 14 months.
                    </li>
                </ul>
                <div className="tech-stack">
                    <span>JavaScript</span>
                    <span>Angular</span>
                    <span>SCSS</span>
                    <span>GitLab CI/CD</span>
                    <span>Agile</span>
                    <span>Cypress</span>
                    <span>Leaflet</span>

                </div>
            </div>

            <div className="item">
                <p className="employer">Mountain View Pain Center | Centennial, Colorado</p>
                <p><span className="job-title highlight">Physical Therapist Assistant:</span> November 2018 - June 2021</p>
                  <ul>
                    <li>
                        Maintained open communication and collaboration with providers in a multidisciplinary pain clinic to ensure positive patient outcomes.

                    </li>
                    <li>
                        Leveraged critical thinking and adaptability to overcome patient-specific challenges.
                    </li>
                    <li>
                        Educated patients on their tailored plan of care and important precautions to accelerate patient outcomes.
                    </li>
                    <li>
                        Performed telehealth visits, effectively achieving patient outcomes in a remote environment.
                    </li>
                    <li>
                        Actively sought feedback and implemented improvements, leading to consistent delivery of high-quality code and a promotion within 14 months.
                    </li>
                </ul>
                <div className="tech-stack">
                    <span>Communication</span>
                    <span>Time Management</span>
                    <span>Flexibility</span>
                    <span>Collaberation</span>
                    <span>Empathy</span>
                </div>
            </div>
        </div>
    )
}

export default Experience;