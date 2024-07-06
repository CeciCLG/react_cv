function Education({ dataEducation }) {
    const education = dataEducation.map((data) => (
        <li>
            <h5>{data.name}</h5>
            <p>{data.date}</p>
            <p>{data.where}</p>
        </li>
    ));

    return (
        <ul>{education}</ul>
    )
}

export default Education
