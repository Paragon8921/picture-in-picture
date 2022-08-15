const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt user to select media stream, pass to video element, then play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;

    // Using addEventListener
    // videoElement.addEventListener('loadedmetadata', () => {
    //   videoElement.play();
    // });

    // Using onloadedmetadata event handler property
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Cattch Error
    console.log('Error:', error);
  }
}

button.addEventListener('click', async () => {
  // Disable button
  button.disabled = true;

  // Start Picture in Picture
  await videoElement.requestPictureInPicture();

  // Reset button
  button.disabled = false;
});

// On Load
selectMediaStream();
