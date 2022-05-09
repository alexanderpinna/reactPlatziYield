import React from 'react';
import '../styles/Login.scss';

const Login = () => {
    return (
        <div className="Login">
            <div className="Login-container">
                <h1 className="title">My acount</h1>
                <form action className="form">
                    <label htmlFor="name" className="label">Name</label>
                    <input type="text" id="name" placeholder="Camila Yokko" className="input input-name" />
                    <label htmlFor="email" className="label">Email address</label>
                    <input type="text" id="email" placeholder="camilayokko@gmail.com" className="input input-email" />
                    <label htmlFor="password" className="label">Password</label>
                    <input type="password" id="password" placeholder="*********" className="input input-password" />
                    <input type="submit" defaultValue="Edit" className="primary-button login-button" />
                </form>
            </div>
        </div>

    );
}

export default Login;