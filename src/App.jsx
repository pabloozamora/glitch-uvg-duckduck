import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { MessageSquare } from './components/MessageSquare/MessageSquare'

function App() {
  const title1 = "Extensión de Navegador Privada"
  const description1 = "Navega como siempre y nosotros nos encargamos del resto. Te ofrecemos buscador, bloqueador de rastreadores y mejora de encriptación todo en una descarga, para los"
  const description2 = "Busca de forma privada con nuestra app o extensión, añade búsqueda web privada a tu navegador preferido o busca en"
  const title2 = "Motor de Búsqueda Privada"
  return (
    <div className="App">
      <MessageSquare title = {title1} description={description1} link="https://duckduckgo.com/app" linkText="principales navegadores."/>
      <MessageSquare title = {title2} description={description2} link="https://duckduckgo.com/" linkText="duckduckgo.com."/>
    </div>
  )
}

export default App
