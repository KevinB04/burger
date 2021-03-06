var orm = require("../config/orm.js");

var burger = {
  all: (cb) => {
    orm.all("burgers", (res) => {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb) => {
    orm.create("burgers", cols, vals, (res) => {
      cb(res);
    });
  },
  update: (objColVals, condition, cb) => {
    orm.update("burgers", objColVals, condition, (res) => {
      cb(res);
    });
  },
  delete: (id, cb) => {
    orm.delete("burgers", id, (res) => {
      cb(res);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;