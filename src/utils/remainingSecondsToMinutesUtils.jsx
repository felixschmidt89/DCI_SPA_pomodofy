/**
 * Converts the given number of seconds into a formatted string in the format "minutes:seconds".
 *
 * @format
 */

export const remainingSecondsToMinutes = (seconds) => {
  // Calculate the number of minutes
  const minutes = Math.floor(seconds / 60);

  // Calculate the remaining seconds after converting to minutes
  const remainingSeconds = seconds % 60;

  // Create the formatted string with minutes and seconds
  // If remainingSeconds is less than 10, add a leading "0" to maintain formatting
  return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
};
