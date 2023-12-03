import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import { Input } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Shop.css";
import listItems from "../../services/shopList";
import { Card } from 'antd';
const { Meta } = Card;
const { Search } = Input;

export default function Shop() {
    const items = listItems;
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (value: React.SetStateAction<string>) => {
        setSearchQuery(value);
    };

    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
      
    return (
        <>
            <body>
                <Header text="Shop" />
                <div className="search-bar-container">
                    <div className="search-bar-item">
                        <Search placeholder="Search products" onSearch={handleSearch} enterButton/>
                    </div>
                </div>
                <div className="card-container">
                    {filteredItems.map(item => (
                        <div className="card-item" key={item.id}>
                            <Link to={`/basket/${item.id}`}>
                            <Card className="card" cover={<img alt="example" src={item.image} />}>
                                <Meta title={item.name} description={item.info} />
                            </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="menu-shop"><Menu /></div>
            </body >
        </>
    )
}



