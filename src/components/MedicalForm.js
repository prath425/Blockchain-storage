import React, { useState } from 'react';

const MedicalForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    medicalHistory: '',
    prescriptions: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Medical Information Submitted:', formData);
    // You can later link this to IPFS and blockchain here
    alert('Medical Information Submitted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Medical History:</label>
        <textarea
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Prescriptions:</label>
        <textarea
          name="prescriptions"
          value={formData.prescriptions}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MedicalForm;
