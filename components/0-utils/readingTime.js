const readingTime = (post) => {
    
  const WORDS_PER_MINUTE = 200;
  let result = {};
  //Matches words
  //See
  //https://regex101.com/r/q2Kqjg/6
  const regex=/\w+/g;
  result.wordCount = 
  (post || '').match(regex).length;
  
  result.readingTime = 
  Math.ceil(
     result.wordCount / 
     WORDS_PER_MINUTE);
  return result;
};

export default readingTime;