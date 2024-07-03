import { useState } from "react";
import Education from "./Education";
import Experience from "./Experience";
import "./styleForm.scss";

function Form({ dataEducation, dataExperience }) {
    const [cssVisibilityEd, setCssVisibilityEd] = useState("hidden");
    const [cssVisibilityEx, setCssVisibilityEx] = useState("visibility");

    const handleClick = () => {
        cssVisibilityEd === "visibility" ? setCssVisibilityEd("hidden") : setCssVisibilityEd("visibility");
        cssVisibilityEx === "hidden" ? setCssVisibilityEx("visibility") : setCssVisibilityEx("hidden");
    };

    console.log(`Educación: ${cssVisibilityEd} Experiencia: ${cssVisibilityEx}`);
    return (
        <section>
            <article className={cssVisibilityEd}>
                <button onClick={handleClick} >Prueba education</button>
                <Education dataEducation={dataEducation} />
            </article>
            <article className={cssVisibilityEx}>
                <button onClick={handleClick} >Prueba experience</button>
                <Experience dataExperience={dataExperience} />
            </article>
        </section>
    )
}

export default Form
