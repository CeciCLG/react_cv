function Skills({ dataHabilities }) {
    const habilities = dataHabilities.map((hability) => (
        <li>🔧{hability}</li>
    ))

    return (
        <section>
            <h2>Skills</h2>
            <ul>{habilities}</ul>
        </section>
    )
}

export default Skills
