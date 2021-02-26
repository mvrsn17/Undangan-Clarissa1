(function () {
  let mymap = L.map("map-canvas-3", { scrollWheelZoom: false }).setView(
    [-5.163403171980014, 119.43479328250096],
    17
  );

  let marker = L.marker([-5.163403171980014, 119.43479328250096]).addTo(mymap);

  marker.bindPopup("<b>Lokasi Acara</b><br>Gedung Lappo Ase.").openPopup();

  let map = L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoibXVodmFkaGVsIiwiYSI6ImNra3NmbnRvcDEwZHcycG54cjVjN3dsc3MifQ.Ks7-Y5ka2qNO5f3ipAlnZw",
    }
  ).addTo(mymap);
})();
