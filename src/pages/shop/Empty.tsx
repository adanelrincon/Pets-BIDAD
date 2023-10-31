import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";

export default function Empty() {
    return (
        <>
            <Header text="Basket" />

            <div>
                <p>IT SEEMS EMPTY,
                    TAKE A LOOK ON
                    THE SHOP AND ADD
                    SOME PRODUCTS
                </p>
            </div>

            <Menu />
        </>
    )
}