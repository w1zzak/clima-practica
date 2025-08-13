import { useState } from "react"
import './App.css'
import BuscarClima from "./components/BuscarClima"
import DetallesClima from "./components/DetallesClima"

export type Clima = {
  name: string
  main: {
    temp: number
    humidity: number
    feels_like: number
  }
  weather: {
    main: string
    description: string
    icon: string
  }[]
  wind: {
    speed: number
  }
}

function App() {
  const [clima, setClima] = useState<Clima | null>(null)
  return (
    <div className="weather-app">
      <h2>App de Clima</h2>
      <BuscarClima setClima={setClima} />
      {clima && <DetallesClima clima={clima} />}
    </div>
  )
}

export default App