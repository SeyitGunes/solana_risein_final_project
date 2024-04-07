import React from "react";
import { Container } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";

import CommonSection from "../components/UI/CommonSection";

const Blog = () => {
  return (
    <Helmet title="Blogs">
      <section>
        <Container>
          {" "}
          <CommonSection title="COMING SOON..." />
        </Container>
      </section>
    </Helmet>
  );
};

export default Blog;
