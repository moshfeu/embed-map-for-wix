import wixWindow from 'wix-window';

$w.onReady(function () {
	wixWindow.getCurrentGeolocation()
		.then( (obj) => {
			let latitude = obj.coords.latitude;             // 32.0971036
			let longitude = obj.coords.longitude;           // 34.774391099999995
			// let timestamp = obj.timestamp;                  // 1495027186984
			// let altitude = obj.coords.altitude;             // null
			// let accuracy = obj.coords.accuracy;             // 29
			// let altAccuracy = obj.coords.altitudeAccuracy;  // null
			// let heading = obj.coords.heading;               // null
			// let speed = obj.coords.speed;                   // null
			$w('#html1').postMessage([latitude, longitude]);
  } )
  .catch( (error) => {
    let errorMsg = error;
  });
});