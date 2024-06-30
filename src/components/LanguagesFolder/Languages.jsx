
function Languages({ dataLanguages }) {
    console.log(dataLanguages);

    return (
        <section>
            <h2>Languages</h2>
            <ul>
                <li>{dataLanguages.language}</li>
                <li>Writing: {dataLanguages.wrlevel}</li>
                <li>Speaking: {dataLanguages.splevel}</li>
            </ul>
        </section>
    )
}

export default Languages
