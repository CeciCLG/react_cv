export default function AboutMe({ dataHero }) {
    const arrayAboutMe = dataHero.aboutMe;

    const dataList = arrayAboutMe.map((data) => (
        <li>{data.info}</li>
    ));

    return (
        <section>
            <h2>About me</h2>
            <ul>{dataList}</ul>
        </section>
    )
}
