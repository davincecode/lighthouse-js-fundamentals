function concat(arr1, arr2) {
  let arr3 = arr1.concat(arr2);
  arr3.sort();

  return arr3;
}

concat([1, 3, 2], [6, 4, 5]);
