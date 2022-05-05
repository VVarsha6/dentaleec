/**
 *
 * Organisation
 *
 */

import React from "react";
import { Container, Row, Col, Table } from "reactstrap";
import OrganisationForm from "../../components/OrganisationForm";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import "./organisationStyle.scss";

export default function Organisation() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">ORGANISATION</p>
          <Table>
            <thead>
              <tr>
              <th>
                S.No.
              </th>
              <th>
                Organisation Name
              </th>
              <th>
                Organiser Name
              </th>
              <th>
                Address
              </th>
              <th>
                Ph.No.
              </th>
              <th>
              </th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

Organisation.propTypes = {};
