import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory, useLocation } from 'react-router';




const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const icon = <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>

    const { signInUsingGoogle, signUpWithEmail, setUserName } = useAuth();
    const location = useLocation();
    const history = useHistory();
    let redirect_uri = location.state?.from || '/';
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

    const handleNameChange = e => {
        setName(e.target.value);

    };

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    };

    const handleReg = e => {
        e.preventDefault();
        signUpWithEmail(email, password)
            .then(
                result => {
                    redirect_uri = "/";
                    setUserName(name);
                    history.push(redirect_uri);

                }
            )
    };
    return (
        <div className="main">
            <div className="form-body mt-5">
                <h2>Register</h2>
                <form action="" onSubmit={handleReg}>
                    <div>
                        <input onBlur={handleNameChange} type="text" placeholder="your name" />
                    </div>
                    <div>
                        <input onBlur={handleEmailChange} type="email" placeholder="email" />
                    </div>
                    <div>

                        <input onBlur={handlePasswordChange} type="password" placeholder="password" />
                    </div>
                    <div>
                        <input type="password" placeholder="re-enter password" />
                    </div>
                    <div>
                        <button type="submit" className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p>Already have an account? <Link to="/login">Login</Link></p>
                <div>
                    <button className="btn btn-primary" onClick={handleGoogleLogIn}>{icon}</button>
                </div>

            </div>
        </div>
    );
};

export default Register;