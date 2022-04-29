/**
 *
 * Organisation
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import OrganisationForm from "../../components/OrganisationForm";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import "./organisationStyle.scss";

export default function Organisation() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col lg="2" md="3" xs="4" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col className="formLayout">
          <p className="primaryHeading">ORGANISATION ENTRY</p>
          <OrganisationForm />
        </Col>
      </Row>
    </Container>
  );
}

Organisation.propTypes = {};
