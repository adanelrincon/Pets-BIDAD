import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import "./Header.css";
import { UserOutlined } from "@ant-design/icons";


interface HeaderProps {
    text: string;
}

export default function Header({ text }: HeaderProps) {
    return (
        <header>
            <h1>{text}</h1>
            <div className="user-icon">
                <a className="user-icon-a" href="/user"><UserOutlined /></a>
            </div>
        </header>
    );
}
