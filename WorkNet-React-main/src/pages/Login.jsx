import React from 'react'
import './Login.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [username, setUserName] = React.useState();
    const [password, setPassword] = React.useState();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await axios.post("http://localhost:6969/auth/login", { username, password });
        console.log(res.data);
        if (res.data == true) {
            localStorage.setItem("auth", new Boolean(res.data));
            navigate("/worker-find");
        }
    }
    return (
        <div><section className='Login_page'>
            <div class="login-box">

                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div class="input-box">
                        
                        <span class="icon">
                            <ion-icon name="mail"></ion-icon>
                        </span>
                        <input type="text" onChange={(e) => { setUserName(e.target.value) }} value={username} required placeholder='Aadhaar Number'/>
                    </div>

                    <div class="input-box">
                        
                        <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                        <input type="password" onChange={(e) => { setPassword(e.target.value) }} value={password} required placeholder='Password' />
                    </div>

                    <div class="conform_forget">
                        <label className='confirm'><input type="checkbox" />
                            Confirm password</label>
                        <a href="#">Forget password</a>
                    </div>

                    <button type="submit">Login</button>
                    <div class="sign up">
                        <p>Don't have an account?
                            <a href="signup">sign up</a>
                        </p>
                    </div>
                </form>
            </div>
        </section>

            {/* <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script> */}
        </div>
    )
}

export default Login