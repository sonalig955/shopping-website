import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ForgetPass from './ForgetPass';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showForgetPassword, setShowForgetPassword] = useState(false); 
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleForgetPasswordClick = (event) => {
    event.preventDefault();
    setShowForgetPassword(true);
  };

  const handleSubmit = () => {
    if (email === '' || password === '') {
      setFormSubmitted(true);
    } else {
      console.log('Email:', email);
      console.log('Password:', password);
      navigate('/product');
    }
  };

  return (
    <>
    {showForgetPassword ? (
          <div style={{ padding: '20px' }}>
            
            <ForgetPass/>
            
          </div>
        ) : (
    <>
      <h1 style={{ color: 'white', position: 'relative', left: '62rem', fontFamily: 'Pacifico', width: '30rem', top: '3rem' }}>Login</h1>
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
        
          <div>
            <label style={{ position: 'absolute', left: '48px', top: '62px', color: 'white' }}>
              Email<span style={{ color: 'red' }}>*</span>
              <input type='text' value={email} onChange={handleEmailChange} placeholder='Email' required style={{ position: 'absolute', left: '-2px', top: '28px', width: '409px', borderRadius: '6px', height: '24px', border: formSubmitted && email === '' ? '1px solid red' : '1px solid #ccc' }} />
              {formSubmitted && email === '' && <span style={{ color: 'red', fontSize: '12px' }}>Email is required</span>}
            </label>

            <label style={{ color: 'white', position: 'absolute', top: '134px', left: '48px' }}>Password<span style={{ color: 'red' }}>*</span>
              <input type='password' value={password} onChange={handlePasswordChange} placeholder='Password' style={{ position: 'absolute', top: '34px', left: '-2px', borderRadius: '6px', height: '24px', width: '409px', border: formSubmitted && password === '' ? '1px solid red' : '1px solid #ccc' }} />
              {formSubmitted && password === '' && <span style={{ color: 'red', fontSize: '12px' }}>Password is required</span>}
            </label>
            <a href='/' style={{ position: 'absolute', top: '13rem', right: '2rem' }} onClick={handleForgetPasswordClick}>Forget Password ?</a>
            <button type="button" className="btn btn-primary" onClick={handleSubmit} style={{ position: 'relative', top: '240px', width: '418px', left: '0px', borderRadius: '6px', height: '31px' }}>Login</button>
          </div>
        
      </div>
      </>
      )}
      
    </>
  );
}

export default Login;
