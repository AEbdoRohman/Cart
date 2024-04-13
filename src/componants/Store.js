import React from "react";
import { Col, Row } from "react-bootstrap";
import Storeitems from "../data/StoreItems.json";
import Storeitem from "./Storeitem";
const Store = () => {
  return (
    <>
      <h1>Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {Storeitems.map((item) => (
          <Col key={item.id}>
            <Storeitem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Store;
