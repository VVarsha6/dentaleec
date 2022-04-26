/**
 *
 * OrganisationForm
 *
 */

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import YupSchema from "../YupSchema";

import "./organisationFormStyle.scss";

function OrganisationForm() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(YupSchema) });
  return (
    <div className="organisationForm">
      <section className="form-section">
        <form className="form-camp" onSubmit={handleSubmit(onsubmit)}>
          <p className="form-subtitle">Organisation Entry</p>
          <div className="form-element">
            <label className="form-label" htmlFor="organizer">
              Organizer
            </label>
            <div className="input-format">
              <input
                id="organizer"
                {...register("name")}
                type="text"
                placeholder="enter name"
              />
            </div>
          </div>
          <p className="yup_error">{errors.name?.message}</p>
          <div className="form-element">
            <label className="form-label" htmlFor="dropdown">
              Dropdown
            </label>
            <select id="dropdown" {...register("dropdown")}>
              <option value="" disabled selected hidden>
                --Please choose an option--
              </option>
              <option value="d1">opt1</option>
              <option value="d2">opt2</option>
              <option value="d3">opt3</option>
            </select>
          </div>
          <p className="yup_error">{errors.dropdown?.message}</p>
          <div className="form-element">
            <label className="form-label" htmlFor="patient-age">
              Age
            </label>
            <input
              className="input-format"
              id="patient-age"
              {...register("age")}
              placeholder="enter age"
            />
          </div>
          <p className="yup_error">{errors.age?.message}</p>
          <div className="form-element">
            <label className="form-label" htmlFor="chk-outpatient">
              Outpatient
            </label>
            <input
              className="chkbox"
              id="chk-outpatient"
              {...register("checkbox")}
              type="checkbox"
            />
          </div>
          <button className="center-hori" type="submit">
            SUBMIT
          </button>
        </form>
      </section>
    </div>
  );
}

OrganisationForm.propTypes = {};

export default OrganisationForm;
