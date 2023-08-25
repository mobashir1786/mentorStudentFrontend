import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;

        // console.log(firstname,lastnane, number, email, password);
        axios.post("https://mentor-student-backend.vercel.app/signup", { name: name, email: email, password: password })
            .then(res => {
                console.log(res)
                document.cookie = res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                window.location.href = 'https://mentor-student-frontend.vercel.app'
            }).catch(e => {
                console.log(e);
            })
    }
    return (
        <div className='signup'>
            <div className="signupleft"></div>
            <div className="signupRight">
                <form onSubmit={handleSubmit} className='signupbox'>
                    <input placeholder='Enter Name' type="text" required />
                    <input placeholder='Email' type="email" required />
                    <input placeholder='Password' type="password" required />
                    <button type="submit" >Agree & Sign-up</button>
                    <Link to="/login" className='gotosignup'>
                        <div className='signupwith'>
                            <hr className='leftline' /><span>Alredy Have Account</span><hr className='rightline' />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup
