const mongoose = require("mongoose");
// QoI3pMdgGnjBkmnn
function dbConnect() {
  mongoose
    .connect(process.env.MONGODBURL)
    .then(() => console.log("MongoDB Connected!"));
}
module.exports = dbConnect;
