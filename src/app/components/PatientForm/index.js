/**
 *
 * PatientForm
 *
 */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupSchema from "../YupSchema";
import { Container, Row, Col } from "reactstrap";

import "./patientFormStyle.scss";

function PatientForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(YupSchema) });
  return (
    <Container fluid>
      <Row>
        <form onSubmit={handleSubmit(onsubmit)}>
          <Row>
            <Row className="formContents w-50">
              <Col sm={3}>
                <p className="formNames">Yellow</p>
              </Col>
              <Col sm={8}>
                <input
                  {...register("name")}
                  placeholder="Patient ID"
                  type="text"
                  className="formFirst"
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
                  {...register("name")}
                  placeholder="Patient ID"
                  type="text"
                  className="formFirst"
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
                {...register("name")}
                placeholder="Patient ID"
                type="text"
                className="formFirst"
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
              />
              <p className="warning">{errors.name?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Gender</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("gender")}
                placeholder="Gender"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.gender?.message}</p>
            </Col>
          </Row>
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
                {...register("firstName")}
                placeholder="Contact Number"
                type="text"
                className="formFirst"
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
              />
            </Col>
          </Row>
        </form>
      </Row>
    </Container>
  );
}

PatientForm.propTypes = {};

export default PatientForm;
