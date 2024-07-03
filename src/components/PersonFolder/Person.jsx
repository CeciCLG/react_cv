
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
          <li key="1person">🗺️{city}</li>
          <li key="2person">📅{birthday}</li>
          <li key="3person">✉️{email}</li>
          <li key="4person">📱{phoneNum}</li>
          <li key="5person"><a href={gitContact}>💾 gitHub</a></li>
        </ul>
      </address>
    </header>
  )
}

export default Person
