import Header from "../../components/header/Header";
import Menu from "../../components/menu/Menu";
import "./Home.css";
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
  return (
    <>
      <body>
        <Header text="Home"/>
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}>
              





            </h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Menu />
      </body>
    </>
  );
}




const { Meta } = Card;

const App: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
  >
    <Meta title="Europe Street beat" description="www.instagram.com" />
  </Card>
);