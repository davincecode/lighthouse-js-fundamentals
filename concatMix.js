const merge = (arr1, arr2) => {
  let arr3 = arr1.concat(arr2);
  arr3.sort();

  return arr3;
};

merge([4, 5, 6], [1, 2, 3, 4]);
