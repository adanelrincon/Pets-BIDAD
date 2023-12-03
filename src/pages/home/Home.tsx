import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import petsItems1 from "../../services/petsData";
import petsItems2 from "../../services/petsData2";
import React from 'react';
import { Carousel } from 'antd';
import "./Home.css";
import { Link } from 'react-router-dom';

export default function Home() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const items1 = petsItems1;
  const items2 = petsItems2;
  return (
    <>
      <body>
        <Header text="Home" />
        {/* <Carousel afterChange={onChange}> */}
          <div className="home">
            <div className="home-container">
              {items1.map(item => (
                <Link key={item.id} to={`/pet/${item.id}`}>
                  <div className="home-item">
                    <img src={item.avatar} alt={item.pet} className="home-item-img" />
                    <p>{item.pet}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        {/* </Carousel> */}
        <Menu />
      </body>
    </>
  );
}
