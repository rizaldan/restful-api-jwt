const db = require("../models");
const Mobil = db.car;
exports.allAccess = (req, res) => {
  // res.status(200).send("Public Content.");
  // const nama = req.query.nama;
  // var condition = nama ? { nama: { $regex: new RegExp(nama), $options: "" } } : {};

  // Mobil.find(condition)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Terjadi suatu error!"
  //     });
  //   });
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
