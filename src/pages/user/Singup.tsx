// src/Signup.tsx
import React, { useState } from 'react';
import { useAuth } from "../../services/AuthContext";
import "./Newaccount.css";
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const Signup: React.FC = () => {
    const { signup } = useAuth();
    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const handleSignup = () => {
        // Simulación de lógica de autenticación
        if (signupData.username && signupData.email && signupData.password) {
            signup(signupData);
            alert('Usuario registrado exitosamente');
        } else {
            alert('Por favor, complete todos los campos');
        }
    };

    return (
        <>
            <body>
                <Header text="Sign Up" />
                <div className='register'>
                    <form className="register-container">
                        <label >
                            <input
                                type="text"
                                value={signupData.username}
                                className="register-item"
                                onChange={(e) => setSignupData({ ...signupData, username: e.target.value })}
                                placeholder="Username"
                            />
                        </label>

                        <label>
                            <input
                                type="email"
                                className="register-item"
                                value={signupData.email}
                                onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                                placeholder="Mail"
                            />
                        </label>

                        <label>
                            <input
                                type="password"
                                className="register-item"
                                value={signupData.password}
                                onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}
                                placeholder="Password"
                            />
                        </label>

                        <button  className="register-button"  type="button" onClick={handleSignup}>Signup</button>
                    </form>
                </div>


                <Menu />
            </body>
        </>
    );
};

export default Signup;
