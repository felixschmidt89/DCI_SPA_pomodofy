/** @format */

const playSound = (src) => {
  const audio = new Audio(src);
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};

export default playSound;
