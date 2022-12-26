import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card";
import "./index.css"
import "./Sdata"
import Sdata from "./Sdata";
ReactDOM.render(
  <>
    {/* <div className="cards">
      <div className="card">
        <img src="https://www.denofgeek.com/wp-content/uploads/2021/06/money-heist.jpg?resize=768%2C432" alt="Netflix  series img" className="card_img" />
        <div className="card__info">
          <span className="card_category"> A Netflix Origninal </span>
          <h3 className="card__title">Money Heist </h3>
          <a href="https://www.netflix.com/in/title/80192098" target="_blank">
            <button> Watch Now </button>
          </a>
        </div>
      </div>
    </div> */}
    {/* THin is we need multple card so better create component for it */}
    {/* <Card /> */}
    {/* Now since we need to make diffrent cards we need to make sur that links */}
    <h1 className="heading">Series/Movies I Love</h1>
    <Card imgsrc={Sdata[0].imgsrc} moviename= {Sdata[0].moviename}link={Sdata[0].link}
    />
    <Card imgsrc={Sdata[1].imgsrc} moviename={Sdata[1].moviename} link={Sdata[1].link}/ >
    <Card imgsrc={Sdata[2].imgsrc} moviename={Sdata[2].moviename} link={Sdata[2].link}/ >

    <Card imgsrc={Sdata[3].imgsrc} moviename={Sdata[3].moviename} link={Sdata[3].link}/ >

    <Card imgsrc={Sdata[4].imgsrc} moviename={Sdata[4].moviename} link={Sdata[4].link}/ >

  </>, document.getElementById("root")
); 