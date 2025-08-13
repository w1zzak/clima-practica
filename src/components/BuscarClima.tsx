import React, { useState, type Dispatch, type SetStateAction } from "react"
import type { Clima } from "../App"

type BuscarClimaProp = {
    setClima: Dispatch<SetStateAction<Clima | null>>
}

const api_key = "ddeb111b2c73ea9b105484fd83d01f42"

function BuscarClima({ setClima }: BuscarClimaProp) {
    const [busqueda, setBusqueda] = useState("")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if(busqueda.trim() === "") {
            alert('Nombre invalido')
            return
        }

        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${busqueda}&appid=${api_key}`)
            const data = await res.json()

            const clima: Clima = data
            setClima(clima)
        } catch (error) {
            console.log('Error', error)
        }
    }
  return (
    <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
            placeholder="Buscar ciudad"
        />
        <button type="submit">Buscar</button>
    </form>
  )
}

export default BuscarClima