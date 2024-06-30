import Person from "./PersonFolder/Person"
import { CV } from "./cv/CV"
import AboutMe from "./AboutMeFolder/AboutMe"

function App() {
    const { hero, education, experience, languages, habilities, volunteer } = CV;

    return (
        <>
            <Person dataHero={hero}></Person>
            <main>
                <AboutMe dataHero={hero} />

            </main>
        </>
    )
}

export default App
