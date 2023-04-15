import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from "./firebaseConfig";
import { NavLink, useNavigate } from 'react-router-dom'
import './Register.css';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                alert("Login Successfully")
                navigate("/Home")
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage)
                console.log(errorCode, errorMessage)
            });

    }

    return(
        <>
            <div className="container-register">
                <div className="main">

                        <form>
                            <div className="head-register">
                                <h1>Login</h1>
                            </div>

                            <div>
                                <label htmlFor="email-address">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="password">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    required
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>

                            <div>
                                <button style={{width:"100%"}}
                                    onClick={onLogin}
                                >
                                    Login
                                </button>
                            </div>

                            <p className="text-sm text-white text-center">
                                No account yet? {' '}
                                <NavLink to="/">
                                    Sign up
                                </NavLink>
                            </p>
                        </form>


                </div>
            </div>


        </>
    )
}

export default Login