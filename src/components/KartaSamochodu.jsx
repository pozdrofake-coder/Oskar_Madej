function KartaSamochodu({ auto }) {
  return (
    <article className="karta">
      <img src={auto.obrazek} alt={auto.nazwa} loading="lazy" />
      <h3>{auto.nazwa}</h3>
      <p>{auto.opis}</p>
      <span className="tag">Samochód</span>
    </article>
  )
}

export default KartaSamochodu
