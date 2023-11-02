import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Newaccount.css";

export default function Newaccount() {
    const goHome = () => {
        window.location.href = '/home';
    };
    return (
        <>
            <body>
                <Header text="Create account" />
                <div className="register">
                    <div className="register-container">
                        <input className="register-item"
                            type="text"
                            placeholder="Name"
                        />
                        <br />
                        <input className="register-item"
                            type="text"
                            placeholder="Last Name"
                        />
                        <br />
                        <input className="register-item"
                            type="text"
                            placeholder="Email"
                        />
                        <br />
                        <input className="register-item"
                            type="password"
                            placeholder="Password"
                        />
                        <br />
                        <input className="register-item"
                            type="text"
                            placeholder="Birthday"
                        />
                        <br />
                        <input className="register-item"
                            type="number"
                            placeholder="Phone"
                        />
                        <br />

                        <button className="register-button" onClick={goHome}>Create Account</button>
                    </div>
                </div>


                <Menu />
            </body>
        </>
    )
}