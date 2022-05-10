/**
 *
 * DepartmentCamp
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import OrganisationForm from "../../components/OrganisationForm";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";

import "./departmentCampStyle.scss";

export default function DepartmentCamp() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">DEPARTMENT CAMP</p>
          <OrganisationForm />
        </Col>
      </Row>
    </Container>
  );
}

DepartmentCamp.propTypes = {};
