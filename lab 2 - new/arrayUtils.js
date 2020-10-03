const mean = function mean(arr) {
  var sum = 0;

  if (!Array.isArray(arr)) {
    throw "Invalid Array Entered";
  }
  if (arr.length == 0) {
    throw "Empty Array Error";
  }
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      throw "Invalid Array Element Error";
    } else {
      sum += arr[i];
    }
  }
  console.log(sum / arr.length);
  return sum / arr.length;
};

const medianSquared = function medianSquared(arr) {
  var n = arr.length;
  var medianSquared = 0;
  var middleNumber = Math.floor(n / 2);
  if (!Array.isArray(arr)) {
    throw "Invalid Array Entered";
  }
  if (arr.length == 0) {
    throw "Empty Array Error";
  }
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] != "number") {
      throw "Invalid Array Element Error";
    }
  }
  arr.sort();
  var median = 0, numsLen = arr.length;
  arr.sort();

  if (
      numsLen % 2 === 0 // is even
  ) {
      // average of two middle numbers
      median = (arr[numsLen / 2 - 1] + arr[numsLen / 2]) / 2;
  } else { // is odd
      // middle number only
      median = arr[(numsLen - 1) / 2];
  }
  console.log(median*median)
  return median*median;
};

//Max Element
const maxElement = function maxElement(arr) {
  var n = arr.length;
  var maxElementValue = arr[0];
  var maxElementIndex = 0;
  if (!Array.isArray(arr)) {
    throw "Invalid Array Entered";
  }
  if (arr.length == 0) {
    throw "Empty Array Error";
  }
  for (var i = 1; i < n; i++) {
    if (typeof arr[i] != "number") {
      throw "Invalid Array Element Error";
    }
    if (arr[i] > maxElementValue) {
      maxElementValue = arr[i];
      maxElementIndex = i;
    }
  }
  var myObj = {};
  myObj[maxElementValue] = maxElementIndex;
  console.log(myObj);
  return myObj;
};

//Fill Element
const fill = function fill(end, value) {
  var arr = [];
  if (end <= 0) {
    throw "Negative OR Zero End Number Error";
  }
  if (typeof end != "number") {
    throw "Invalid Element Type Error";
  }
  if (!value) {
    for (let i = 0; i < end; i++) {
      arr.push(i);
    }
  } else {
    for (let i = 0; i < end; i++) {
      arr.push(value);
    }
  }
  console.log(arr);
  return arr;
};

//countRepeating Element
const countRepeating = function countRepeating(arr) {
  var n = arr.length;
  //var max = arr[0];
  //var pos = 0;
  if (!Array.isArray(arr)) {
    throw "Invalid Array Entered";
  }
  var myObj = {};
  var check = null;
  var count = 0;
  var newArr = arr.sort();
  if (arr.length == 0) {
    return myObj;
  }
  for (var i = 0; i < n; i++) {
    if (newArr[i] != check) {
      if (count > 0) {
        myObj[check] = count;
      }
      check = newArr[i];
      count = 1;
    } else {
      count += 1;
    }
  }
  console.log(myObj);
  return myObj;
};

//isEqual Arrays
const isEqual = function isEqual(arr1, arr2) {
  var n1 = arr1.length;
  var n2 = arr2.length;
  if (!Array.isArray(arr1)) {
    throw "Not An Array1 Error";
  }
  if (arr1.length == 0) {
    throw "Empty Array2 Error";
  }
  if (!Array.isArray(arr2)) {
    throw "Not An Array2 Error";
  }
  if (arr2.length == 0) {
    throw "Empty Array2 Error";
  }
  if (!arr1) {
    return false;
  } else if (!arr2) {
    return false;
  } else if (n1 != n2) {
    return false;
  } else {
    const arr2Sorted = arr2.slice().sort();
    return arr1.length === arr2.length &&
      arr1
        .slice()
        .sort()
        .every(function (value, index) {
          return value === arr2Sorted[index];
        });
    }
};

module.exports = {
  firstName: "MANTHAN",
  lastName: "PATEL",
  studentId: "10471493",
  mean,
  medianSquared,
  maxElement,
  fill,
  countRepeating,
  isEqual,
};
