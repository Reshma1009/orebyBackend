const User = require("../models/registation.js");
 function emailValidation(email) {
   let userEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test( email );

  
  if (!userEmail) {
    return true;
  }
}

module.exports = emailValidation;
