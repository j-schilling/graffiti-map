"use client";

// export default function GeoLocation() {
//   function geoFindme() {
//     function success(position) {
//       const latLong = [position.coords.latitude, position.coords.longitude];
//       console.log("latLong", latLong);
//     }
//     function error() {
//       console.log("Unable to retrieve your location");
//     }

//     if (!navigator.geolocation) {
//       console.log("Geolocation is not supported by your browser");
//     } else {
//       console.log("Locating…");
//       navigator.geolocation.getCurrentPosition(success, error);
//     }
//     // return latLong;
//   }
//   geoFindme();

//   return <div>Hello GeoWorld</div>;
// }

//CHAT GPT SOLUTION:

import React, { useState, useEffect } from "react";

export default function GeoLocation() {
  // Initialize latLong state with null or a default value
  const [latLong, setLatLong] = useState(null);

  useEffect(() => {
    function geoFindme() {
      function success(position) {
        const lat = position.coords.latitude;
        const long = position.coords.longitude;
        // Update the state with the new latLong
        setLatLong([lat, long]);
        console.log("latLong", latLong);
      }
      function error() {
        console.log("Unable to retrieve your location");
      }

      if (!navigator.geolocation) {
        console.log("Geolocation is not supported by your browser");
      } else {
        console.log("Locating…");
        navigator.geolocation.getCurrentPosition(success, error);
      }
    }

    // Call geoFindme to update latLong state
    geoFindme();
  }, []);

  // Render latLong or a placeholder if it's not yet set
  return (
    <div>
      Hello GeoWorld
      {latLong ? (
        <p>
          Latitude: {latLong[0]}, Longitude: {latLong[1]}
        </p>
      ) : (
        <p>Locating...</p>
      )}
    </div>
  );
}
