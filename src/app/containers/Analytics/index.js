/**
 *
 * Analytics
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import "./analyticsStyle.scss";

export default function Analytics() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col lg="2" md="3" xs="4" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col className="formLayout">
          <p className="primaryHeading">ANALYTICS</p>
        </Col>
      </Row>
    </Container>
  );
}

Analytics.propTypes = {};
