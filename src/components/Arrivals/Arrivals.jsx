import Card from "../Card/Card";
import "./arravals.css";

import cat01Img from "./../../img/categories/cat-01.jpeg";
import cat02Img from "./../../img/categories/cat-02.jpeg";
import cat03Img from "./../../img/categories/cat-03.jpeg";

const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="title-2">NEW ARRIVALS</h2>
        </div>
      </div>
      <div className="arrivals__cards">
        <Card title="Hoodies & Sweetshirt" img={cat01Img} />
        <Card title="Coats & Parkas" img={cat02Img} />
        <Card title="Tees & T-Shirt" img={cat03Img} />
      </div>
    </section>
  );
};

export default Arrivals;
