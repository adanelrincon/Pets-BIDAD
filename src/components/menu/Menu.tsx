import { BellOutlined, HeartFilled, HomeOutlined, ShoppingCartOutlined, ShoppingOutlined } from "@ant-design/icons";
import "./Menu.css";

export default function Menu() {
  return (
    <footer>
      <div className="menu">
        <div className="menu-item">
          <a href="/shop"><ShoppingOutlined /></a>
        </div>
        <div className="menu-item">
          <a href="/empty"><ShoppingCartOutlined /></a>
        </div>
        <div className="menu-item">
          <a href="/home"><HomeOutlined /></a>
        </div>
        <div className="menu-item">
          <a href="/wall"><HeartFilled /></a>
        </div>
        <div className="menu-item">
          <a href="/reminder"><BellOutlined /></a>
        </div>
      </div>
    </footer>
  );
}