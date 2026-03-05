const loader = new THREE.GLTFLoader();
loader.load('bouquet/scene.gltf', function(gltf) {
  const bouquet = gltf.scene;
  bouquet.scale.set(2,2,2);   // adjust size
  bouquet.position.set(0,-1,0); // adjust position
  scene.add(bouquet);

  // click event to open wishes page
  renderer.domElement.addEventListener('click', () => {
    window.location.href = "wishes.html";
  });
});