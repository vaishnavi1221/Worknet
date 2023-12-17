const express = require("express");
const authService = require("../services/authentication.service");
let authController = express.Router();
authController.post("/login", (req, res) => {
    const data = req.body;
    authService.login(data["username"], data["password"]);
    setTimeout(() => {
        res.status(200).header({ "Authentication": authService.authenticated }).json(authService.authenticated)
    }, 100);
    // return res.status(200).header({ "Authentication": authService.authenticated }).json(authService.authenticated);
});
authController.post("/register", (req, res) => {
    const data = req.body;
    const user = authService.registerEmployee(data);
    return res.status(200).json(user);
});
authController.post("/signup", (req, res) => {
    const data = req.body;
    const user = authService.registerEmployer(data);
    return res.status(200).json(user);
});
module.exports = authController;
