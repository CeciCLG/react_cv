import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import "./styleForm.scss";

function Form({ dataEducation, dataExperience }) {
    const [cssVisibilityEd, setVisibilityEd] = useState("hidden");
    const [cssVisibilityEx, setVisibilityEx] = useState("visibility");
    const experience = "experience";
    const education = "education";

    const handleClick = (ev) => {
        /* cssVisibilityEd === "visibility" ? setVisibilityEd("hidden") : setVisibilityEd("visibility");
        cssVisibilityEx === "hidden" ? setVisibilityEx("visibility") : setVisibilityEx("hidden"); */
        const type = ev.target.value;
        if (type === "education") {
            setVisibilityEd("visibility");
            setVisibilityEx("hidden");
        } else {
            setVisibilityEd("hidden");
            setVisibilityEx("visibility");
        }
    };

    console.log(`Educación: ${cssVisibilityEd} Experiencia: ${cssVisibilityEx}`);
    return (
        <section>
            <article >
                <button onClick={handleClick} value={education}>Prueba education</button>
                <div className={cssVisibilityEd}>
                    <Education dataEducation={dataEducation} />
                </div>
            </article>
            <article >
                <button onClick={handleClick} value={experience}>Prueba experience</button>
                <div className={cssVisibilityEx}>
                    <Experience dataExperience={dataExperience} />
                </div>
            </article>
        </section>
    )
}

export default Form
