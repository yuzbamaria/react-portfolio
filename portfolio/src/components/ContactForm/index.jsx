import React, { useState } from 'react';
// import './style.css';

function Form() {
    // Setting the component's initial state
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      password: '',
    });
  
    const handleInputChange = (event) => {
      // Getting the value and name of the input which triggered the change
      let value = event.target.value;
      const name = event.target.name;
  
      if (name === 'password') {
        value = value.substring(0, 15);
      }
      // Updating the input's state
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleFormSubmit = (event) => {
      // Preventing the default behavior of the form submit (which is to refresh the page)
      event.preventDefault();
      if (!formData.firstName || !formData.lastName) {
        alert('Fill out your first and last name please!');
      } else if (formData.password.length < 6) {
        alert(
          `Choose a more secure password ${formData.firstName} ${formData.lastName}`
        );
      } else {
        alert(`Hello ${formData.firstName} ${formData.lastName}`);
      }
  
      setFormData({
        firstName: '',
        lastName: '',
        password: '',
      });
    };
  
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {formData.firstName} {formData.lastName}
        </p>
        <form className="form">
          <input
            value={formData.firstName}
            name="firstName"
            onChange={handleInputChange}
            type="text"
            placeholder="First Name"
          />
          <input
            value={formData.lastName}
            name="lastName"
            onChange={handleInputChange}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={formData.password}
            name="password"
            onChange={handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
  
  export default Form;
  