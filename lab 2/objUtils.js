const makeArrays = (arr) => {
    try {
      if (Array.isArray(arr)) {
        var result = [];
        var isLessThenTwo = false;
        arr.map((a) => {
          let data = Object.entries(a);
          if (data.length < 2) {
            isLessThenTwo = true;
          }
          data.forEach((d) => {
            result.push(d);
          });
        });
        if (isLessThenTwo === false) {
          return { data: result };
        } else {
          return {
            error: "object have less then two values",
          };
        }
      } else {
        return {
          error: "not an array",
        };
      }
    } catch (e) {
      return e;
      reject(e)
    }
};

// const first = { x: 2, y: 3};
// const second = { a: 70, x: 4, z: 5 };
// const third = { x: 0, y: 9, q: 10 };

// console.log(makeArrays([third, first, second]))

//====================================== is deep equals to starts ===========================
const isDeepEqual = (x, y) => {
  try {
    if (x === y) {
      return true;
    } else if (
      typeof x == "object" &&
      x != null &&
      typeof y == "object" &&
      y != null
    ) {
      if (Object.keys(x).length != Object.keys(y).length) return {error: false};

      for (var prop in x) {
        if (y.hasOwnProperty(prop)) {
          if (!isDeepEqual(x[prop], y[prop])) return {error: false};
        } else return {error: false};
      }

      return {data: true};
    } else return {error: 'not all values provided'};
  } catch (e) {
    return {error: e};
  }
};

// const first = {a: 2, b: 3};
// const second = {a: 2, b: 4};
// const third = {a: 2, b: 3};
// const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
// const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
// console.log("================== is deep equals to starts=====================")
// console.log(isDeepEqual(first, second)); // false
// console.log(isDeepEqual(forth, fifth)); // true
// console.log(isDeepEqual(forth, third)); // false
// console.log(isDeepEqual({}, {})); // true
// console.log("================== is deep equals to ends=====================")
//====================================== is deep equals to ends ===========================

//================ compute object starts===========================
const computeObject = (obj, func) => {
  try {
      if (typeof obj !== "object" && typeof func !== "function") {
          return {error: 'object or function is missing'}
      }
    const newNode = {};
    Object.entries(obj).forEach(([key, val]) => (newNode[key] = func(val)));
    return {data : newNode};
  } catch (e) {
    return {error : e};
  }
};
// console.log(computeObject({ a: 3, b: 7, c: 5 }, n =>  n * 2))
//================ compute object ends ===========================

module.exports = {
  makeArrays,
  isDeepEqual,
  computeObject,
};
