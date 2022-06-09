/**
 *
 * DepartmentCamp
 *
 */

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "reactstrap";
import SidebarLayout from "../../components/SidebarLayout";
import TitleBar from "../../components/TitleBar";
import { getAllInfo } from "../../redux/Info/infoSlice";
import { useEffect } from "react";
import { db } from "../../firebase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import "./departmentCampStyle.scss";

export default function DepartmentCamp() {
  const patientsCollectionRef = collection(db, "Patient-form");
  const [patient, setPatient] = useState([]);
  // const data = useSelector(getAllInfo);
  useEffect(() => {
    const getPatient = async () => {
      const data = await getDocs(patientsCollectionRef);
      setPatient(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPatient();
    console.log(patient);
  }, []);

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
                <th>Patient Name</th>
                <th>Organiser Name</th>
                <th>age</th>
                <th>Ph.No.</th>
              </tr>
            </thead>
            <tbody>
              {
              patient.length &&
                patient.map((patient) => (
                  <>
                    <tr>
                      <td>{patient.id}</td>
                      <td>{patient.pname}</td>
                      <td>{patient.oname}</td>
                      <td>{patient.age}</td>
                      <td>{patient.contactnumber}</td>
                    </tr>
                  </>
                ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

DepartmentCamp.propTypes = {};
