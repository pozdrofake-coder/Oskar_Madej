function Header({ tytul, motyw, onToggle }) {
  return (
    <header className="naglowek">
      <a className="marka" href="#o-portalu">
        <img src="images/logo-auto-land.jpg" alt="Logo Auto Land" />
        <span>{tytul}</span>
      </a>
      <nav>
        <a href="#auta">Samochody</a>
        <a href="#ciekawostka">Ciekawostka</a>
      </nav>
      <button className="motyw-button" onClick={onToggle}>
        {motyw === 'ciemny' ? 'Jasny motyw' : 'Ciemny motyw'}
      </button>
    </header>
  )
}

export default Header
