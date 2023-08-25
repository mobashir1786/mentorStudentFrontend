import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const email = event.target[0].value;
        const password = event.target[1].value;

        // console.log(firstname,lastnane, number, email, password);
        axios.post("https://mentor-student-backend.vercel.app/login", { email: email, password: password })
            .then(res => {
                if (res.data.key === 1) {
                    document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                    window.location.href = 'https://mentor-student-frontend-gules.vercel.app/'
                } else {
                    alert(res.data.message);
                }
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='login'>
            <div className="loginleft"></div>
            <div className="loginRight">
                <form onSubmit={handleSubmit} className='signupbox'>
                    <input placeholder='Email' type="email" required />
                    <input placeholder='Password' type="password" required />
                    <button type="submit" >Agree & Sign-up</button>
                    <Link to="/signup" className='gotosignup'>
                        <div className='signupwith'>
                            <hr className='leftline' /><span>Don't Have Account</span><hr className='rightline' />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Login
