const peopleFunctions = require("./people");
const workFunctions = require("./work");

const main = async () => {
  //------------------- getPersonById starts --------------------------//
  try {
    const data = await peopleFunctions.getPersonById(43);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("error", error);
  }
  try {
    const data = await peopleFunctions.getPersonById(-1);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("error", error);
  }
  try {
    const data = await peopleFunctions.getPersonById(1001);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("error", error);
  }
  try {
    const data = await peopleFunctions.getPersonById();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("error", error);
  }
  //------------------- getPersonById ends --------------------------//

  //-------------------- howManyPerState starts --------------------- //
  try {
    const data = await peopleFunctions.howManyPerState('NY');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.howManyPerState('CO');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.howManyPerState(-1);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.howManyPerState('WY');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.howManyPerState();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- howManyPerState ends --------------------- //

  //-------------------- personByAge starts --------------------- //
  try {
    const data = await peopleFunctions.personByAge(0);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge(43);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge(500);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge(999);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge(-1);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge(1000);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await peopleFunctions.personByAge();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- personByAge ends --------------------- //

  //-------------------- peopleMetrics starts --------------------- //
  try {
    const data = await peopleFunctions.peopleMetrics();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- peopleMetrics ends --------------------- //

  //-------------------- listEmployees starts --------------------- //
  try {
    const data = await workFunctions.listEmployees();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- listEmployees ends --------------------- //

  //-------------------- fourOneOne starts --------------------- //
  try {
    const data = await workFunctions.fourOneOne('240-144-7553');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.fourOneOne(43);
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.fourOneOne('212-208-8374');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.fourOneOne('5045890047');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.fourOneOne();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- fourOneOne ends --------------------- //

  //-------------------- whereDoTheyWork starts --------------------- //
  try {
    const data = await workFunctions.whereDoTheyWork('299-63-8866');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.whereDoTheyWork('277-85-0056');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.whereDoTheyWork();
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.whereDoTheyWork('123456789');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  try {
    const data = await workFunctions.whereDoTheyWork('264-67-0084');
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data.data);
    }
  } catch (error) {
    console.log("err", error);
  }
  //-------------------- whereDoTheyWork ends --------------------- //
};
main();
