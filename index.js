import { startCamera } from "./camera.js";
import { detectQR } from "./qrDetector.js";

export async function startQRTracking(onFound) {
  const video = document.createElement("video");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  await startCamera(video);

  function tick() {
    const result = detectQR(video, canvas, ctx);

    if (result) {
      onFound(result);
    }

    requestAnimationFrame(tick);
  }

  tick();
}
