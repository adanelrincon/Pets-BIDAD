import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Empty.css";

export default function Empty() {
    return (
        <>
        <body>
            <Header text="Basket" />
            <div className="empty-container">
                
            
            <div className="empty-item">
                <p className="empty-text">IT SEEMS EMPTY,
                    TAKE A LOOK ON
                    THE SHOP AND ADD
                    SOME PRODUCTS
                </p>
                <div className="empty-buttom-container">
                <Link to={`/shop`}>
                <button className="empty-button-item">RETURN TO SHOP</button>
                </Link>
                </div>
            </div>
            </div>

            <Menu />
            </body>
        </>
    )
}