
import React, {useState} from 'react';
import Login from './Login';

function Registration({ showLogin, handleRegisterClick, handleLoginLinkClick }) {
  
  const [indiviual, setindiviuals] = useState('false')
  const handleindiviuals = (event) =>{
    event.preventDefault()
    setindiviuals(true)
  }


  

  const handleRegisterClickLocal = (event) => {
    handleLoginLinkClick(event);
    handleRegisterClick();
     
  };

 
  

  return (
    <>
    
      {!showLogin ? (
        <>
              <h1 style={{ color: 'white', position: 'relative', left: '62rem', fontFamily: 'Pacifico', width: '30rem', top: '3rem' }}>Registration</h1>
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
        <label style={{ color: 'white', position: 'absolute', left: '32px', top: '12px' }}>
          Individuals
          <input type='radio' name='label' required onClick={handleindiviuals}/>
        </label>
        <label style={{ color: 'white', position: 'absolute', left: '13rem', top: '12px' }}>
          Enterprises
          <input type='radio' name='label' required />
        </label>
        <label style={{ color: 'white', position: 'absolute', left: '373px', top: '12px' }}>
          Government
          <input type='radio' name='label' required />
        </label>
        <br />
        {indiviual ?(
          <>
        <label style={{ position: 'relative', top: '27px', left: '-135px', color: 'white' }}>
          First Name<span style={{ color: 'red' }}>*</span><br />
          <input type='text' placeholder='First Name' required style={{ position: 'absolute', top: '33px', left: '-1px', borderRadius: '6px', height: '24px' }} />
        </label>
        <label style={{ position: 'relative', top: '25px', left: '1rem', color: 'white' }}>
          Last Name<span style={{ color: 'red' }}>*</span>
          <input type='text' placeholder='Last Name' style={{ position: 'absolute', left: '-1px', top: '34px', borderRadius: '6px', height: '24px' }} />
        </label>
        </>
        ): 
        <label>Organization<input type='text' placeholder='organization'/></label>}
        <br />
        <label style={{ position: 'relative', left: '-196px', top: '62px', color: 'white' }}>
          Email<span style={{ color: 'red' }}>*</span>
          <input type='text' placeholder='Email' required style={{ position: 'absolute', left: '-1px', top: '28px', width: '409px', borderRadius: '6px', height: '24px' }} />
        </label>
        <br />
        <label style={{ position: 'relative', top: '91px', left: '-42px', color: 'white' }}>
          Address<span style={{ color: 'red' }}>*</span><br />
          <input type='text' placeholder='Address' style={{ position: 'absolute', top: '34px', left: '-1px', width: '407px', borderRadius: '6px', height: '24px' }} />
        </label>
        <label htmlFor="cars" style={{ position: 'relative', top: '151px', left: '135px', color: 'white' }}>
          State<span style={{ color: 'red' }}>*</span>
        </label>
        <select id="cars" name="cars" style={{ position: 'relative', top: '178px', left: '91px', width: '183px', borderRadius: '6px', height: '24px' }}>
        <option value="">Select State</option>
          <option value="a">Andhra Pradesh</option>
          <option value="b">Arunachal Pradesh</option>
          <option value="c">Gujrat</option>
          <option value="d">Uttar Pradesh</option>
        </select>
        <label htmlFor="cars" style={{ position: 'relative', top: '150px', left: '-330px', color: 'white' }}>
          Country<span style={{ color: 'red' }}>*</span>
        </label>
        <select id="cars" name="cars" style={{ position: 'relative', top: '155px', left: '14px', width: '183px', borderRadius: '6px', height: '24px' }}>
          <option value="">Select Country</option>
          <option value="a">Australia</option>
          <option value="b">Canada</option>
          <option value="c">Germany</option>
          <option value="d">India</option>
        </select>
        <label htmlFor="cars" style={{ position: 'relative', top: '180px', left: '-168px', color: 'white' }}>
          City<span style={{ color: 'red' }}>*</span>
        </label>
        <select id="cars" name="cars" style={{ position: 'relative', top: '205px', left: '-203px', width: '185px', borderRadius: '6px', height: '24px' }}>
        <option value="">Select City</option>
          <option value="gkp">Gorakhpur</option>
          <option value="sh">Shahanabad</option>
          <option value="gonda">gonda</option>
          <option value="am">Amaravati</option>
        </select>
        <label htmlFor="cars" style={{ position: 'relative', top: '180px', left: '-145px', color: 'white' }}>
          Pincode<span style={{ color: 'red' }}>*</span>
        </label>
        <input type='text' placeholder="Pincode" style={{ position: 'relative', top: '179px', left: '205px', borderRadius: '6px', height: '24px' }} />
        <label htmlFor="cars" style={{ position: 'relative', top: '208px', left: '-222px', color: 'white' }}>
          Mobile Number<span style={{ color: 'red' }}>*</span>
        </label>
        <select id="cars" name="cars" style={{ position: 'relative', top: '236px', left: '-341px', width: '60px', borderRadius: '6px', height: '24px' }}>
        <option value="">Select Code</option>
          <option value="a">+91</option>
          <option value="b">+101</option>
          <option value="b">+88</option>
          <option value="d">+33</option>
        </select>
        <input type='text' placeholder='Mobile Number' style={{ position: 'relative', top: '211px', left: '71px', borderRadius: '6px', height: '24px' }} />
        <label style={{ position: 'relative', top: '239px', left: '-183px', color: 'white' }}>Fax</label>
        <input type='text' placeholder='011-55541234' style={{ position: 'relative', top: '264px', left: '-208px', borderRadius: '6px', height: '24px' }} />
        <label style={{ position: 'relative', top: '241px', left: '-154px', color: 'white' }}>Phone</label>
        <input type='text' placeholder='011-55541234' style={{ position: 'relative', top: '241px', left: '246px', borderRadius: '6px', height: '24px' }} />
        <label style={{ position: 'relative', top: '273px', left: '-180px', color: 'white' }}>Password<span style={{ color: 'red' }}>*</span></label>
        <input type='text' style={{ position: 'relative', top: '300px', left: '-255px', borderRadius: '6px', height: '24px' }} />
        <label style={{ position: 'relative', top: '249px', left: '203px', color: 'white' }}>Confirm Password<span style={{ color: 'red' }}>*</span></label>
        <input type='text' style={{ position: 'relative', top: '277px', left: '68px', borderRadius: '6px', height: '24px' }} />
        <button 
        type="button"
        onClick={handleRegisterClickLocal}
         className="btn btn-primary"
          style={{ position: 'relative', top: '313px', width: '441px', left: '-2px', borderRadius: '6px', height: '31px' }}>
            Register
            </button>
            

           
      </div>
      </>
      
      ) : (
        <Login />
      )}
      
      

      
    </>
  );
}

export default Registration;
