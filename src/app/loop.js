import * as THREE from 'three';

// Bucle de render con delta acotado, para que un pestañeo o un cambio de pestaña
// no teleporte al rover en el siguiente frame.
export function startLoop(renderer, update) {
  const clock = new THREE.Clock();
  renderer.setAnimationLoop(() => {
    const dt = Math.min(clock.getDelta(), 0.05);
    update(dt);
  });
}
