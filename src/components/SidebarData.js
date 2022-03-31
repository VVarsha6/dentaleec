import React from "react";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as FaIcons from 'react-icons/fa';
  
export const SidebarData = [
  {
    title: "Deptcamp",
    path: "/Deptcamp",
    icon: <FaIcons.FaCampground/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  
    subNav: [
      {
        title: "Turnover",
        path: "/Deptcamp/Turnover",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Screening",
        path: "/Deptcamp/Screening",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    title: "DeptOP",
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
    title: "Satcamp",
    path: "/Satcamp",
    icon: <FaIcons.FaSatellite />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
  {
    title: "Tcc",
    path: "/Tcc",
    icon: <FaIcons.FaPersonBooth/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
  },
];