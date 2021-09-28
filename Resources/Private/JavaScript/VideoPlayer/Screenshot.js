/**
 *
 * @param {HTMLCanvasElement | CanvasRenderingContext2D} target Canvas on which the screenshot is drawn
 * @param {HTMLVideoElement} videoDomElement Source video element from which the screenshot is taken
 * @param {any} metadataArray
 */
export function drawCanvas(target, videoDomElement, metadataArray) {
  const [targetCanvas, context] =
    target instanceof HTMLCanvasElement
      ? [target, target.getContext('2d')]
      : [target.canvas, target];

  const infoString =
    metadataArray.screenshotFields
      .map(field => metadataArray.metadata[field])
      .filter(value => typeof value === 'string')
      .join(' / ');

  targetCanvas.width = videoDomElement.videoWidth;
  targetCanvas.height = videoDomElement.videoHeight;

  context.drawImage(videoDomElement, 0, 0, targetCanvas.width, targetCanvas.height);

  const unitHeight = targetCanvas.height / 1080;
  const textPad = 10 * unitHeight;

  context.font = `${Math.floor(25 * unitHeight)}px Arial`;
  context.textAlign = 'end';
  context.fillStyle = "#FFFFFF";
  context.shadowBlur = 5;
  context.shadowColor = "black";
  context.fillText(infoString, targetCanvas.width - textPad, targetCanvas.height - textPad);
}
