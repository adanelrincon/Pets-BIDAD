import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import jasonimg from "../../assets/img/jasonimg";
import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, { useEffect, useState } from 'react';
import { Avatar, Divider, List, Skeleton } from 'antd';
import { Link } from 'react-router-dom';
import "./Shop.css";
import listItems from "../../services/shopList";
import { Card } from 'antd';
const { Meta } = Card;
const { Search } = Input;

const ShearchBar: React.FC = () => (
    <Space direction="vertical">
        <Search placeholder="find the best quality" />
    </Space>
);


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
                        <Search placeholder="Search products" onSearch={handleSearch} enterButton />
                    </div>
                    {/* <ShearchBar /> */}

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



