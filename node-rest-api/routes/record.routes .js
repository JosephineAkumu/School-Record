const express = require('express');
const app = express();
const recordRoute = express.Router();
let Records = require('../model/Records');
// Add Record
recordRoute.route('/add-record').post((req, res, next) => {
    Record.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all Record
recordRoute.route('/').get((req, res) => {
    Records.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})
// Get Record
recordRoute.route('/read-record/:id').get((req, res) => {
    Records.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }const express = require("express");
    const app = express();
    
    const bookRoute = express.Router();
    let Records = require("../model/Records");
    
    // Add Records
    bookRoute.route("/add-record").post((req, res, next) => {
      Records.create(req.body, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    });
    
    // Get all Records
    bookRoute.route("/").get((req, res) => {
      Records.find((error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    });
    
    // Get Records
    bookRoute.route("/read-record/:id").get((req, res) => {
      Records.findById(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.json(data);
        }
      });
    });
    
    // Update Records
    bookRoute.route("/update-record/:id").put((req, res, next) => {
      Records.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        (error, data) => {
          if (error) {
            return next(error);
            console.log(error);
          } else {
            res.json(data);
            console.log("Records updated successfully!");
          }
        }
      );
    });
    
    // Delete Records
    bookRoute.route("/delete-record/:id").delete((req, res, next) => {
      Records.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
          return next(error);
        } else {
          res.status(200).json({
            msg: data,
          });
        }
      });
    });
    
    module.exports = bookRoute;
    
  })
})

// Update Record
recordRoute.route('/update-record/:id').put((req, res, next) => {
    Records.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Record updated successfully!')
    }
  })
})
// Delete Record
recordRoute.route('/delete-record/:id').delete((req, res, next) => {
    Records.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})
module.exports = recordRoute;