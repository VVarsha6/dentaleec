/**
 *
 * PatientForm
 *
 */

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupSchema from "../YupSchema";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./patientFormStyle.scss";
import { fetchData, getAllInfo } from "../../redux/Info/infoSlice";
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
function PatientForm() {
  // const [newYellow, setNewYellow] = useState("");
  // const [newpink, setnewPink] = useState("");
  // const [newid, setnewId] = useState("");
  // const [newpname, setnewPname] = useState("");
  // const [newoname, setnewOname] = useState("");
  // // const [gender, setGender] = useState("");
  // const [newage, setnewAge] = useState("");
  // const [newcontactnumber, setnewContactnumber] = useState("");
  // const [newdiagnosis, setnewDiagnosis] = useState("");

  // const data = useSelector(getAllInfo);

  const [yellow, setYellow] = useState("");
  const [pink, setPink] = useState("");
  const [id, setId] = useState("");
  const [pname, setPname] = useState("");
  const [oname, setOname] = useState("");
  // const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [contactnumber, setContactnumber] = useState("");
  const [diagnosis, setDiagnosis] = useState("");

  const [patient, setPatient] = useState([]);
  const patientsCollectionRef = collection(db, "Patient-form");

  // const createUser = async () => {
  //   await addDoc(usersCollectionRef, {
  //     yellow: Number(newYellow),
  //     pink: Number(newPink),
  //     id: Number(newID),
  //     pname: newPName,
  //     oname: newOName,
  //     age: Number(newAge),
  //     contactnumber: newContactNumber,
  //     diagnosis: newDiagnosis,
  //   });
  // };

  const dispatch = useDispatch();

  const {
    register,
    formState: { errors },
    // handleSubmit,
  } = useForm({ resolver: yupResolver(YupSchema) });

  const storeData = async () => {
    // const data = await getDocs(usersCollectionRef);
    await addDoc(patientsCollectionRef, { 
      // name: newName, age: Number(newAge) 
      yellow: Number(yellow),
      pink: Number(pink),
      id: Number(id),
      pname: pname,
      oname: oname,
      age: Number(age),
      contactnumber: Number(contactnumber),
      diagnosis: diagnosis
     });
    // set
    // dispatch(fetchData([...data, array]));
  };

  return (
    <Container fluid>
      <Row>
        <form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <Row className="formContents w-50">
              <Col sm={3}>
                <p className="formNames">Yellow</p>
              </Col>
              <Col sm={8}>
                <input
                  placeholder="Yellow Book Id"
                  type="text"
                  className="formFirst"
                  value={yellow}
                  onChange={(e) => setYellow(e.target.value)}
                />
                <p className="warning">{errors.name?.message}</p>
              </Col>
            </Row>
            <Row className="formContents w-50">
              <Col sm={3}>
                <p className="formNames">Pink</p>
              </Col>
              <Col sm={8}>
                <input
                  placeholder="Pink Book Id"
                  type="text"
                  className="formFirst"
                  value={pink}
                  onChange={(e) => setPink(e.target.value)}
                />
                <p className="warning">{errors.name?.message}</p>
              </Col>
            </Row>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Patient ID</p>
            </Col>
            <Col sm={8}>
              <input
                placeholder="Patient ID"
                type="text"
                className="formFirst"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <p className="warning">{errors.name?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Patient Name</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("name")}
                placeholder="Patient Name"
                type="text"
                className="formFirst"
                value={pname}
                onChange={(e) => setPname(e.target.value)}
              />
              <p className="warning">{errors.name?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Organisation Name</p>
            </Col>
            <Col sm={8}>
              <input
                placeholder="Organisation Name"
                type="text"
                className="formFirst"
                value={oname}
                onChange={(e) => setOname(e.target.value)}
              />
              <p className="warning">{errors.name?.message}</p>
            </Col>
          </Row>
          {/* <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Gender</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("gender")}
                placeholder="Gender"
                type="text"
                className="formFirst"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              />
              <p className="warning">{errors.gender?.message}</p>
            </Col>
          </Row> */}
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Age</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("dob")}
                placeholder="Age"
                type="text"
                className="formFirst"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <p className="warning">{errors.dob?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Contact Number</p>
            </Col>
            <Col sm={8}>
              <input
                placeholder="Contact Number"
                type="text"
                className="formFirst"
                value={contactnumber}
                onChange={(e) => setContactnumber(e.target.value)}
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Diagnosis</p>
            </Col>
            <Col sm={8}>
              <textarea
                {...register("firstName")}
                placeholder="Diagnosis"
                type="text"
                className="formFirst"
                value={diagnosis}
                onChange={(e) => setDiagnosis(e.target.value)}
              />
            </Col>
          </Row>
          <div className="d-flex flex-row-reverse">
            <Link
              to="/departmentcamp"
              className="cssbuttons-io-button mt-3 mb-3 mx-2"
              onClick={() => storeData()}
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
        </form>
      </Row>
    </Container>
  );
}

PatientForm.propTypes = {};

export default PatientForm;
