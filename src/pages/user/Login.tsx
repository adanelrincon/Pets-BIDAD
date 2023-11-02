import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Login.css";

export default function Login() {
    const goHome = () => {
        window.location.href = '/home';
    };

    const goCreateAccount = () => {
        window.location.href = '/register';
    };

    return (
        <>
            <body>
                <Header text="Log-In" />
                <div className="login">
                    <div className="login-container">
                        <input className="login-item"
                            type="text"
                            placeholder="Email"
                        />
                        <br />
                        <input className="login-item"
                            type="password"
                            placeholder="Password"
                        />
                        <br />
                        <button className="login-button" onClick={goHome}>Log-in</button>

                        <button className="login-button" onClick={goCreateAccount}>Create Account</button>
                    </div>
                </div>
                <Menu />
            </body>
        </>
    );
};
