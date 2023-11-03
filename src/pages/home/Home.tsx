import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Home.css";
import petsItems1 from "../../services/petsData";
import React from 'react';
import { Carousel } from 'antd';
import { Card } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 20,
  marginTop: '6em',
  height: '38em',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  const items = petsItems1;
  return (
    <>
      <body>
        <Header text="Home" />
        <Carousel afterChange={onChange}>
          <div className="home-container">
            {items.map(item => (
              <div className="home-item" key={item.id}>
                <p>{item.pet}</p>
              </div>
            ))}
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
        </Carousel>
        <Menu />
      </body>
    </>
  );
}