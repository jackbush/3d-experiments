var document, window, THREE;

// put canvas in the dom
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// create a scene instance
var scene = new THREE.Scene();

// generic camera instance
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.z = 5;

// lighting - currently non-functional
var light = new THREE.AmbientLight( 0xbadce6 );
scene.add( light );

// object parameters
var cubeColors = [0xe63f52, 0xf36279, 0xfc92a4, 0xe74c39, 0xff6d37, 0xfbe446, 0xff5200, 0x00ae8e, 0xff4814, 0xf4436d, 0xcd3363, 0x773dbe, 0x8d9ebd, 0x69a3b9, 0x003595, 0x0047bb, 0x54c9e8, 0x30d9c4, 0x75e1c2, 0x71d54c, 0xe3e836];

var numberOfShapes = 200;

function bricks() {

  var shapes = [];

  for (var n = 0; n < numberOfShapes; n++) {
    // create shapes
    var geometry = new THREE.BoxGeometry( 0.5 * Math.random(), 0.5 * Math.random(), 0.5 * Math.random() );
    var material = new THREE.MeshBasicMaterial( { color: cubeColors[Math.floor(Math.random() * cubeColors.length)]} );
    shapes[n] = new THREE.Mesh( geometry, material );

    // set properties
    shapes[n].castShadow = true;
    shapes[n].geometry.dynamic = true;

    // set initial position
    shapes[n].translateX( 7 * ( Math.random() - 0.5 ) );
    shapes[n].translateZ( 7 * ( Math.random() - 0.5 ) );
    shapes[n].translateY( 20 + 7 * ( Math.random() - 0.5 ) );

    // add to scene
    scene.add( shapes[n] );
  }

  var zoomAmount = function (amount) {
    camera.position.z -= amount;
  };

  var render = function () {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
    for (var n = 0; n < numberOfShapes; n++) {
      shapes[n].rotation.x += 0.01 * Math.random() + 0.01 * n;
      shapes[n].rotation.y += 0.02 * Math.random() + 0.01 * n;
      shapes[n].rotation.z += 0.01 * Math.random() + 0.01 * n;
      shapes[n].position.y -= 0.04 * Math.random() + 0.01 * n;
      shapes[n].position.x -= 0.02 * ( Math.random() - 0.5 );
    }

    // zoomAmount(0.03);
  };

  render();
}

// var elButton = document.getElementsByClassName("trigger");
// console.log(elButton);
// elButton.addEventListener("click", bricks);

document.body.addEventListener("click", bricks);
