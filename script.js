// JavaScript
console.log('Hello world!');

const map = L.map('map').setView([35.1861390003906, 136.94733552333128],12);

/*L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);*/

L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html" target="_blank">国土地理院</a>',}).addTo(map);


//アイコン
/*const pinkIcon = L.icon({
    iconUrl: 'images/ico_pink.png',
    shadowUrl: 'images/ico_shadow.png',
  
  iconSize:     [40, 40], // size of the icon
  shadowSize:   [40, 40], // size of the shadow
  iconAnchor:   [20, 40], // point of the icon which will correspond to marker's location
  shadowAnchor: [20, 40],  // the same for the shadow
  popupAnchor:  [0, -42] // point from which the popup should open relative to the iconAnchor
  });*/

//複数アイコンをまとめて定義
const circleIcon = L.Icon.extend({
    options: {
      shadowUrl: 'images/ico_shadow.png',
      iconSize: [40, 40],
      shadowSize: [40, 40],
      iconAnchor: [20, 40],
      shadowAnchor: [20, 40],
      popupAnchor: [0, -42]
    }
  });
  
  const blueIcon = new circleIcon({ iconUrl: 'images/ico_blue.png' }),
    pinkIcon = new circleIcon({ iconUrl: 'images/ico_pink.png' });
  
  L.marker([35.16047074606999, 136.97095217160486], { icon: blueIcon }).addTo(map).bindPopup('東山公園<br><img src="images/img01.png" alt="img">').openPopup();
  L.marker([35.1861390003906, 136.94733552333128], { icon: pinkIcon }).addTo(map).bindPopup('バンデリドーム');

  const circle = L.circle([35.16047074606999, 136.97095217160486], {
    color: 'deepskyblue', //円の輪郭線の色
    fillColor: '#e6e6fa', //円の塗りつぶしの色
    fillOpacity: 0.6, //塗りつぶしの不透明度
    radius: 5000 //半径、メートルで指定
  }).addTo(map);

  circle.bindPopup("半径5km圏内です");

  // 多角形の表示
const polygon = L.polygon([
    [35.20336333628767, 136.92933167408785],
    [35.19146476582559, 136.93606300832224],
    [35.20558681024936, 136.95324939360148]
  ], {
    color: 'deeppink',
    fillColor: '#e6e6fa',
    fillOpacity: 0.6
  }).addTo(map);