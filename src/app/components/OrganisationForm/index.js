/**
 *
 * OrganisationForm
 *
 */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupSchema from "../YupSchema";
import { Container, Row, Col } from "reactstrap";

import "./organisationFormStyle.scss";

function OrganisationForm() {
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
              <p className="formNames">Organizer Name</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Organizer Name"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Date</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Date"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Location</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Location"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames">Incharger Name</p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Incharger Name"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames"></p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Incharger Name"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
            </Col>
          </Row>
          <Row className="formContents">
            <Col sm={3}>
              <p className="formNames"></p>
            </Col>
            <Col sm={8}>
              <input
                {...register("firstName")}
                placeholder="Incharger Name"
                type="text"
                className="formFirst"
              />
              <p className="warning">{errors.firstName?.message}</p>
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

OrganisationForm.propTypes = {};

export default OrganisationForm;
