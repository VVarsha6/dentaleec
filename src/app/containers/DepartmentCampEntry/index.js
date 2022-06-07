/**
 *
 * DepartmentCampEntry
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
// import { Link } from "react-router-dom";
import "./departmentCampEntryStyle.scss";
import PatientForm from "../../components/PatientForm";

export default function DepartmentCampEntry() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">DEPARTMENT CAMP ENTRY</p>
          <PatientForm />
        </Col>
      </Row>
    </Container>
  );
}

DepartmentCampEntry.propTypes = {};
