const axios = require("axios");

const getPersonById = async (id) => {
  if (!id) {
    const er = {
      error: "Please provide id",
    };
    // console.log(er);
    return er;
  }
  if (typeof id !== "number") {
    const er = {
      error: "id should be number",
    };
    // console.log(er);
    return er;
  }
  if (0 > id || id > 1000) {
    const er = {
      error: "id should be between 0 and 1000",
    };
    // console.log(er);
    return er;
  }
  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  const person = await persons.data.filter((p) => {
    return p.id === id;
  });
  // console.log(person[0]);
  return { data: person[0] };
};

const howManyPerState = async (state) => {
  if (!state) {
    let er = {
      error: "please provide state",
    };
    // console.log(er);
    return er;
  }
  if (typeof state !== "string") {
    let er = {
      error: "state should be string",
    };
    // console.log(er);
    return er;
  }
  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  const person = await persons.data.filter((p) => {
    return p.address.state === state;
  });
  if (person.length > 0) {
    // console.log(person.length);
    return { data: person.length };
  } else {
    let er = {
      error: "there are no people in given state",
    };
    // console.log(er);
    return er;
  }
};

const personByAge = async (index) => {
  if (index === "") {
    const er = {
      error: "Please provide index",
    };
    // console.log(er);
    return er;
  }
  if (typeof index !== "number") {
    const er = {
      error: "index should be number",
    };
    // console.log(er);
    return er;
  }
  if (0 > index || index >= 1000) {
    const er = {
      error: "index should be between 0 and 1000",
    };
    // console.log(er);
    return er;
  }
  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  let data = persons.data.map((p) => {
    return {
      ...p,
      date: new Date(p.date_of_birth),
      age: Math.floor(
        (new Date() - new Date(p.date_of_birth).getTime()) / 3.15576e10
      ),
    };
  });
  //   console.log("data",data)
  let d = await data.sort(function (a, b) {
    //   console.log(a.date_of_birth)
    // Turn your strings into dates, and then subtract them
    // to get a value that is either negative, positive, or zero.
    return new Date(a.date) - new Date(b.date);
  });
  let val = {
    first_name: d[index].first_name,
    last_name: d[index].last_name,
    date_of_birth: d[index].date_of_birth,
    age: d[index].age,
  };
  // console.log("person", val);
  return {data: val};
};

const peopleMetrics = async () => {
  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );
  let allNameString;
  let fullNamesArray = [];
  let citiesArray = [];
  let ageArray = [];
  persons.data.map((p) => {
    let name = p.first_name + " " + p.last_name;
    fullNamesArray.push(name);
    citiesArray.push(p.address.city);
    ageArray.push(
      Math.floor(
        (new Date() - new Date(p.date_of_birth).getTime()) / 3.15576e10
      )
    );
    allNameString = allNameString + name;
    // console.log("name",name)
  });
  //   console.log("fullNamesArray",fullNamesArray)
  //   console.log("citiesArray",citiesArray)
  // console.log("ageArray",ageArray)
  let response = {
    totalLetters: allNameString.length,
    totalVowels: totalVowels(allNameString),
    totalConsonants: totalConsonants(allNameString),
    longestName: fullNamesArray.sort(function (a, b) {
      return b.length - a.length;
    })[0],
    shortestName: fullNamesArray.sort(function (a, b) {
      return a.length - b.length;
    })[0],
    mostRepeatingCity: logMostFrequentElement(citiesArray),
    averageAge: ageArray.reduce((a, b) => a + b) / ageArray.length,
  };
  // console.log(response);
  return {data: response};
};

const totalConsonants = (string) => {
  var vowel_list = "aeiouAEIOU";
  var ccount = 0;

  for (var x = 0; x < string.length; x++) {
    if (vowel_list.indexOf(string[x]) === -1) {
      ccount += 1;
    }
  }
  return ccount;
};

const totalVowels = (string) => {
  var vowel_list = "aeiouAEIOU";
  var vcount = 0;

  for (var x = 0; x < string.length; x++) {
    if (vowel_list.indexOf(string[x]) !== -1) {
      vcount += 1;
    } else {
    }
  }
  return vcount;
};

const getMostFrequentElement = (inputArg) => {
  var type = typeof inputArg,
    length,
    mostFrequent,
    counts,
    index,
    value;

  if (inputArg === null || type === "undefined") {
    throw TypeError('inputArg was "null" or "undefined"');
  }

  mostFrequent = [];
  if (
    type === "function" ||
    !Object.prototype.hasOwnProperty.call(inputArg, "length")
  ) {
    mostFrequent[0] = inputArg;
    mostFrequent[1] = 1;
  } else {
    counts = {};
    length = inputArg.length;
    for (index = 0; index < length; index += 1) {
      value = inputArg[index];
      type = typeof value;
      counts[type] = counts[type] || {};
      counts[type][value] = (counts[type][value] || 0) + 1;
      if (!mostFrequent.length || counts[type][value] >= mostFrequent[1]) {
        mostFrequent[0] = value;
        mostFrequent[1] = counts[type][value];
      }
    }
  }

  return mostFrequent;
};

const logMostFrequentElement = (inputArg) => {
  var mostFrequentElement, element, text;

  try {
    mostFrequentElement = getMostFrequentElement(inputArg);
    if (mostFrequentElement.length) {
      element = mostFrequentElement[0];
      if (typeof element === "string") {
        element = '"' + element + '"';
      }

      text = element + " ( " + mostFrequentElement[1] + " times )";
    } else {
      text = "No elements";
    }
  } catch (e) {
    text = e.message;
  }
  return text;
};

module.exports = {
  getPersonById,
  howManyPerState,
  personByAge,
  peopleMetrics
}