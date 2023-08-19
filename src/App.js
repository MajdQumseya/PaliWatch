import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import mapboxgl from "mapbox-gl";

// mapboxgl.accessToken = 'sk.eyJ1IjoibWFqZHEiLCJhIjoiY2xsaHVwOGc1MDJqZDNkbnFyaHhrZXZ2cSJ9.upaE8WsunBQC7PSKarXwpQ';
mapboxgl.accessToken =
  "pk.eyJ1IjoibWFqZHEiLCJhIjoiY2t5bzc1ZjdhMjMxbTJ1cW9sNGw2dDZ4ZSJ9.nXaxO-L8qLF90uAunNqYTA";



function App() {
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });
  });
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(35.20);
  const [lat, setLat] = useState(31.70);
  const [zoom, setZoom] = useState(9);

  
  return (
    <div>
      <div className="header">
        <div className="logoContainer">
          <img className="logo" src="images/PW3.png"></img>
          <h3>
            <span className="themeBlue">Pali</span>
            <span className="themeGreen">Watch</span>
          </h3>
        </div>
      </div>
      <div className="body">
      <div ref={mapContainer} className="mapContainer" />
      </div>
    </div>
  );
}

export default App;
