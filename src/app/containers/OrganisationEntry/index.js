/**
 *
 * OrganisationEntry
 *
 */

import React from "react";
import { Container, Row, Col } from "reactstrap";
import OrganisationForm from "../../components/OrganisationForm";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import { Link } from "react-router-dom";
import "./organisationEntryStyle.scss";

export default function OrganisationEntry() {
  return (
    <Container fluid className="mainLayout m-3">
      <TitleBar />
      <Row className="subLayout">
        <Col xs="3" className="subsLayout">
          <SidebarLayout />
        </Col>
        <Col xs="9" className="formLayout">
          <p className="primaryHeading">ORGANISATION ENTRY</p>
          <OrganisationForm />
          <div className="d-flex flex-row-reverse">
            <Link
              to="/organisation"
              className="cssbuttons-io-button mt-3 mb-3 mx-2"
            >
              {" "}
              Next
              <div className="icon">
                <svg
                  height="24"
                  width="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 0h24v24H0z" fill="none"></path>
                  <path
                    d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

OrganisationEntry.propTypes = {};
