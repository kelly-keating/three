import React, { Component } from 'react';
import * as THREE from 'three';

class ThreeScene extends Component{

  componentDidMount(){
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    //ADD SCENE
    this.scene = new THREE.Scene()

    //ADD CAMERA
    this.camera = new THREE.PerspectiveCamera(75,width / height,0.1,1000)
    this.camera.position.z = 4

    //ADD RENDERER
    this.renderer = new THREE.WebGLRenderer({ antialias: true })
    this.renderer.setClearColor('#2C97D4')
    this.renderer.setSize(width, height)
    this.mount.appendChild(this.renderer.domElement)

    //ADD CUBE
    const geometry = new THREE.BoxGeometry(3, 3, 3)
    const material = new THREE.MeshBasicMaterial({ color: '#33B5FF' })
    this.cube = new THREE.Mesh(geometry, material)
    this.scene.add(this.cube)
    this.start()
  }

  componentWillUnmount(){
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start = () => {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }
  
  stop = () => {
    cancelAnimationFrame(this.frameId)
  }

  animate = () => {
  //  this.cube.rotation.x += 0.01
  //  this.cube.rotation.y += 0.05
   this.cube.rotation.z += 0.01

   this.renderScene()
   this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene = () => {
    this.renderer.render(this.scene, this.camera)
  }

  render(){
    return(
      <div
        style={{ width: '97vw', height: '97vh' }}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}
export default ThreeScene