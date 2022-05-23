/**
 *
 * Dashboard
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import "./dashboardStyle.scss";
import { useExample } from "../../Context/example-context";

export default function Dashboard() {
  const { tests } = useExample();
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">DASHBOARD</p>
          <h1>{tests}</h1>
        </Col>
      </Row>
    </Container>
  );
}

Dashboard.propTypes = {};
