function Volunteer({ dataVolunteer }) {
    let volunteer = dataVolunteer.map((data) => (
        <li>
            <h3>{data.name}</h3>
            <h4>{data.where}</h4>
            <p>{data.description}</p>
        </li>
    ));
    return (
        <section>
            <h2>Volunteer</h2>
            <ul>{volunteer}</ul>
        </section>
    )
}

export default Volunteer
