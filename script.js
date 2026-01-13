// 2D Map
const map2d = L.map('map2d').setView([51.505, -0.09], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map2d);
let rooms = [];

function addRoom() {
    const room = L.rectangle([[51.5, -0.1], [51.51, -0.08]], {color: 'blue'}).addTo(map2d).bindPopup('New Room');
    rooms.push(room);
}

function export2D() {
    alert('Exporting to PDF... (Feature simulated)');
}

// 3D Model
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 400);
document.getElementById('map3d').appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0x00ff00});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 5;

function changeMaterial() {
    cube.material.color.setHex(Math.random() * 0xffffff);
}

function vrPreview() {
    alert('VR Preview activated! (Use VR headset for full experience)');
}

function applyCustom() {
    const color = document.getElementById('colorPicker').value;
    cube.material.color.set(color);
}

function loadTemplate(type) {
    alert(`Loading ${type} template...`);
    // Simulate loading
}

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

// Eco Calculator
document.getElementById('ecoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const size = parseInt(document.getElementById('size').value);
    const impact = size * 0.05;
    document.getElementById('ecoResult').innerText = `Eco-Score: ${100 - impact}%. Great for sustainability!`;
    document.getElementById('ecoResult').style.display = 'block';
});

function scrollToTools() {
    document.getElementById('tools').scrollIntoView({ behavior: 'smooth' });
}