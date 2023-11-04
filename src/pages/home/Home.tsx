import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import petsItems1 from "../../services/petsData";
import petsItems2 from "../../services/petsData2";
import React from 'react';
import { Carousel } from 'antd';
import "./Home.css";

const contentStyle: React.CSSProperties = {
  margin: 20,
  marginTop: '10vh',
  height: '38em',
  color: '#fff',
  borderRadius: 20,
  textAlign: 'center',
  background: '#333333',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 45,
};

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
        <Carousel afterChange={onChange}>
          <div >
            <div style={contentStyle}>
              {items1.map(item => (
                <div key={item.id} className="home-item">
                  <img src={item.avatar} alt={item.pet} style={{ width: '30vw', height: '20vh', borderRadius: '30px' }}></img>
                  <p>{item.pet}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div style={contentStyle}>
              {items2.map(item => (
                <div key={item.id} className="home-item">
                  <a href="/shop">
                  <img src={item.avatar} alt={item.pet} style={{ width: '30vw', height: '20vh', borderRadius: '30px' }}></img>
                  <p>{item.pet}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Carousel>
        <Menu />
      </body>
    </>
  );
}
