// Constantes de composición del juego.
// Los valores físicos del rover viven en src/rover/physics.js.
export const ROVER_START = { x: 0, z: 10 };

// La cámara mira al cuerpo del rover, no a sus ruedas.
export const TARGET_LIFT = 1.3;

// Sol de tarde bajo sobre el horizonte, delante de la cámara (contraluz cinematográfico).
export const SUN_DIRECTION = [-0.38, 0.13, -1];

export const FOG_DENSITY = 0.0042;
export const TONE_MAPPING_EXPOSURE = 1.05;
