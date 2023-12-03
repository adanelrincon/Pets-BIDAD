// src/Signin.tsx
import React, { useState } from 'react';
import { useAuth } from "../../services/AuthContext";
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const Signin: React.FC = () => {
  const { signin } = useAuth();
  const [signinData, setSigninData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleSignin = () => {
    if (signinData.username && signinData.email && signinData.password) {
      signin(signinData);
      alert('Inicio de sesión exitoso');
  } else {
      alert('Por favor, complete todos los campos');
  }
  };

  return (
    <>
      <body>
        <Header text="Sign In" />
        <div className='register'>
          <form className="register-container">
            <label >
              <input
                type="text"
                value={signinData.username}
                className="register-item"
                onChange={(e) => setSigninData({ ...signinData, username: e.target.value })}
                placeholder="Username"
              />
            </label>

            <label>
              <input
                type="text"
                value={signinData.email}
                className="register-item"
                onChange={(e) => setSigninData({ ...signinData, email: e.target.value })}
                placeholder="Mail"
              />
            </label>

            <label>
              <input
                type="password"
                value={signinData.password}
                className="register-item"
                onChange={(e) => setSigninData({ ...signinData, password: e.target.value })}
                placeholder="Password"
              />
            </label>
            <button className="register-button" type="button" onClick={handleSignin}>Signin</button>
          </form>
        </div>
        <Menu />
      </body>
    </>
  );
};

export default Signin;
