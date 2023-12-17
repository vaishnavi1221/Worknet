const mongoose = require("../config/mongoose");
const EmployerSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true
    },
    name: String,
    mobile_number: String,
    email: {
        type: String,
        unique: true
    },
    aadhar_id: String,
    password: String
});
const EmployerModel = mongoose.model("Employer_Schema", EmployerSchema);
module.exports = EmployerModel;
