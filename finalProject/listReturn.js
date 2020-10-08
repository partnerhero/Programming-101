const chalk = require("chalk");

//Main logic to return car list.
module.exports = (lotCars) => {
  console.log(
    chalk.blue.bold(
      "There are " +
        lotCars.count("/carArray") +
        " cars currently in the lot: \n"
    )
  );
  //for each entry in our car db, pull that data, turn it into a string, and perform basic
  //string manipulation in order to make it readable.
  for (let i = 0; i <= lotCars.count("/carArray") - 1; i++) {
    rawData = lotCars.getData("/carArray[" + i + "]");
    console.log(
      chalk.green.italic("Car " + (i + 1) + " details: ") +
        chalk.green(
          //formatData(
          rawData
        ) //)
    );
  }
  console.log("\n\n");
};

const formatData = (oldData) => {
  data = JSON.stringify(oldData);
  data = data.replace(/"/g, "");
  data = data.replace(/,/g, ", ");
  data = data.replace(/:/g, ": ");
  return data;
};
