import * as Yup from "yup";
import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
  if(event.reset) {
    return {
      dropdown: 'nil',

      count: 0,
      name: '',
      'gift-wrap': false,
    }
  }
  return {
    ...state,
    [event.name]: event.value
  }
  
 }


function FormAction() {

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  
  //form submission
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);
   alert('You have submitted the form.')
   setTimeout(() => {
     setSubmitting(false);
     setFormData({
      reset: true
    })
   }, 3000)
 }
  
    //handlechange 

    const handleChange = event => {
      const isCheckbox = event.target.type === 'checkbox';
      setFormData({
        name: event.target.name,
        value: event.target.value,
      });
    }

    return (
      <div className="wrapper">
       <h1>Enter Details Below</h1>

      {/* submitting */}
      {submitting &&
       <div>Submtting Form...</div>
     }
       {/* form entry */}
        <form onSubmit={handleSubmit}>
        <fieldset>
         <label>
           <p>Organizer</p>
           <input type= "text" name="name" onChange={handleChange} value={formData.name || ''}
           />
           
         </label>
       </fieldset>

       <fieldset>
         <label>
           <p>Dropdown</p>
           <select name="dropdown" onChange={handleChange} value={formData.dropdown || ''}>
               <option value="">--Please choose an option--</option>
               <option value="d1">opt1</option>
               <option value="d2">opt2</option>
               <option value="d3">opt3</option>
           </select>
         </label>
         <label>
           <p>Patient Entry</p>
           <input type="number" name="patentry" onChange={handleChange} step="1" value={formData.patentry || ''}/>
         </label>
         <label>
           <p>Outpatient</p>
           <input type="checkbox" name="outpatient" onChange={handleChange} value={formData['outpatient'] || false} />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
        </form>

        {/* form ends */}

        {/* data display */}

        {/* You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
         </ul> */}
      </div>
    )
    }
  
  export default FormAction;