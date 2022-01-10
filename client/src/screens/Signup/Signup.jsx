import { Link } from 'react-router-dom'
import { useState } from 'react';
import Layout from '../../Layout/Layout';

export default function SignUp(props) {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const { username, email, password } = formData;
  const { handleRegister } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <div className="signupform">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <h3 id="signup-title">WELCOME TO NIGHTLY</h3>
      <label>
        <input
          type='text'
          name='username'
          placeholder='Username:'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input 
        type='text' 
        name='email' 
        placeholder='Email:'
        value={email} 
        onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type='password'
          name='password'
          placeholder='Create Password:'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className='signin-submit'>
      <button>Signup</button>
      </div>
      <div className='signin'>
      <Link to='/signin'>Already have an Account? Sign In</Link>
      </div>
    </form>
    </div>
    </Layout>
  );
}
