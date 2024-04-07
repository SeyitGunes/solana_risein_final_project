import React from "react";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/car-item.css";

const CarItem = (props) => {
  const { imgUrl, model, carName, price, speed, previousOwners } = props.item;

  return (
    <Col lg="4" md="4" sm="6" className=" ">
      <div className="car__item bg-stone-300">
        <div className="car__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="car__item-content mt-4 ">
          <h4 className="section__title text-center">{carName}</h4>
          <div>
            <span className="border-2 border-[#b50058] py-0.5 px-1 text-sky-700 font-semibold mr-2">
              Previous Owners:{" "}
            </span>
            {previousOwners.map((item) => (
              <span className=" mr-1.5">{item.name}</span>
            ))}
            ...
          </div>

          <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-car-line"></i> {model}
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-dollar-line"></i> {price}000$
            </span>
            <span className=" d-flex align-items-center gap-1">
              <i class="ri-timer-flash-line"></i> {speed}
            </span>
          </div>

          <button className=" w-50 car__item-btn car__btn-rent">
            <Link to={`/cars/${carName}`}>Buy</Link>
          </button>

          <button className=" w-50 car__item-btn car__btn-details">
            <Link to={`/cars/${carName}`}>Details</Link>
          </button>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
