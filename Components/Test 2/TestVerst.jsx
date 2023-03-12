import React from "react";
import welbex from "../../Public/part2.png";
import vector from "../../Public/Vector.png";
import teleg from "../../Public/telegram.png";
import viber from "../../Public/viber.png";
import whatsapp from "../../Public/whatsapp.png";
import "./Testverst.css";

const TestVerst = () => {
  return (
    <div className="desktop">
      <div className="header">
        <div className="logo">
          <img src={welbex} className="welb" />
          <img src={vector} className="vector"/>
          <div className="logoText">
            крупный интегратор CRM в Росcии и ещё 8 странах
          </div>
        </div>
        <div className="linksMain">
          <ul className="links">
            <li className="servises">Услуги</li>
            <li className="widgets">Виджеты</li>
            <li className="integration">Интеграции</li>
            <li className="cases">Кейсы</li>
            <li className="sertif">Сертификаты</li>
          </ul>
        </div>
          <div className="phone">+7 555-55-55</div>
          <img src={teleg} alt="" className="teleg"/>
            <img src={viber} alt="" className="viber"/>
            <img src={whatsapp} alt="" className="whatsapp" />
      </div>
      <div className="purpleBall"></div>
      <div className="redBall"></div>
      <div className="smallBall"></div>
      <div className="purpleLight"></div>
      <div className="redLight"></div>
      <div className="body">
        <div className="leftMain">
        <div className="leftText">
            Зарабатывайте больше
        </div>
        <div className="leftWelbex">c WELBEX</div>
        <div className="leftBottom">
            Развиваем и контролируем продажи за вас
        </div>
        </div>
        <div className="rightMain">
            <div className="topTextWhite">Вместе с <span className="topText">БЕСПЛАТНОЙ КОНСУЛЬТАЦИЕЙ</span> мы дарим:</div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
    
  );
};

export default TestVerst;
