/**
 *
 * YupSchema
 *
 */

import React from "react";
import * as yup from "yup";

import "./yupSchemaStyle.scss";

const YupSchema = yup.object().shape({
  admin: yup
    .string()
    .required("Please Enter Username")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  companyname: yup
    .string()
    .required("Please Enter Company Name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  email: yup
    .string()
    .email("Must be a Valid Email")
    .max(255)
    .required("Email is required"),
  otp: yup
    .string()
    .matches(/^\d+$/, "Only numbers")
    .length(6, "Must be 6 digits")
    .required(),
  password: yup
    .string()
    .required("Password is Required")
    .min(6, "Password must be at least 6 characters"),
  userName: yup
    .string()
    .required("Please Enter Username")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  firstName: yup
    .string()
    .required("Please Enter a First Name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  lastName: yup
    .string()
    .required("Please Enter a Last Name")
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
  dob: yup.date().required("Date is required"),
  address: yup.string().required(),
  gender: yup.string().required("Please Select Gender"),
  aadharNumber: yup
    .string()
    .matches(/^\d+$/, "Only numbers")
    .length(12, "Must be 12 digits")
    .required(),
  panNumber: yup
    .string()
    .matches(/^\d+$/, "Only numbers")
    .length(10, "Must be 10 digits")
    .required(),
});

YupSchema.propTypes = {};

export default YupSchema;
