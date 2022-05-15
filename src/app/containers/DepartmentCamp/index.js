/**
 *
 * DepartmentCamp
 *
 */

import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";
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
          <div className="d-flex flex-row-reverse mx-4 pb-2">
            <Link
              to="/departmentcampentry"
              className="button text-decoration-none"
            >
              ADD
            </Link>
          </div>
          <Table>
            <thead>
              <tr>
                <th>S.No.</th>
                <th>Organisation Name</th>
                <th>Organiser Name</th>
                <th>Address</th>
                <th>Ph.No.</th>
                <th></th>
              </tr>
            </thead>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

DepartmentCamp.propTypes = {};
