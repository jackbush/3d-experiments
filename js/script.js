var document, window, THREE;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var light = new THREE.AmbientLight( 0x404040 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );
scene.add( light );

camera.position.z = 3;

var zoomOut = function () {
  camera.position.z += 0.001;
};

cube.rotation.x = 0.25;

var render = function () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  zoomOut();
};

render();
