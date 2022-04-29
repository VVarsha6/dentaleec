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
    // <div className="organisationForm">
    //   <section className="form-section">
    //     <form className="form-camp" onSubmit={handleSubmit(onsubmit)}>
    //       <p className="form-subtitle">Organisation Entry</p>
    //       <div className="form-element">
    //         <label className="form-label" htmlFor="organizer">
    //           Organizer
    //         </label>
    //         <div className="input-format">
    //           <input
    //             id="organizer"
    //             {...register("name")}
    //             type="text"
    //             placeholder="enter name"
    //           />
    //         </div>
    //       </div>
    //       <p className="yup_error">{errors.name?.message}</p>
    //       <div className="form-element">
    //         <label className="form-label" htmlFor="dropdown">
    //           Dropdown
    //         </label>
    //         <select id="dropdown" {...register("dropdown")}>
    //           <option value="" disabled selected hidden>
    //             --Please choose an option--
    //           </option>
    //           <option value="d1">opt1</option>
    //           <option value="d2">opt2</option>
    //           <option value="d3">opt3</option>
    //         </select>
    //       </div>
    //       <p className="yup_error">{errors.dropdown?.message}</p>
    //       <div className="form-element">
    //         <label className="form-label" htmlFor="patient-age">
    //           Age
    //         </label>
    //         <input
    //           className="input-format"
    //           id="patient-age"
    //           {...register("age")}
    //           placeholder="enter age"
    //         />
    //       </div>
    //       <p className="yup_error">{errors.age?.message}</p>
    //       <div className="form-element">
    //         <label className="form-label" htmlFor="chk-outpatient">
    //           Outpatient
    //         </label>
    //         <input
    //           className="chkbox"
    //           id="chk-outpatient"
    //           {...register("checkbox")}
    //           type="checkbox"
    //         />
    //       </div>
    //       <button className="center-hori" type="submit">
    //         SUBMIT
    //       </button>
    //     </form>
    //   </section>
    // </div>
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
          <button class="cssbuttons-io-button mb-3">
            {" "}
            Next
            <div class="icon">
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
          </button>
        </form>
      </Row>
    </Container>
  );
}

OrganisationForm.propTypes = {};

export default OrganisationForm;
