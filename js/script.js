var document, window, THREE;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
var light = new THREE.AmbientLight( 0xbadce6 );

var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0xe63f52 } );
var cube = new THREE.Mesh( geometry, material );

scene.add( cube );
scene.add( light );

camera.position.z = 5;

// macro for cubes

// y - to top screen then subsequently += random number
// x - set as 2 * width * random-0.5
// z - amplitude * rand-.5

// color assignment

// hex codes from array at random


var zoomOut = function () {
  camera.position.z += 0.001;
};

cube.rotation.x = 0.25;

var render = function () {
  requestAnimationFrame( render );
  renderer.render( scene, camera );
  cube.rotation.y += 0.01;
  cube.rotation.z += 0.01;
  // zoomOut();
};

render();
