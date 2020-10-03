const arrayUtils = require("./arrayUtils");
const stringUtils = require("./stringUtils");
const ObjUtils = require("./objUtils");
const { mean } = require("./arrayUtils");

//Mean Tests
console.log("Mean:");
try {
  const meanOne = arrayUtils.mean([1,2,4,5]);
  console.log("Mean passed successfully");
} catch (e) {
  console.log("Mean failed test case");
}
try {
  const meanTwo = arrayUtils.mean(1234);
  console.error("Mean did not error");
} catch (e) {
  console.log("Mean failed successfully");
}
console.log("\n");
//MedianSquared
console.log("Median Squared:");
try {
  const medianOne = arrayUtils.medianSquared([1, 2, 4, 5]);
  console.log("Median passed successfully");
} catch (e) {
  console.log(e)
  console.log("Median failed test case");
}
try {
  const medianOne = arrayUtils.medianSquared(1234);
  console.log("Median passed successfully");
} catch (e) {
  console.log(e)
  console.log("Median failed test case");
}

try {
  const medianTwo = arrayUtils.medianSquared("banana");
  console.log("Median did not error");
} catch (e) {
  console.log("Median failed test case");
}
console.log("\n");
//Max Element
console.log("Max Element:");
try {
  const maxElementOne = arrayUtils.maxElement([1, 2, 4, 5]);
  console.log("MaxElement passed successfully");
} catch (e) {
  console.log(e)
}
try {
  const maxElementTwo = arrayUtils.maxElement("banana");
  console.log("MaxElement did not error");
} catch (e) {
  console.log(e)
}
try {
  const maxElementTwo = arrayUtils.maxElement(1234);
  console.log("MaxElement did not error");
} catch (e) {
  console.log(e)
}
//Fill
console.log("Fill:");
try {
  const fillOne = arrayUtils.fill(6);
  console.log("Fill passed successfully");
} catch (e) {
  console.log("Fill failed test case");
}
try {
  const fillTwo = arrayUtils.fill(3, "Welcome");
  console.log("Fill passed successfully");
} catch (e) {
  console.log("Fill failed successfully");
}
try {
  const fillTwo = arrayUtils.fill('foo', "bar");
  console.log("Fill passed successfully");
} catch (e) {
  console.log("Fill failed successfully");
}
//countRepeating
console.log("Count Repeating:");
try {
  console.log(arrayUtils.countRepeating([1, 2, 3, 4, 1, 1, 3, 2, 5]));
  console.log(
    arrayUtils.countRepeating(["j", "h", "d", "r", "w", "j", "h", "H"])
  );
  console.log(arrayUtils.countRepeating([]));
} catch (e) {
  console.log("Count Repeating failed"+ e);
}
try {
  console.log(arrayUtils.countRepeating('foo'));
} catch (e) {
  console.log("Count Repeating failed "+ e);
}
try {
  console.log(arrayUtils.countRepeating(1234));
} catch (e) {
  console.log("Count Repeating failed "+ e);
}
return;
//isEqual
console.log("isEqual:");
try {
  console.log(arrayUtils.isEqual([1, 2, 3], [2, 3, 1]));
  console.log(arrayUtils.isEqual([1, 2, 3], [2, 3, 1, 4]));
  console.log(
    arrayUtils.isEqual(
      [
        [9, 2, 3],
        [4, 6, 5],
      ],
      [
        [2, 9, 3],
        [5, 4, 7],
      ]
    )
  );
} catch (e) {
  console.log(e);
}
//String Utils
//isEqual
console.log("CamelCase:");
try {
  console.log(stringUtils.camelCase("my function rocks"));
  console.log(stringUtils.camelCase("FOO BAR"));
  console.log(stringUtils.camelCase("How now brown cow"));
  console.log(stringUtils.camelCase());
} catch (e) {
  console.log(e);
}
//Try Invalid String
try {
  console.log(stringUtils.camelCase(123));
} catch (e) {
  console.log(e);
}
//Try Empty String Error
try {
  console.log(stringUtils.camelCase(""));
} catch (e) {
  console.log(e);
}

//replaceChar
console.log("ReplaceChar:");
try {
  console.log(stringUtils.replaceChar("Daddy"));
  console.log(stringUtils.replaceChar("Mommy"));
  console.log(
    stringUtils.replaceChar("Hello, How are you? I hope you are well")
  );
  console.log(stringUtils.replaceChar("babbbbble"));
} catch (e) {
  console.log(e);
}
//Try Invalid String
try {
  console.log(stringUtils.replaceChar(123));
} catch (e) {
  console.log(e);
}
//Try Empty String Error
try {
  console.log(stringUtils.replaceChar(""));
} catch (e) {
  console.log(e);
}

