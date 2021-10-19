import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { signInUsingGoogle, signInUsingEmail } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then(
                result => {
                    history.push(redirect_uri);
                }
            )
    };
    const handleEmailChange = e => {
        setEmail(e.target.value);

    };
    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };
    const handleLogin = e => {
        e.preventDefault();
        signInUsingEmail(email, password)
            .then(
                result => {
                    history.push(redirect_uri);
                }
            )
    };
    return (
        <div className="main">
            <h2 className="mt-5">Login</h2>
            <div className="form-body">
                <form className="mb-3" onSubmit={handleLogin}>
                    <div>
                        <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="your email" />
                    </div>
                    <div>
                        <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="password" />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p>New to amazon? <Link to="/register">Create Account</Link></p>
                <div>
                    <button onClick={handleGoogleLogIn} className="btn btn-primary">Google Sign In</button>
                </div>
            </div>
        </div>
    );
};

export default Login;