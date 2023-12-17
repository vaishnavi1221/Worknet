const mongoose = require("../config/mongoose");
const EmployeeSchema = new mongoose.Schema({
    user_id: {
        type: String,
        unique: true
    },
    name: String,
    location: String,
    gender: String,
    type_of_worker: String,
    mobile_number: String,
    aadhar_id: String,
    password: String
});
const EmployeeModel = mongoose.model("Employee_Schema", EmployeeSchema);
module.exports = EmployeeModel;
