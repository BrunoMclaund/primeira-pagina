import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Versionando minha aplicação web</h1>
    <img src="https://t.ctcdn.com.br/kIdaYgY-Z7LnH3oXcNP0xX0h9pg=/640x360/smart/i574949.jpeg" >
  </div>
`

setupCounter(document.querySelector('#counter'))