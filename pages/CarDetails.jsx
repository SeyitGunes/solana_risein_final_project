import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import BookingForm from "../components/UI/BookingForm";
import PaymentMethod from "../components/UI/PaymentMethod";

const CarDetails = () => {
  const { slug } = useParams();

  const singleCarItem = carData.find((item) => item.carName === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleCarItem]);

  return (
    <Helmet title={singleCarItem.carName}>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <img src={singleCarItem.imgUrl} alt="" className="w-100" />
            </Col>

            <Col lg="6">
              <div className="car__info">
                <h2 className="section__title">{singleCarItem.carName}</h2>

                <div className=" d-flex align-items-center gap-5 mb-4 mt-3">
                  <span className=" d-flex align-items-center gap-2">
                    <span style={{ color: "yellow" }}>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                      <i class="ri-star-s-fill"></i>
                    </span>

                    <span className="section__description">
                      ({singleCarItem.rating} ratings)
                    </span>
                  </span>
                </div>

                <p className=" text-stone-200">{singleCarItem.description}</p>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "4rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-roadster-line"
                      style={{ color: "#b50058" }}
                    ></i>
                    {singleCarItem.model}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-settings-2-line"
                      style={{ color: "#b50058" }}
                    ></i>
                    {singleCarItem.automatic}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-timer-flash-line"
                      style={{ color: "#b50058" }}
                    ></i>
                    {singleCarItem.speed}
                  </span>
                </div>

                <div
                  className=" d-flex align-items-center mt-3"
                  style={{ columnGap: "2.8rem" }}
                >
                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i class="ri-map-pin-line" style={{ color: "#b50058" }}></i>{" "}
                    {singleCarItem.gps}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-wheelchair-line"
                      style={{ color: "#b50058" }}
                    ></i>{" "}
                    {singleCarItem.seatType}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i
                      class="ri-building-2-line"
                      style={{ color: "#b50058" }}
                    ></i>{" "}
                    {singleCarItem.brand}
                  </span>
                </div>
                <p className="mt-6 text-center text-[#b50058] font-semibold text-lg border-b-2 border-[#b50058]">
                  Previous Owners
                </p>
                <div className="flex text-white">
                  <div className="ml-4">
                    <p className="font-semibold text-lg">Owner</p>
                    {singleCarItem.previousOwners.map((item) => (
                      <p className=" mr-3">{item.name}</p>
                    ))}
                  </div>
                  <div className=" ml-36">
                    <p className="font-semibold text-lg ">Price </p>
                    {singleCarItem.previousOwners.map((item) => (
                      <p className=" mr-3  ">{item.price}00$</p>
                    ))}
                  </div>
                  <div className=" ml-36">
                    <p className="font-semibold text-lg ">NFT </p>
                    {singleCarItem.previousOwners.map((item) => (
                      <p className=" mr-3  ">NFT IS HERE</p>
                    ))}
                  </div>
                </div>
              </div>
            </Col>

            <Col lg="7" className="mt-5">
              <div className="booking-info mt-5">
                <h5 className="mb-4 fw-bold ">Booking Information</h5>
                <BookingForm />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="payment__info mt-5">
                <h5 className="mb-4 fw-bold ">Payment Information</h5>
                <PaymentMethod />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarDetails;
