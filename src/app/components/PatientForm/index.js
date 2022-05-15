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
              <p className="formNames">Date of Birth</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("dob")}
                placeholder="Date of Birth"
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
        </form>
      </Row>
    </Container>
  );
}

PatientForm.propTypes = {};

export default PatientForm;
