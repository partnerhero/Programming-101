// Importing axios
const axios = require("axios");

//Globally declaring API url
const API_URL = "http://dummy.restapiexample.com/api/v1/";

//GET - Fetch all employee records
//"http://dummy.restapiexample.com/api/v1/employees"
const getRequest = () => {
  axios.get(API_URL + "employees").then((response) => {
    console.log(response.data);
  });
};

getRequest();
