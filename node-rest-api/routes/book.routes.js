const express = require("express");
const app = express();

const bookRoute = express.Router();
let Book = require("../model/Book");

// Add Book
// bookRoute.route("/add-book").post(async(req, res, next) => {
//   awaitBook.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
bookRoute.route("/add-book").post(async(req, res) => {
  await Book.create(req.body)
  .then(()=>{
    res.render("data");
}).catch((err)=>{
  res.json(err);
    console.log(err);
})
});

// Get all Book
// bookRoute.route("/").get(async (req, res) => {
//   await Book.find((error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
bookRoute.route("/").get(async (req, res) => {
  await Book.find()
  .then(function (data) {
    console.log(data);
    res.json(data)
  })
  .catch(function (err) {
    console.log(err);
    res.json
    (err)
  })
});
// Model.find()
// .then(function (models) {
//   console.log(models);
// })
// .catch(function (err) {
//   console.log(err);
// })

// Get Book
// bookRoute.route("/read-book/:id").get(async(req, res) => {
//   await Book.findById(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });
bookRoute.route("/read-book/:id").get(async(req, res) => {
  await Book.findById(req.params.id) .then(function (data){
    // res.render("data");
    res.json(data)
}).catch((err)=>{
  res.json(err);
    console.log(err);
})
});

// // Update Book
// bookRoute.route("/update-book/:id").put(async (req, res, next) => {
//   await Book.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         return next(error);
//         console.log(error);
//       } else {
//         res.json(data);
//         console.log("Book updated successfully!");
//       }
//     }
//   );
// });
// Update Book
bookRoute.route("/update-book/:id").put(async (req, res) => {
  await Book.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    }).then((data)=> {
   res.json(data)
    }
  ).catch((err)=>{
res.json(err)
  });
});


// // Delete Book
// bookRoute.route("/delete-book/:id").delete(async(req, res, next) => {
//   await Book.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });
// Delete Book
bookRoute.route("/delete-book/:id").delete(async(req, res) => {
  await Book.findByIdAndRemove(req.params.id)
  .then((data)=>{
    res.json(data);
  }).catch((err)=>{
    res.json(err)
  })
});

module.exports = bookRoute;
