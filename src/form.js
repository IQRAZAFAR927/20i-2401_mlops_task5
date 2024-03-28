import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email }),
      });
      alert('User saved successfully');
      console.log("User saved sucessfully");
      // Clear the form
      setName('');
      setEmail('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  return (
  
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto', display: 'flex', flexDirection: 'column', margintop:'100px', marginLeft:'400px',gap: '20px', backgroundColor: '#add8e6', padding: '200px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
    <h1>User Input</h1>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
  </form>
  
  );
}

export default Form;
