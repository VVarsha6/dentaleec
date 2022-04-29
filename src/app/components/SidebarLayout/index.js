/**
 *
 * SidebarLayout
 *
 */

import React from "react";
import { Col } from "reactstrap";
import SideBar from "../SideBar";
import "./sidebarLayoutStyle.scss";

function SidebarLayout() {
  return (
    <div className="sidebarLayout">
      <Col className="sidebarLayout position-relative">
        <SideBar />
      </Col>
    </div>
  );
}

SidebarLayout.propTypes = {};

export default SidebarLayout;
