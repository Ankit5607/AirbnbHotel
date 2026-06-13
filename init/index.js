const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
const dotenv = require("dotenv");

const MONGO_URL = process.env.MONGO_URLL;

main()
    .then(() => {
        console.log("connected to DB");
})
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({
        ...obj,
        owner:'68d1464fac968000d85d34d7',
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();