import type { Clima } from "../App"

type DetallesClimaProp = {
    clima: Clima | null
}

function DetallesClima({ clima }: DetallesClimaProp) {
    if (!clima) return null

    const temp = Math.round(clima.main.temp - 273.15)
    const sensacion = Math.round(clima.main.feels_like - 273.15)
    const descripcion = clima.weather[0].description.charAt(0).toUpperCase() + clima.weather[0].description.slice(1)

    return (
        <div className="weather-details">
            <div className="weather-header">
                <h3>{clima.name}</h3>
            </div>

            <div className="weather-main">
                <div className="weather-temp-section">
                    <div className="weather-temp">{temp}°</div>
                    <div className="weather-description">{descripcion}</div>
                </div>
                <img 
                    src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`}
                    alt="Clima"
                    className="weather-icon"
                />
            </div>

            <div className="weather-details-grid">
                <div className="weather-detail-card">
                    <span className="weather-detail-label">Sensación</span>
                    <div className="weather-detail-value">{sensacion}°</div>
                </div>

                <div className="weather-detail-card">
                    <span className="weather-detail-label">Humedad</span>
                    <div className="weather-detail-value">{clima.main.humidity}%</div>
                </div>

                <div className="weather-detail-card full-width">
                    <span className="weather-detail-label">Viento</span>
                    <div className="weather-detail-value">{clima.wind.speed} m/s</div>
                </div>
            </div>
        </div>
    )
}

export default DetallesClima