import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Welcome.css";

export default function Welcome() {
    const goSignIn = () => {
        window.location.href = '/signin';
    };

    const goSignUp = () => {
        window.location.href = '/signup';
    };

    return (
        <>
            <body>
                <Header text="Welcome" />
                <div className="welcome">
                    <div className="welcome-container">
                        <p className="welcome-item">If you already have an account SignIn</p>
                        <button className="welcome-button" onClick={goSignIn}>SignIn</button>
                        <p className="welcome-item">If you are new you can SignUp</p>
                        <button className="welcome-button" onClick={goSignUp}>SignUp</button>
                    </div>
                </div>
                <Menu />
            </body>
        </>
    );
};
