import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [instagram, setInstagram] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/generated-link?name=${encodeURIComponent(name)}&instagram=${encodeURIComponent(instagram)}`);
  };

  return (
    <div>
      <h2>Enter Your Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Instagram:</label>
          <input type="text" value={instagram} onChange={(e) => setInstagram(e.target.value)} required />
        </div>
        <button type="submit">Generate Link</button>
      </form>
    </div>
  );
};

export default Form;
