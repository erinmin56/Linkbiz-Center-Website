let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 36.40696070753804, lng: 10.610578163628631 },
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: { lat: 36.40696070753804, lng: 10.610578163628631 },
    map: map,
  });
}

initMap();

