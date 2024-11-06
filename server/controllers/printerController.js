const fs = require("fs");

const printerData = JSON.parse(
  fs.readFileSync(`${__dirname}/../storage/printer.json`)
);

exports.checkID = (req, res, next) => {
  if (req.params.id > printerData.length) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid id",
    });
  }
  next();
};

exports.getAllPrinter = (req, res) => {
  res.status(200).json({
    status: "success",
    request_time: req.requestTime,
    result: printerData.length,
    data: {
      printerData,
    },
  });
};
