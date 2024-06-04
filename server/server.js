// const express = require("express");
// const mongoose = require("mongoose");
// const app = express();
// require("dotenv").config();
// const PORT = process.env.PORT || 8000;

// // for the running environment port
// app.get("/", (req, res) => {
//   res.status(200).json({
//     message: "Hello World",
//   });
//   console.log(`Server is running on port ${PORT}`);
// });

// // Connect to MongoDB
// const URI = process.env.MONGODB_URL;
// mongoose
//   .connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((err) => {
//     console.error("Error connecting to the database:", err);
//   });

// // Routes

// app.use("user", require("./routes/useRouter"));

// // App listing on port number on port 8000
// app.listen(8000, () => {
//   console.log("Server is running on port 8000");
// });

const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 8000;

// Middleware to parse JSON
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello World",
  });
  console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB
const URI = process.env.MONGODB_URL;
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

// User routes
app.use("/user", require("./routes/useRouter"));

// App listening on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
