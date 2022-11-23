import React from "react"
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import styled from "styled-components"

const MapContainer = styled.section`
  width: 100%;
  height: 400px;
  background-color: "#f1f1f1";
`
const containerStyle = {
  width: "100%",
  height: "400px",
}

const MapView = ({ center }) => {
  const { latitude, longitude } = center
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API,
  })

  if (!isLoaded) return <div>Loading...</div>
  return (
    <MapContainer>
      <GoogleMap
        zoom={10}
        center={{ lat: latitude, lng: longitude }}
        mapContainerStyle={containerStyle}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </MapContainer>
  )
}

export { MapView }
