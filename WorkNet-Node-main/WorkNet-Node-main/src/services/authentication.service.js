const { v4 } = require("uuid");
const Employee = require("../models/Employee.model");
const Employer = require("../models/Employer.model");
class AuthenticationService {
    constructor() {
        this.authenticated = false;
        this.user = null;
    }
    login(username, passsword) {
        Employee.count({
            aadhar_id: username,
            password: passsword
        }).then((value) => {
            console.log("Employee Count: " + value);
            if (value != 0) {
                this.authenticated = true;
                console.log("From service 1: " + this.authenticated);
                // let promise = new Promise((resolve, reject) => {
                //     resolve(new Boolean(this.authenticate));
                // });
                return this.authenticated;
            } else {
                Employer.count({
                    aadhar_id: username,
                    password: passsword
                }).then((value) => {
                    console.log("Employer Count: " + value);
                    if (value != 0) {
                        this.authenticated = true;
                        console.log("From service 2: " + this.authenticated);
                        // let promise = new Promise((resolve, reject) => {
                        //     resolve(new Boolean(this.authenticate));
                        // });
                        return this.authenticated;
                    } else {
                        this.authenticated = false;
                        console.log("From service 3: " + this.authenticated);
                        // let promise = new Promise((resolve, reject) => {
                        //     resolve(new Boolean(this.authenticate));
                        // });
                        return this.authenticated;
                    }
                }).catch((err) => {
                    console.log(err)
                });
            }
        }).catch((err) => {
            console.log(err);
        });
    }
    registerEmployer(data) {
        data["user_id"] = v4();
        let newuser = new Employer(data);
        newuser.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error registering...")
                console.log(err);
            });
        return newuser;
    }
    registerEmployee(data) {
        data["user_id"] = v4();
        let newuser = new Employee(data);
        newuser.save()
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.log("Error registering...")
                console.log(err);
            });
        return newuser;
    }
}
let authService = new AuthenticationService();
module.exports = authService;
