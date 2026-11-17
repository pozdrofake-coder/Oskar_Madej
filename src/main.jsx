import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const auta = [
  {
    nazwa: 'Hyundai Elantra',
    opis: 'Biały sedan, który dobrze sprawdza się na co dzień.',
    obrazek: 'images/hyundai-elantra.jpg',
  },
  {
    nazwa: 'Audi A5',
    opis: 'Wygodne Audi o eleganckim wyglądzie.',
    obrazek: 'images/audi.jpg',
  },
  {
    nazwa: 'Supersamochód',
    opis: 'Bardzo szybkie auto ze sportowym wyglądem.',
    obrazek: 'images/supercar.jpg',
  },
  {
    nazwa: 'Alfa Romeo',
    opis: 'Czerwone auto z włoskim charakterem.',
    obrazek: 'images/alfa-romeo.jpg',
  },
  {
    nazwa: 'Kia Rio',
    opis: 'Małe auto, którym łatwo jeździ się po mieście.',
    obrazek: 'images/kia-rio.jpg',
  },
  {
    nazwa: 'Mobicom EV C200',
    opis: 'Mały samochód elektryczny do jazdy po mieście.',
    obrazek: 'images/auto-elektryczne.jpg',
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App auta={auta} />
  </StrictMode>,
)
