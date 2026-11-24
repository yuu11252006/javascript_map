// 秋葉原を中心に地図を表示
const map = L.map('map').setView(
  [35.6984, 139.7731], 16
);

// OpenStreetMapを読み込む
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }
).addTo(map);


// スポットの設定
const spots = [
  {
    name: '秋葉原駅',
    lat: 35.6984,
    lng: 139.7731,
    info: '秋葉原の中心となる駅です。'
  },
  {
    name: '秋葉原ラジオ会館',
    lat: 35.6987,
    lng: 139.7719,
    info: 'アニメやフィギュアのお店が集まる施設です。'
  },
  {
    name: 'ヨドバシAkiba',
    lat: 35.6980,
    lng: 139.7745,
    info: '家電やゲームなどが揃う大型店舗です。'
  },
  {
    name: '神田明神',
    lat: 35.7020,
    lng: 139.7678,
    info: '歴史ある神社です。'
  },
  {
    name: '秋葉原UDX',
    lat: 35.6997,
    lng: 139.7728,
    info: '飲食店やイベントスペースがある施設です。'
  }
];


// ピンと吹き出しを表示
spots.forEach(function(spot) {

  const marker = L.marker([
    spot.lat,
    spot.lng
  ]).addTo(map);

  marker.bindPopup(
    '<b>' + spot.name + '</b><br>' + spot.info
  );

});


// 地図をクリックした位置の緯度・経度を表示
map.on('click', function(e) {

  L.popup()
    .setLatLng(e.latlng)
    .setContent(
      '緯度：' + e.latlng.lat.toFixed(5) +
      '<br>経度：' + e.latlng.lng.toFixed(5)
    )
    .openOn(map);

});


// 秋葉原周辺に円を表示
const circle = L.circle(
  [35.6984, 139.7731],
  {
    color: '#e74c3c',
    fillColor: '#e74c3c',
    fillOpacity: 0.15,
    radius: 500
  }
).addTo(map);

circle.bindPopup('秋葉原駅から半径500mの範囲');


// 多角形を表示
const polygon = L.polygon(
  [
    [35.7010, 139.7700],
    [35.7015, 139.7760],
    [35.6960, 139.7760],
    [35.6960, 139.7700]
  ],
  {
    color: '#3498db',
    fillColor: '#3498db',
    fillOpacity: 0.15
  }
).addTo(map);

polygon.bindPopup('秋葉原周辺エリア');