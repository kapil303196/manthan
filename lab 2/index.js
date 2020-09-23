const objUtils = require("./objUtils");

// makeArrays Tests
try {
  // Should Pass
  const first = { x: 2, y: 3 };
  const second = { a: 70, x: 4, z: 5 };
  const third = { x: 0, y: 9, q: 10 };
  const meanOne = objUtils.makeArrays([first, second, third]);
  if (meanOne.data) {
    console.log("makeArrays passed successfully");
  } else {
    console.error("makeArrays failed test case");
  }
} catch (e) {
  console.error("makeArrays failed test case");
}

try {
  // Should fail
  const first = { x: 2, y: 3 };
  const second = { a: 70 };
  const third = { x: 0, y: 9, q: 10 };
  const meanOne = objUtils.makeArrays([first, second, third]);
  if (meanOne.data) {
    console.log("makeArrays passed successfully");
  } else {
    console.error("makeArrays failed test case");
  }
} catch (e) {
  console.error("makeArrays failed test case");
}

try {
  //should pass
  const first = { a: 2, b: 3 };
  const second = { a: 2, b: 4 };
  let result = objUtils.isDeepEqual(first, second);
  //   console.log("result",result)
  if (result.data) {
    console.log("isDeepEqual passed");
  } else {
    console.log("isDeepEqual failed");
  }
} catch (error) {
  console.log("isDeepEqual failed");
}

try {
  //should fail
  const first = { a: 2, b: 3 };
  const second = { a: 2, b: 4 };
  let result = objUtils.isDeepEqual(first);
  //   console.log("result",result)
  if (result.data) {
    console.log("isDeepEqual passed");
  } else {
    console.log("isDeepEqual failed");
  }
} catch (error) {
  console.log("isDeepEqual failed");
}

try {
    //should pass
    let data = objUtils.computeObject({ a: 3, b: 7, c: 5 }, n => n * 2);
    if(data.data) {
        console.log("computeObject passed");
    } else {
        console.log("computeObject failed")
    }
} catch (error) {
    console.log("computeObject failed")
}

try {
    //should fail
    let data = objUtils.computeObject({ a: 3, b: 7, c: 5 });
    if(data.data) {
        console.log("computeObject passed");
    } else {
        console.log("computeObject failed")
    }
} catch (error) {
    console.log("computeObject failed")
}

// console.log(objUtils.computeObject({ a: 3, b: 7, c: 5 }, (n) => n * 2));
