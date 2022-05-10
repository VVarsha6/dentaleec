/**
 *
 * DepartmentOutpatient
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import "./departmentOutpatientStyle.scss";

export default function DepartmentOutpatient() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">DEPARTMENT OUTPATIENT</p>
        </Col>
      </Row>
    </Container>
  );
}

DepartmentOutpatient.propTypes = {};
