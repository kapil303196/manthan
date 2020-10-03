const makeArrays = function makeArrays(objects) {
  var arr = [];
  if (typeof object !== "object") {
    throw "Invalid Argument Type Error";
  }
  if (objects === null) {
    throw "Empty Object Error";
  }

  for (let i = 0; i < objects.length; i++) {
    let keys = Object.keys(objects[i]);
    let values = Object.values(objects[i]);
    for (let j = 0; j < keys.length; j++) {
      arr.push([keys[j], values[j]]);
    }
  }
  return arr;
};

function isObject(object) {
  return object != null && typeof object === "object";
}

const isDeepEqual = function isDeepEqual(x, y) {
  if (typeof x !== "object") {
    throw "Invalid Argument1 Type Error";
  }
  if (x === null) {
    throw "Empty Object1 Error";
  }
  if (typeof y !== "object") {
    throw "Invalid Argument2 Type Error";
  }
  if (y === null) {
    throw "Empty Object2 Error";
  }
  try {
    if (x === y) {
      return true;
    } else if (
      typeof x == "object" &&
      x != null &&
      typeof y == "object" &&
      y != null
    ) {
      // if (Object.keys(x).length != Object.keys(y).length) return { error: false };

      // for (var prop in x) {
      //     if (y.hasOwnProperty(prop)) {
      //         if (!isDeepEqual(x[prop], y[prop])) return { error: false };
      //     } else return { error: false };
      // }
      // return { data: true };
      const keys1 = Object.keys(x);
      const keys2 = Object.keys(y);

      if (keys1.length !== keys2.length) {
        return false;
      }

      for (const key of keys1) {
        const val1 = x[key];
        const val2 = y[key];
        const areObjects = isObject(val1) && isObject(val2);
        if (
          (areObjects && !isDeepEqual(val1, val2)) ||
          (!areObjects && val1 !== val2)
        ) {
          return false;
        }
      }

      return true;
    } else throw "not all values provided" ;
  } catch (e) {
      throw e
  }
};

//computeObject
const computeObject = (obj, func) => {
  try {
    if (typeof obj !== "object" || typeof func !== 'function') {
      throw "object or function is missing";
    }
    const newNode = {};
    Object.entries(obj).forEach(([key, val]) => (newNode[key] = func(val)));
    return newNode;
  } catch (e) {
      throw e;
  }
};

module.exports = {
  firstName: "MANTHAN",
  lastName: "PATEL",
  studentId: "10471493",
  makeArrays,
  isDeepEqual,
  computeObject,
};
