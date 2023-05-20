const DBModelStationary = require("./Admin.Stationary.Model");

exports.create = async (req, res) => {
  try {
    const { filename } = req.file ? req.file : "";
    const { productno } = req.body;
    const { productname } = req.body;
    const { productdescription } = req.body;

    const stationary = new DBModelStationary({
      productno,
      productname,
      productdescription,
      filename,
    });

    // Save the image to the database
    await stationary.save();

    res.status(200).json({ message: "Stationary uploaded successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload Stationary" });
  }
};

// exports.create = async (req, res) => {
//   if (
//     !req.body.productno ||
//     !req.body.productname ||
//     !req.body.productdescription
//   ) {
//     res.status(400).send({ message: "All Fields Must Be Required!" });
//   }
//   const adminstationary = new DBModelStationary({
//     productno: req.body.productno,
//     productname: req.body.productname,
//     productdescription: req.body.productdescription,
//     productimage: req.body.productimage,
//   });

//   if (req.file) {
//     adminstationary.productimage = req.file.path;
//   }
//   await adminstationary
//     .save()
//     .then((data) => {
//       res.send({
//         message: "Stationary created successfully!!",
//         data,
//       });
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating Stationary",
//       });
//     });
// };

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
        res.status(404).send("Stationary Not Found");
      } else {
        res.status(200).send("Stationary Deleted Successfully");
      }
    });
  } catch (err) {}
};

exports.updateSingle = async (req, res) => {
  try {
    //!
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
