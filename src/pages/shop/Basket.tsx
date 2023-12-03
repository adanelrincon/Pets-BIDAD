import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import { useParams } from 'react-router-dom';
import { getItemById } from "../../services/shopList";
import { Card } from 'antd';
import "./Basket.css";
const { Meta } = Card;

const goBasket = () => {}

export default function Basket() {
    const { itemId } = useParams(); // Obtener el ID del parámetro de la URL
    const item = getItemById(Number(itemId));
    //const price = item?.price;
    return (
        <>
            <body>
                <Header text="Basket" />

                {item ? (
                    <div>
                        <div className="basket-container">
                            <div className="basket-item" key={item.id}>
                                <Card className="basket-card" cover={<img alt="example" src={item.image} />}>
                                    <Meta title={item.name} description={item.info} />
                                    <Meta title={item.price + "€"} />
                                </Card>
                            </div>
                        </div>
                        <div className="buy-basket">
                        <div className="buy-container">
                            <div className="buy-item">
                                <p>Basket Total: {item.price + "€"}</p>
                            </div>
                            <div className="button-basket-container">
                                <button className="button-basket">Go Pay</button>
                                <a href="/empty">
                                <button className="button-basket">Delete Card</button>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                ) : (
                    <p>Item not found in the cart.</p>
                )}
                <Menu />
            </body>
        </>
    );
}