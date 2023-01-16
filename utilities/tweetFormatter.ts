const tweetFormatter = (tweetCount: number): string => {
  if (tweetCount > 10000) {
    const result = Math.abs(tweetCount / 1000).toFixed(1);
    return `${result}k`;
  } else {
    return `${tweetCount}`;
  }
};

export { tweetFormatter };
