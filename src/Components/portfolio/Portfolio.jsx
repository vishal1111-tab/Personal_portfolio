import { useEffect, useState } from "react";
import "./portfolio.scss";
import { featuredPortfolio, webPortfolio, designPortfolio } from "../../data";
import PortfolioList from "../PortfolioList/PortFolioList";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);

  const list = [
    { id: "featured", title: "Featured" },
    { id: "web", title: "Web App" },

    { id: "design", title: "Design" },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="fullContainer">
      <div className="portfolio" id="portfolio">
        <h1>Portfolio</h1>
        <ul>
          {list.map((item) => (
            <PortfolioList
              key={item.id}
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
            />
          ))}
        </ul>
      </div>
      <div className="container">
        {data.map((item) => (
          <div key={item.id} className="item">
            <img src={item.img} alt="" />
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <ul>
              {item.skill.map((e, index) => (
                <li key={index}>{e}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
