const DBModelStationary = require("./Doner.Stationary.Model");

exports.create = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.phone ||
    !req.body.email ||
    !req.body.address ||
    !req.body.quantity ||
    !req.body.longitude ||
    !req.body.latitude
  ) {
    res.status(400).send({ message: "All Fields Must Be Required!" });
  }
  const donerstationary = new DBModelStationary({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    quantity: req.body.quantity,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
  });

  await donerstationary
    .save()
    .then((data) => {
      res.send({
        message: "created successfully!!",
        data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating Stationary",
      });
    });
};

exports.getAll = async (req, res) => {
  DBModelStationary.find((err, data) => {
    res.status(200).json({
      data,
    });
  });
};

exports.getone = async (req, res) => {
  DBModelStationary.findById(req.params.id, (err, stationary) => {
    res.json({
      body: stationary,
    });
  });
};

exports.deleteSingle = async (req, res) => {
  try {
    DBModelStationary.findByIdAndRemove(req.params.id, (err, stationary) => {
      if (!stationary) {
        res.status(404).send("404 Not Found");
      } else {
        res.status(200).send(" Deleted Successfully");
      }
    });
  } catch (err) {}
};

exports.updateSingle = async (req, res) => {
  try {
    DBModelStationary.findByIdAndUpdate(
      req.params.id,
      req.body,
      (err, user) => {
        if (err) {
          return res.status(500).send({ error: "unsuccessful" });
        }
        res.send({ success: "success" });
      }
    );
  } catch (err) {}
};
