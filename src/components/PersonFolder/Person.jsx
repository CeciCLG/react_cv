
function Person({ dataHero }) {
  const img = dataHero.image;
  const surname = dataHero.adress;
  const name = dataHero.name;
  const city = dataHero.city;
  const birthday = dataHero.birthDate;
  const email = dataHero.email;
  const phoneNum = dataHero.phone;
  const gitContact = dataHero.gitHub;

  return (
    <header>
      <figure>
        <img src={img} alt={surname} />
      </figure>
      <h1>{name} {surname}</h1>
      <address>
        <ul>
          <li>🗺️{city}</li>
          <li>📅{birthday}</li>
          <li>✉️{email}</li>
          <li>📱{phoneNum}</li>
          <li><a href={gitContact}>💾 gitHub</a></li>
        </ul>
      </address>
    </header>
  )
}

export default Person
