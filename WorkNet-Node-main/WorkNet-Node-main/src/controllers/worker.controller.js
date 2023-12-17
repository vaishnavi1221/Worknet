const express = require("express");
const workerService = require("../services/worker.service");
let workController = express.Router();
workController.get("/work/:work/location/:location", (req, res) => {
    const { location, work } = req.params;
    workerService.getAllWorkers(location, work).then((data) => {
        console.log(data);
        return res.status(200).json(data);
    }).catch(e => {
        console.log(e);
    });
});
module.exports = workController;
