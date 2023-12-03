import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import AddComent from "../../services/commentData";
import "./Wall.css";

export default function Wall() {
 
    return (
        <>
            <body>
                <Header text="Wall" />
                <div className="wall">
                    <AddComent />
                </div>
                <Menu />
            </body>
        </>
    )
}