const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/staff", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
// const { MongoClient, ObjectID } = require("mongodb");

// const connectionURL = "mongodb://127.0.0.1:27017";
// const databaseName = "staff";
// let manager;

// const hello = MongoClient.connect(
//   connectionURL,
//   { useNewUrlParser: true },
//   (error, client) => {
//     if (error) {
//       return console.log("Error occured: Connection failed");
//     }

//     const db = client.db(databaseName);

//     // db.collection("employees").insertOne({
//     //   owner: "Diljeet Singh",
//     //   username: "ds",
//     //   pin: 1111,
//     //   daysofWork: [
//     //     "Monday",
//     //     "Tuesday",
//     //     "Wednesday",
//     //     "Thursday",
//     //     "Friday",
//     //     "Saturday",
//     //     "Sunday",
//     //   ],
//     //   onOff: [],
//     //   manager: true,
//     // });
//     db.collection("employees").findOne({ manager: true }, (error, result) => {
//       if (error) {
//         return console.log("There was an error finding the manager");
//       }
//       console.log(result);
//       manager = result;

//       console.log(manager);
//     });
//   }
// );
