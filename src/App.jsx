import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import KartaSamochodu from './components/KartaSamochodu.jsx'
import ButtonMsg from './components/ButtonMsg.jsx'

const cytaty = [
  'Dobrze naprawione auto to spokój kierowcy.',
  'Warto dbać o samochód i regularnie go sprawdzać.',
  'Każdy samochód ma coś ciekawego w sobie.',
  'Dobry samochód nie musi być nowy.'
]

function App({ auta }) {
  const [szukaj, ustawSzukaj] = useState('')
  const [motyw, ustawMotyw] = useState('jasny')
  const [imie, ustawImie] = useState(() => localStorage.getItem('portal-uzytkownik') || '')
  const [cytat] = useState(() => cytaty[Math.floor(Math.random() * cytaty.length)])

  const autaFiltr = auta.filter((auto) =>
    auto.nazwa.toLowerCase().includes(szukaj.toLowerCase()),
  )

  function przedstawSie() {
    const wpisane = window.prompt('Jak masz na imię?')

    if (wpisane === null) {
      return
    }

    const noweImie = wpisane.trim()

    if (!noweImie) {
      window.alert('Wpisz swoje imię.')
      return
    }

    localStorage.setItem('portal-uzytkownik', noweImie)
    ustawImie(noweImie)
  }

  function zmienMotyw() {
    ustawMotyw((poprzedni) => (poprzedni === 'jasny' ? 'ciemny' : 'jasny'))
  }

  return (
    <main className={`strona ${motyw}`}>
      <div className="kontener">
        <Header tytul="Mój portal o samochodach" motyw={motyw} onToggle={zmienMotyw} />

        <section className="baner" id="o-portalu">
          <div>
            <p className="maly-tytul">Cześć! Witaj na mojej stronie</p>
            <h1>Świat samochodów</h1>
            <p className="opis-baner">
              Zebrałem tutaj kilka aut, które mi się podobają. Zobacz, które
              będzie najlepsze dla Ciebie.
            </p>
            <ButtonMsg onClick={przedstawSie} />
          </div>
          <div className="rysunek" aria-hidden="true">
            <img src="images/logo-auto-land.jpg" alt="" />
          </div>
        </section>

        {imie && <p className="powitanie">Witaj ponownie, {imie}!</p>}

        <section className="cytat" id="ciekawostka">
          <h2>Ciekawostka dnia</h2>
          <p>{cytat}</p>
        </section>

        <section className="kolekcja" id="auta">
          <div className="kolekcja-naglowek">
            <h2>Samochody</h2>
            <label htmlFor="search">Szukaj samochodu:</label>
            <input
              id="search"
              type="text"
              value={szukaj}
              onChange={(event) => ustawSzukaj(event.target.value)}
              placeholder="np. Kia"
            />
          </div>

          <div className="lista">
            {autaFiltr.length > 0 ? (
              autaFiltr.map((auto) => (
                <KartaSamochodu
                  key={auto.nazwa}
                  auto={auto}
                />
              ))
            ) : (
              <p className="brak">Nie znaleziono takiego samochodu.</p>
            )}
          </div>
        </section>

        <footer className="stopka">Mój mini portal o samochodach</footer>
      </div>
    </main>
  )
}

export default App
