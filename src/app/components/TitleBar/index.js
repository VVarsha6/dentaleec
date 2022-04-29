/**
 *
 * TitleBar
 *
 */

import React from "react";
import { Row } from "reactstrap";

import "./titleBarStyle.scss";

function TitleBar() {
  return (
    <Row>
      <div className="titleProject d-flex justify-content-center">
        SRM Dental College
      </div>
      <hr />
    </Row>
  );
}

TitleBar.propTypes = {};

export default TitleBar;
