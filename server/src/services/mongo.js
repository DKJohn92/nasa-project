const mongoose = require("mongoose");
require("dotenv").config();

const adminUser = encodeURIComponent(process.env.adminUser);
const adminPW = encodeURIComponent(process.env.PW);

const MONGO_URL = `mongodb+srv://${adminUser}:${adminPW}@cluster0.agvzcph.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("connection ready.");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
