// "use client";
// import { useEffect } from "react";
// import {
//   MapContainer,
//   TileLayer,
//   Marker,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";

// const LocationButton = () => {
//   function FlyToMyLocation() {
//     const map = useMap();
//     console.log("nav", navigator);
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const userCoords = [
//           position.coords.latitude,
//           position.coords.longitude,
//         ];
//         setCoords(userCoords); // Update state with user coordinates
//         console.log("position:", position);
//         // Now we can use the map reference directly to fly to the user's location
//         map.flyTo(userCoords, map.getZoom());
//       });
//     } else {
//       console.log("Geolocation is not supported by this browser.");
//     }
//     return null;
//   }
//   // useEffect(() => {
//   // FlyToMyLocation();
//   // }, []);

//   return <button onClick={FlyToMyLocation}></button>;
// };

// export default LocationButton;
