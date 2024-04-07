import React from "react";

import Helmet from "../components/Helmet/Helmet";

import { Container, Row } from "reactstrap";
import carData from "../assets/data/carData";

import CarItem from "../components/UI/CarItem";

const Home = () => {
  return (
    <Helmet title="Home">
      <section>
        <Container>
          <Row style={{ marginTop: -40 }}>
            {carData.slice(0, 6).map((item) => (
              <CarItem item={item} key={item.id} />
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
