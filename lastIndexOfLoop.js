var lastIndexOf = function (array, value) {
  var i = array.length;
  while (i--) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
};
