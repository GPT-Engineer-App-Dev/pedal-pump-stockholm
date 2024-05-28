import React from "react";
import { Container, Text, VStack } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Custom icon for bike pump stations
const bikePumpIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [25, 25],
  iconAnchor: [12, 25],
  popupAnchor: [0, -25],
});

const bikePumpStations = [
  { id: 1, name: "Pump Station 1", position: [59.3293, 18.0686] },
  { id: 2, name: "Pump Station 2", position: [59.3326, 18.0649] },
  { id: 3, name: "Pump Station 3", position: [59.334, 18.07] },
  // Add more stations as needed
];

const Index = () => {
  return (
    <Container centerContent height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl">Bike Pump Stations in Stockholm</Text>
        <MapContainer center={[59.3293, 18.0686]} zoom={13} style={{ height: "100vh", width: "100vw" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' />
          {bikePumpStations.map((station) => (
            <Marker key={station.id} position={station.position} icon={bikePumpIcon}>
              <Popup>{station.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </VStack>
    </Container>
  );
};

export default Index;
