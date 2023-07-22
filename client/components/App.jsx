import React from 'react'
import * as THREE from 'three';

import ThreeScene from './ThreeScene'

const App = () => {
//   let scene = new THREE.Scene();
//   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//   var renderer = new THREE.WebGLRenderer();
//   renderer.setSize( window.innerWidth - 20, window.innerHeight - 20 );
//   document.body.appendChild( renderer.domElement );

//   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
// var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// var cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

  return (
    <>
      <ThreeScene />
    </>
  )
}

export default App
