var document, window, THREE;

function bricks() {
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
  var cubeColors = [0xe63f52, 0xf36279, 0xfc92a4];
  var numberOfShapes = 200;

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
      shapes[n].rotation.x += 0.01 + 0.01 * n;
      shapes[n].rotation.y += 0.02 + 0.01 * n;
      shapes[n].rotation.z += 0.01 + 0.01 * n;
      shapes[n].position.y -= 0.04 + 0.01 * n;
    }

    // zoomAmount(0.03);
  };

  render();
}

// bricks();

var elBody = document.getElementsByTagName("body");

elBody.addEventListener("click", bricks());
