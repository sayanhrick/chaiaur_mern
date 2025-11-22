//require("dotenv").config({path: "./.env"});

import dotenv from "dotenv";
import connectToDatabase from "./db/index.js";
import app from "./app.js";
dotenv.config({ path: "./.env" });

connectToDatabase().then(
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    }
    )
).catch((error) => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
});












































// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";

//import { connect } from "mongoose";

// import express from "express";
// const app = express();

// import dotenv from "dotenv";

// (async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {

//         })
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error;

//         })
//         app.listen(process.env.PORT, () => {
//             console.log(`Server is running on port ${process.env.PORT}`);
//             console.log("Connected to MongoDB");
//         }
//         );

//     } catch (error) {
//         console.error("Error connecting to MongoDB:", error);
//     }
// })();




