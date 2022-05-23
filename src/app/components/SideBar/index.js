/**
 *
 * SideBar
 *
 */

import React, { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import "./sideBarStyle.scss";

const sidebarNavItems = [
  {
    display: "Dashboard",
    icon: <i class="fa-solid fa-table-columns"></i>,
    to: "/",
    section: "",
  },
  {
    display: "Organisation",
    icon: <i class="fa-solid fa-sitemap"></i>,
    to: "/organisation",
    section: "organisation",
  },
  {
    display: "Department Camp",
    icon: <i class="fa-solid fa-campground"></i>,
    to: "/departmentcamp",
    section: "departmentcamp",
  },
  {
    display: "Department Outpatient",
    icon: <i class="fa-solid fa-bed"></i>,
    to: "/departmentoutpatient",
    section: "departmentoutpatient",
  },
  {
    display: "Public Health Center",
    icon: <i class="fa-solid fa-bed"></i>,
    to: "/departmentoutpatient",
    section: "departmentoutpatient",
  },
  {
    display: "Analytics",
    icon: <i className="fa-solid fa-chart-line"></i>,
    to: "/analytics",
    section: "analytics",
  },
];

const SideBar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sidebarRef = useRef();
  const indicatorRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNavItems.findIndex(
      (item) => item.section === curPath
    );
    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  return (
    <div className="sidebar">
      <div className="sidebar__logo pb-3">SRM</div>
      <div className="sidebarHorizontal mb-3" />
      <div ref={sidebarRef} className="sidebar__menu">
        <div ref={indicatorRef} className="sidebar__menu__indicator"></div>
        {sidebarNavItems.map((item, index) => (
          <Link to={item.to} key={index} className="text-decoration-none">
            <div
              className={`sidebar__menu__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="sidebar__menu__item__icon">{item.icon}</div>
              <div className="sidebar__menu__item__text">{item.display}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

SideBar.propTypes = {};

export default SideBar;
