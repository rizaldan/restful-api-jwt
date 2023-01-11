const db = require("../models");
const Mobil = db.car;

exports.publicBoard = (req, res) => {
  // res.status(200).send("Public Content.");
  res.json({ message: "Endpoint List.", list: "/list is endpoint for all car list"});
};

exports.create = (req, res) => {

  if (!req.body.nama) {
    res.status(400).send({ message: "Tidak Boleh kosong!" });
    return;
  }

  const mobil = new Mobil({
    nama: req.body.nama,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
  });

  mobil
    .save(mobil)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terjadi suatu error saat membuat Resep."
      });
    });
};

exports.userfindAll = (req, res) => {
  const nama = req.query.nama;
  var condition = nama ? { nama: { $regex: new RegExp(nama), $options: "" } } : {};

  Mobil.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Terjadi suatu error!"
      });
    });
};

exports.findOne = (req, res) => {
  const nama = req.params.nama;

  Resep.findByNama(nama)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Resep tidak ditemukan " + nama });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Terjadi error!" + nama });
    });
};

exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data untuk perubahan tidak boleh kosong!"
    });
  }

  const id = req.params.id;

  Resep.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Mungkin resep yang akan dirubah tidak tersedia.`
        });
      } else res.send({ message: "Update resep berhasil." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error update resep!" + id
      });
    });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Resep.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Resep yang akan dihapus mungkin tidak ada!`
        });
      } else {
        res.send({
          message: "Resep berhasil dihapus!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Tidak bisa menghapus resep" + id
      });
    });
};