import React, { useState } from 'react'
import './Register.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const INITIAL_USER = {
    name: "",
    location: "",
    gender: "",
    type_of_worker: "",
    mobile_number: "",
    aadhar_id: "",
    password: ""
};
function Register() {
    const navigate = useNavigate();
    const [requestBody, setRequestBody] = useState(INITIAL_USER);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRequestBody((prev) => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:6969/auth/register", requestBody);
        if (res.status == 200) {
            navigate("/");
        }
    }
    return (
        <div>
            <section className='Register_page'>
                <div class="register-box">

                    <form onSubmit={handleSubmit}>
                        <h2 className='heading'>REGISTER</h2>
                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="person"></ion-icon>
                            </span>
                            <input type="text" name="name" onChange={handleChange} value={requestBody.name} required placeholder="Name" />
                            

                        </div>
                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="id-card"></ion-icon>
                            </span>
                            <input type="number" name="aadhar_id" onChange={handleChange} value={requestBody.aadhar_id} required placeholder='Aadhar'/>
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="call"></ion-icon>
                            </span>
                            <input type="password" name="password" onChange={handleChange} value={requestBody.password} required placeholder='Password' />
                           
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="journal"></ion-icon>
                            </span>
                            <input type="text" name="type_of_worker" onChange={handleChange} value={requestBody.type_of_worker} required placeholder='Type of work' />
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="pin"></ion-icon>
                            </span>
                            <input type="text" name="location" onChange={handleChange} value={requestBody.location} required placeholder='Location' />
                            
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="transgender-outline"></ion-icon>
                            </span>
                            <input type="text" name="gender" onChange={handleChange} value={requestBody.gender} required placeholder='Gender' />
                            
                        </div>

                        <div class="reg-box">
                            <span class="icon">
                                <ion-icon name="call"></ion-icon>
                            </span>
                            <input type="number" name="mobile_number" onChange={handleChange} value={requestBody.mobile_number} required placeholder='Phone number' />
                        </div>

                        <button type="submit">Register</button>
                        {/* <div class="popup" id="popup">
                <img src="404-tick.png"/>
                <h2>Thank You</h2>
                <p>Your details has been successfully submitted.thanks!</p>
                <button type="button"  onclick="closepopup()">OK</button>
            </div> */}
                        {/* <script>
                let popup=document.getElementById("popup");
                function openpopup(){
                    popup.classList.add("open-popup");
                }
                function closepopup(){
                    popup.classList.remove("close-popup");
                }
            </script> */}
                        <div class="register-link">
                            <p>
                                <a href="#"></a>
                            </p>
                        </div>
                    </form>
                </div>
            </section>

            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script></div> */}
        </div>
    )
}

export default Register