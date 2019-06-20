import React from 'react'

const WeatherAlert = (props) => {
    const { alert: {properties: {
        headline
    }}} = props
    return <h1>{headline}</h1>
}

export default WeatherAlert;