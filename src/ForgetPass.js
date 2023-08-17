import React, { useState } from 'react';

function ForgetPass() {
  const [email, setEmail] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    setFormSubmitted(true);

    
    if (!email) {
     
      alert('Email is required');
    } else if (!isValidEmail(email)) {
      
      alert('Invalid email format');
    } else {
      
      alert('Reset email sent!');
    }
  };

  const isValidEmail = (email) => {
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1 style={{ color: 'white', position: 'relative', left: '62rem', fontFamily: 'Pacifico', width: '30rem', top: '3rem' }}>Forget Password</h1>
      <div style={{
        border: '2px solid #474242',
        height: '600px',
        width: '500px',
        marginTop: '1rem',
        marginLeft: '29rem',
        zIndex: '1',
        position: 'relative',
        left: '33rem',
        borderRadius: '15px',
        top: '55px',
      }}>
        <label style={{ position: 'absolute', left: '48px', top: '62px', color: 'white' }}>
          Email<span style={{ color: 'red' }}>*</span>
          <input
            type='text'
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
            required
            style={{
              position: 'absolute',
              left: '-2px',
              top: '28px',
              width: '409px',
              borderRadius: '6px',
              height: '24px',
              border: formSubmitted && !email ? '1px solid red' : '1px solid #ccc',
            }}
          />
          {formSubmitted && !email && <span style={{ color: 'red', fontSize: '12px' }}>Email is required</span>}
        </label>

        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
          style={{ position: 'relative', top: '158px', width: '418px', left: '0px', borderRadius: '6px', height: '31px' }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default ForgetPass;
