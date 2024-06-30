export default function AboutMe({ dataHero }) {
    const arrayAboutMe = dataHero.aboutMe;

    let dataList = arrayAboutMe.map((data) => (
        <li>{data.info}</li>
    ));

    return (
        <section>
            <h2>About me</h2>
            <ul>{dataList}</ul>
        </section>
    )
}
