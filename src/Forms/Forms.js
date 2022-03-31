import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./forms.css";

const inputSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  age: yup
    .number()
    .required()
    .positive('enter valid age'),
  // dob: yup
  //   .date()
  //   .required('Date is required')
  //   .test('DOB', 'Please choose a valid date of birth', value => {
  //     return moment().diff(moment(value), 'years') >= 18;
  //   }),
  checkbox: yup.boolean().oneOf([true], 'unchecked'),
  dropdown: yup
    .string()
    .required('Please indicate your communications preference'),
});
const Forms = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(inputSchema) });
  return (
    <form onSubmit={handleSubmit}>
      <p>Organizer</p>
      <input {...register('name')} type="text" placeholder='enter name' />
      <p>{errors.name?.message}</p>
      <p>Dropdown</p>
      <select {...register('dropdown')}>
        <option value="" disabled selected hidden>--Please choose an option--</option>
        <option value="d1">opt1</option>
        <option value="d2">opt2</option>
        <option value="d3">opt3</option>
      </select>
      <p>{errors.dropdown?.message}</p>

      <p>Patient Entry</p>
      <input {...register('age')} placeholder="enter age" />
      <p>{errors.age?.message}</p>

      <p>Outpatient</p>
      <input {...register('checkbox')} type="checkbox" />
      <p>{errors.checkbox?.message}</p>
      <button type="submit">Submit</button>
    </form>


  )
};
export default Forms;