const parseDate = (input) => {
  var parts = input.match(/(\d+)/g);
  // note parts[1]-1

  return new Date(parts[2], parts[1] - 1, parts[0]);
};

export default parseDate;
