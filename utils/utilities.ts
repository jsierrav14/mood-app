export const displayImage = (
  mood: string,
  sentimentScore: number,
  negative: boolean,
) => {
  if (mood == 'happy' || sentimentScore >= 8) {
    return require('../assets/icons/shy.png');
  }

  if (mood == 'neutral' || sentimentScore >= 5) {
    return require('../assets/icons/smile.png');
  }

  if (mood == 'sad' || negative) {
    return require('../assets/icons/sad.png');
  }
};
