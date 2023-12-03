// src/UserProfile.tsx
import React from 'react';
import { useAuth } from "../../services/AuthContext";
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const UserProfile: React.FC = () => {
    const { currentUser, loading, signout } = useAuth();

    const handleSignout = () => {
        signout();
        alert('Cierre de sesión exitoso');
    };

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <body>
                <Header text="PROFILE" />
                <div className='register'>
                    {currentUser ? (
                        <div className="register-container">
                            <p className="register-item">Username: {currentUser.username}</p>
                            <p className="register-item">Email: {currentUser.email}</p>
                            <button  className="register-button" type="button" onClick={handleSignout}>Sign Out</button>
                        </div>
                    ) : (
                        <div className="register-container">
                        <p className="register-item">No User Info, SignIn or SignUp</p>
                        <a href='/signin'>
                        <button  className="register-button" >SignIn</button>
                        </a>
                        <a href='/signup'>
                        <button  className="register-button" >SignUp</button>
                        </a>
                        </div>
                    )}
                </div>

                <Menu />
            </body>
        </>
    );
};

export default UserProfile;
