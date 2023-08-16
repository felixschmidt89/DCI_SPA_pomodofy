/**
 * Plays a sound using the provided audio source.
 *
 * @format
 * @param {string} src - The URL of the audio file to be played.
 */

const playSound = (src) => {
  // Create a new Audio object with the provided audio source
  const audio = new Audio(src);

  // Play the audio. If an error occurs, handle and log the error.
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export default playSound;
