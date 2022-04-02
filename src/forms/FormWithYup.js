import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./forms.css"

const inputSchema = yup.object().shape({
  name: yup
    .string()
    .required('Please enter name')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  age: yup
    .number()
    .required()
    .positive('enter valid age'),
  checkbox: yup.boolean().oneOf([true], 'unchecked'),
  dropdown: yup
    .string()
    .required('Please indicate your communications preference'),
});

const FormWithYup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ resolver: yupResolver(inputSchema) });
  return (
    <section className='form-section'>
      <form className='form-camp' onSubmit={handleSubmit(onsubmit)}>
        <div className='form-element'>
          <label className='form-label' htmlFor='organizer'>Organizer</label>
          <input id="organizer" {...register('name')} type="text" placeholder='enter name' />
        </div>
        <p className='yup_error'>{errors.name?.message}</p>
        <div className='form-element'>
          <label className='form-label' htmlFor='dropdown'>Dropdown</label>
          <select id="dropdown" {...register('dropdown')}  >
            <option value="" disabled selected hidden>--Please choose an option--</option>
            <option value="d1">opt1</option>
            <option value="d2">opt2</option>
            <option value="d3">opt3</option>
          </select>
        </div>
        <p className='yup_error'>{errors.dropdown?.message}</p>
        <p className='form-subtitle'>Patient Entry</p>
        <div className='form-element'>
          <label className='form-label' htmlFor="patient-age">Age</label>
          <input id="patient-age" {...register('age')} placeholder="enter age" />
        </div>
        <p className='yup_error'>{errors.age?.message}</p>
        <div className='form-element' >
          <label className='form-label' htmlFor='chk-outpatient'>Outpatient</label>
          <input className='chkbox' id="chk-outpatient" {...register('checkbox')} type="checkbox" />
        </div>

        {/* <p className='yup_error'>{errors.checkbox?.message}</p> */}
        <button className='center-hori' type="submit">SUBMIT</button>
      </form>

    </section>


  )
};
export default FormWithYup;