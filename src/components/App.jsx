import Person from "./PersonFolder/Person"
import { CV } from "./cv/CV"
import AboutMe from "./AboutMeFolder/AboutMe"
import Languages from "./LanguagesFolder/Languages";
import Skills from "./SkillsFolder/Skills";
import Volunteer from "./VolunteerFolder/Volunteer";

function App() {
    const { hero, education, experience, languages, habilities, volunteer } = CV;

    return (
        <>
            <Person dataHero={hero}></Person>
            <main>
                <AboutMe dataHero={hero} />
                <Languages dataLanguages={languages} />
                <Skills dataHabilities={habilities} />
                <Volunteer dataVolunteer={volunteer} />
            </main>
        </>
    )
}

export default App
