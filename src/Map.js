import React from "react";
import { Map as Leaflet, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "./Contact.css";

function Map({ center, zoom, position }) {
  return (
    <div className="map">
      <Leaflet center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <CircleMarker center={position} color="red" radius={20}>
          <Popup className="popup">
            <h3 className="popup-address">
              4734 West Blvd, <br />
              Columbus OH, 43224
            </h3>
            <p className="popup-phone">555-555-5555</p>
            <p className="popup-open">
              Open Monday to Sunday, <br />{" "}
              <span className="popup-time">9AM to 10PM</span>
            </p>
            <div className="pop-direction">
              <a
                className="popup-direction"
                href="https://www.google.com/maps/dir//40.060322,-83.022926/@40.0637081,-83.1182178,12z"
                target="blank"
              >
                <p className="direction">Directions</p>
              </a>
              <i class="direction-icon fas fa-location-arrow fa-2x"></i>
            </div>
          </Popup>
        </CircleMarker>
      </Leaflet>
    </div>
  );
}

export default Map;
