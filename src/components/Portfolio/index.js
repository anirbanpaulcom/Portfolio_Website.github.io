import React from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import PortfolioData from '../../data/portfolio.json';
import p from '../../assets/images/img-1.jpg'

const Portfolio = () => {
    const [ letterClass, setletterClass ] = useState('text-animation');
    console.log(PortfolioData);

      useEffect(() => {
           const timer = setTimeout(() => {
               setletterClass('text-animate-hover');
           }, 3000);

           return () => {
               clearTimeout(timer);
           }
      });

     const renderPortfolio = (portfolio) => {
        return (
              <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img src={p} className="portfolio-image" alt="portfolio" />
                                <div className="content">
                                     <p className="title">{port.title}</p>
                                     <h4 className="description">{port.description}</h4>
                                     <button className="btn" onClick={() => window.open(port.url)}>View</button>
                                </div>
                            </div>
                        )
                    })
                }
              </div>
        );
     }

    return (
        <>
        <div className="container portfolio-page">
             <h1 className="page-title">
                <AnimatedLetters letterClass={letterClass}
                   strArray={"Project".split("")}
                   idex={15}
                />
             </h1>
            <div>{renderPortfolio(PortfolioData.portfolio)}</div>
          </div>
        <Loader type ="pacman" />
       </>
    );
}

export default Portfolio;
