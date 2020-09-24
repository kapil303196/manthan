const axios = require("axios");

const listEmployees = async () => {
  const works = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );

  let data = await works.data.map((d) => {
    let empData = getEmployeesFromIds(persons.data, d.employees);
    return {
      company_name: d.company_name,
      employees: JSON.stringify(empData),
    };
  });
  //   console.log("Data",data)
  return {data: data};
};

const getEmployeesFromIds = (persons, ids) => {
  let arr = [];
  let data = persons
    .filter((p, index) => {
      return ids.includes(p.id);
    })
    .map((d) => {
      let index = ids.indexOf(d.id);
      let empData = {
        first_name: d.first_name,
        last_name: d.last_name,
      };
      arr[index] = empData;
      //   return d;
    });
  //   console.log("data filter", arr);
  return arr;
};

const fourOneOne = async (phone) => {
  if (!phone) {
    let er = {
      error: "please provide phone",
    };
    // console.log(er);
    return er;
  }
  if (typeof phone !== "string") {
    let er = {
      error: "phone should be string",
    };
    // console.log(er);
    return er;
  }
  let phoneArray = phone.split("-");
  if (
    phoneArray.length !== 3 ||
    phoneArray[0].length !== 3 ||
    phoneArray[1].length !== 3 ||
    phoneArray[2].length !== 4
  ) {
    let er = {
      error: "phone should be formated ###-###-####",
    };
    // console.log(er);
    return er;
  }
  const works = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );
  let details = works.data.filter((a) => {
    return a.company_phone === phone;
  });
  if (details.length > 0) {
    return {
        data: {
            company_name: details[0].company_name,
            company_address: details[0].company_address,
        }
    };
  } else {
    let er = {
        error: "no data found for this number",
      };
    //   console.log(er);
      return er;
  }
};

const whereDoTheyWork = async (ssn) => {
  if (!ssn) {
    let er = {
      error: "please provide ssn",
    };
    // console.log(er);
    return er;
  }
  if (typeof ssn !== "string") {
    let er = {
      error: "ssn should be string",
    };
    // console.log(er);
    return er;
  }
  let ssnArray = ssn.split("-");
  if (
    ssnArray.length !== 3 ||
    ssnArray[0].length !== 3 ||
    ssnArray[1].length !== 2 ||
    ssnArray[2].length !== 4
  ) {
    let er = {
      error: "ssn should be formated ###-##-####",
    };
    // console.log(er);
    return er;
  }
  const works = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/febcdd2ca91ddc685c163158ee126b4f/raw/c9494f59261f655a24019d3b94dab4db9346da6e/work.json"
  );

  const persons = await axios.get(
    "https://gist.githubusercontent.com/graffixnyc/31e9ef8b7d7caa742f56dc5f5649a57f/raw/43356c676c2cdc81f81ca77b2b7f7c5105b53d7f/people.json"
  );

  let person = persons.data.filter((a) => {
    return a.ssn === ssn;
  });
  if (person.length > 0) {
    let name = person[0].first_name + " " + person[0].last_name;
    let compnyName = works.data.filter((work) => {
        return work.employees.includes(person[0].id)
    })[0].company_name;
    return {data: name + " works at " + compnyName};
  } else {
    let er = {
        error: "no data found for this ssn",
      };
    //   console.log(er);
      return er;
  }
};

// const main = async () => {
//   let a = await listEmployees();
//   // console.log("A",a)
//   let b = await fourOneOne('240-144-7553');
// //   console.log("fourOneOne", b);
//   let c = await whereDoTheyWork("264-67-0084");
//   console.log("whereDoTheyWork", c);
// };

module.exports = {
    listEmployees,
    fourOneOne,
    whereDoTheyWork
}
