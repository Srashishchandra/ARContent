import jsQR from "https://cdn.jsdelivr.net/npm/jsqr@1.4.0/dist/jsQR.es6.min.js";

export function detectQR(video, canvas, ctx) {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  const imageData = ctx.getImageData(
    0, 0, canvas.width, canvas.height
  );

  const qr = jsQR(
    imageData.data,
    imageData.width,
    imageData.height
  );

  if (!qr) return null;

  return {
    id: qr.data,
    corners: [
      qr.location.topLeftCorner,
      qr.location.topRightCorner,
      qr.location.bottomRightCorner,
      qr.location.bottomLeftCorner
    ]
  };
}
