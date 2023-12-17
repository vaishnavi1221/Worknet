import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Signup.css"
const INITIAL_USER = {
    name: "",
    mobile_number: "",
    email: "",
    aadhar_id: "",
    password: ""
};
function Signup() {
    const navigate = useNavigate();
    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestBody((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:6969/auth/signup", requestBody);
        if (res.status == 200) {
            console.log(res.data)
            navigate("/login");
        }
    }
    return (
        <div>
            <div class="split-screen">
                <div class="left">
                </div>
                <div class="right">
                    <form onSubmit={handleSubmit}>
                        <section class="copy">
                            <h2 className='Signup_heading'>SIGN UP</h2>
                        </section>

                        <div class="input-container name">
                            <label for="fname"> Full name</label>
                            <input id="fname" name="name" onChange={handleChange} value={requestBody.name} type="text" />
                        </div>
                        <div class="input-container email">
                            <label for="email"> Email</label>
                            <input id="email" name="email" onChange={handleChange} value={requestBody.email} type="email" />
                        </div>
                        <div class="input-container name">
                            <label for="fname"> aadhar_id</label>
                            <input id="fname" name="aadhar_id" onChange={handleChange} value={requestBody.aadhar_id} type="text" />
                        </div>
                        <div class="input-container email">
                            <label for="email"> mobile_number</label>
                            <input id="email" name="mobile_number" onChange={handleChange} value={requestBody.mobile_number} type="text" />
                        </div>

                        <div class="input-container password">
                            <label for="password"> Password</label>
                            <input id="password" name="password" onChange={handleChange} value={requestBody.password}
                                placeholder="Must be atleast 6 characters" type="password" />
                            <i class="far fa-eye-slash"></i>
                        </div>

                        <div class="input-container cta">
                            <label class="checkbox-container">
                                <input type="checkbox" />
                                <span class="checkmark"></span>
                                sign up for email updates.
                            </label>
                        </div>
                        <button class="signup-btn" type="submit">sign up</button>
                        <div class="login-container">
                            <p>Already have an account?<a href="/login"><strong>log in</strong>
                            </a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup