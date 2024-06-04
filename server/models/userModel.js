// // const { Timestamp } = require("mongodb");
// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //     },
// //     email: {
// //       type: String,
// //       unique: true,
// //     },
// //     password: {
// //       type: String,
// //       required: true,
// //     },
// //     role: {
// //       type: Number,
// //       default: 0,
// //     },
// //     cart: {
// //       type: Array,
// //       default: [],
// //     },
// //   },
// //   {
// //     timestamp: true,
// //   }
// // );

// // // module.exports = mongoose.module("Users", userSchema);

// // module.exports = mongoose.module("Users", userSchema);

// // const { Timestamp } = require("mongodb");
// // const mongoose = require("mongoose");

// // const userSchema = new mongoose.Schema(
// //   {
// //     name: {
// //       type: String,
// //       required: true,
// //     },
// //     email: {
// //       type: String,
// //       unique: true,
// //     },
// //     password: {
// //       type: String,
// //       required: true,
// //     },
// //     role: {
// //       type: Number,
// //       default: 0,
// //     },
// //     cart: {
// //       type: Array,
// //       default: [],
// //     },
// //   },
// //   {
// //     timestamp: true,
// //   }
// // );

// // // module.exports = mongoose.model("Users", userSchema);

// // module.exports = mongoose.model("Users", userSchema);

// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     role: {
//       type: Number,
//       default: 0,
//     },
//     cart: {
//       type: Array,
//       default: [],
//     },
//   },
//   {
//     timestamps: true, // Corrected this line
//   }
// );

// module.exports = mongoose.model("Users", userSchema);

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    cart: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Users", userSchema);
