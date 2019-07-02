# embed-map-for-wix
Use geolocation within an iframe which embeded in wix site

## How to use?

Add this snippet to your site

```javascript
window.addEventListener("message", receiveMessage, false);

function receiveMessage(event) {
  if (!event.origin.includes(your_website_domain || 'wix')) {
    return; 
  }
  const location = event.data; // [latitude, longitude]
  setMapCenter(location);
}
```

In your wix site add an `iframe` component ([how?](https://support.wix.com/en/article/embedding-an-external-site-3240166)], grab its `id`
and use [corvid](https://support.wix.com/en/article/about-corvid-by-wix#to-enable-corvid-on-your-site) to add the follow code to your wix website:

```javascript
import wixWindow from 'wix-window';

$w.onReady(function () {
	wixWindow.getCurrentGeolocation()
		.then( (obj) => {
			let latitude = obj.coords.latitude;             // 32.0971036
			let longitude = obj.coords.longitude;           // 34.774391099999995
			$w(`#{the_iframe_component_id}`).postMessage([latitude, longitude]);
  } )
  .catch( (error) => {
    let errorMsg = error;
  });
});
```
If you didn't add any `embed a site` component or `html component` to the page, the `id` will be probably `html1` (don't forget the `#` before the id)

-----------------------------------------
In this example I used [leafletjs](https://leafletjs.com) but it should work for every maps library
