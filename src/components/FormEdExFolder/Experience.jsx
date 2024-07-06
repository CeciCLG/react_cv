function Experience({ dataExperience }) {
    const experience = dataExperience.map((data) => (
        <li>
            <h5>{data.name}</h5>
            <p>{data.date}</p>
            <p>{data.where}</p>
        </li>
    ));

    return (
        <ul>{experience}</ul>
    )
}

export default Experience
