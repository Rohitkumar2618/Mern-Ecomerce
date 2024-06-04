// // const Users = require("../models/userModel");

// // const userCtrl = {
// //   register: async (req, res) => {
// //     try {
// //       const { name, email, password } = req.body;

// //       const user = await Users.findOne({ email });
// //       //   if the user email id already exists
// //       if (user)
// //         return res.status(400).json({ message: "Email already Registered" });

// //       if (password.length < 6) {
// //         return;
// //         res.status(400).json({ message: "password is at least 6 character" });
// //       }

// //       res.json({ message: "register success" });
// //     } catch (err) {
// //       res.status(500).json({
// //         message: err.message,
// //       });
// //     }
// //   },
// // };

// // module.exports = userCtrl;

// const Users = require("../models/userModel");

// const userCtrl = {
//   register: async (req, res) => {
//     try {
//       const { name, email, password } = req.body;

//       const user = await Users.findOne({ email });
//       //   if the user email id already exists
//       if (user)
//         return res.status(400).json({ message: "Email already Registered" });

//       if (password.length < 6) {
//         return;
//         res.status(400).json({ message: "password is at least 6 character" });
//       }

//       res.json({ message: "register success" });
//     } catch (err) {
//       res.status(500).json({
//         message: err.message,
//       });
//     }
//   },
// };

// module.exports = userCtrl;
const Users = require("../models/userModel");

const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;

      // Check if the email is already registered
      const user = await Users.findOne({ email });
      if (user) {
        return res.status(400).json({ message: "Email already registered" });
      }

      // Check if the password is at least 6 characters long
      if (password.length < 6) {
        return res
          .status(400)
          .json({ message: "Password must be at least 6 characters long" });
      }

      // Create a new user
      const newUser = new Users({
        name,
        email,
        password, // In a real application, make sure to hash the password before saving it
      });

      // Save the user to the database
      await newUser.save();

      res.json({ message: "Register success" });
    } catch (err) {
      res.status(500).json({
        message: err.message,
      });
    }
  },
};

module.exports = userCtrl;