//mashUp
console.log("MashUp:");
try {
  console.log(stringUtils.mashUp("Patrick", "Hill"));
  console.log(stringUtils.mashUp("hello", "world"));
} catch (e) {
  console.log(e);
}
//Try Invalid String
try {
  console.log(stringUtils.mashUp(123));
} catch (e) {
  console.log(e);
}
//Try Empty String Error
try {
  console.log(stringUtils.mashUp(""));
} catch (e) {
  console.log(e);
}
//Try Second String Empty
try {
  console.log(stringUtils.mashUp("John"));
} catch (e) {
  console.log(e);
}

//Try Single Character for both Strings
try {
  console.log(stringUtils.mashUp("J", "e"));
} catch (e) {
  console.log(e);
}

//objUtils
//makeArrays
console.log("makeArrays: ");
try {
  const first = {
    x: 2,
    y: 3,
  };
  const second = {
    a: 4,
    b: 6,
  };
  const third = { x: 0, y: 9, q: 10 };
  console.log(ObjUtils.makeArrays([first, second, third]));
} catch (e) {
  console.log(e);
}

console.log("isDeepEqual");
try {
  const first = { a: 2, b: 3 };
  const second = { a: 2, b: 4 };
  const third = { a: 2, b: 3 };
  const forth = {
    a: { sA: "Hello", sB: "There", sC: "Class" },
    b: 7,
    c: true,
    d: "Test",
  };
  const fifth = {
    c: true,
    b: 7,
    d: "Test",
    a: { sB: "There", sC: "Class", sA: "Hello" },
  };
  console.log("============ is deep equals to starts==============");
  console.log(ObjUtils.isDeepEqual(first, second)); // false
  console.log(ObjUtils.isDeepEqual(forth, fifth)); // true
  console.log(ObjUtils.isDeepEqual(forth, third)); // false
  console.log(ObjUtils.isDeepEqual({}, {})); // true
  console.log(ObjUtils.isDeepEqual({ x: 2, y: 3 }, { x: 2, y: 3 })); // true
  console.log(
    ObjUtils.isDeepEqual(
      {
        a: { aa: { aaa: { aaaa: 1, bbbb: 2 } } },
        b: { bb: { bbb: 3 }, cc: { ddd: { dddd: 4 } } },
      },
      {
        b: { bb: { bbb: 3 }, cc: { ddd: { dddd: 4 } } },
        a: { aa: { aaa: { aaaa: 1, bbbb: 2 } } },
      }
    )
  ); // true
  console.log(
    ObjUtils.isDeepEqual({ a: { aa: 1, bb: 2 }, b: 2 }, { b: 2, a: { aa: 1 } })
  ); // false
} catch (e) {
  console.log(e);
}
//isDeepEqual
try {
  //should pass
  const first = { a: 2, b: 3 };
  const second = { a: 2, b: 4 };
  let result = ObjUtils.isDeepEqual(first, second);
  console.log("isDeepEqual passed");
} catch (error) {
  console.log("isDeepEqual failed");
}

try {
  let result = ObjUtils.isDeepEqual();
  console.log("isDeepEqual passed");
} catch (error) {
  console.log("isDeepEqual failed" + error);
}

try {
  let result = ObjUtils.isDeepEqual(123,123);
  console.log("isDeepEqual passed");
} catch (error) {
  console.log("isDeepEqual failed" + error);
}
try {
  let result = ObjUtils.isDeepEqual(1234,1234);
  console.log("isDeepEqual passed");
} catch (error) {
  console.log("isDeepEqual failed" + error);
}
try {
  let result = ObjUtils.isDeepEqual('str','str');
  console.log("isDeepEqual passed");
} catch (error) {
  console.log("isDeepEqual failed" + error);
}


//computeObject
try {
  //should pass
  let data = ObjUtils.computeObject({ x: 1, y: 2, z: 3 }, (e) => e * 2);
  console.log(data)
  console.log("compute object passed")
} catch (error) {
  console.log("computeObject failed" + error);
}

try {
  //should fail
  // let data = ObjUtils.computeObject({ a: 3, b: 7, c: 5 });
  let data = ObjUtils.computeObject(1234, 1234);
    console.log("computeObject passed");
} catch (error) {
  console.log("computeObject failed" + error);
}

try {
  //should fail
  // let data = ObjUtils.computeObject({ a: 3, b: 7, c: 5 });
  let data = ObjUtils.computeObject([1], [2]);
    console.log("computeObject passed");
} catch (error) {
  console.log("computeObject failed" + error);
}
try {
  //should fail
  // let data = ObjUtils.computeObject({ a: 3, b: 7, c: 5 });
  let data = ObjUtils.computeObject('foo','foo');
    console.log("computeObject passed");
} catch (error) {
  console.log("computeObject failed" + error);
}
return;
