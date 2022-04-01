import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from 'react-icons/fa';
  
export const SidebarData = [
  {
    title: "Department Camp",
    path: "/Deptcamp",
    icon: <FaIcons.FaCampground/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    // subNav: [
    //   {
    //     title: "Turnover Camp",
    //     path: "/Deptcamp/Turnover",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    //   {
    //     title: "Screening Camp",
    //     path: "/Deptcamp/Screening",
    //     icon: <IoIcons.IoIosPaper />,
    //   },
    // ],
  },
  {
    title: "Department OP",
    path: "/DeptOP",
    icon: <FaIcons.FaSyringe/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
   iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Analytics",
    path: "/Analytics",
    icon: <FaIcons.FaChartBar/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Satellite Center",
    path: "/Satcamp",
    icon: <FaIcons.FaSatellite />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "TCC",
    path: "/Tcc",
    icon: <FaIcons.FaPersonBooth/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "View Data",
    path: "/ViewData",
    icon: <FaIcons.FaSyringe/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
   iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Kovur Center",
    path: "/Kovur",
    icon: <FaIcons.FaSyringe/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
   iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];