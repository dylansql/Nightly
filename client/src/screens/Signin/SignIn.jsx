import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../Layout/Layout';
import '../Signin/Signin.css'

export default function SignIn(props) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { username, password } = formData;
  const { handleLogin } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.log(value)

  return (
    <Layout>
      <div className="signform">
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin(formData);
      }}
    >
      <h3 id="signin-title">LOGIN</h3>
      <label>
        <input
          type='text'
          name='username'
          placeholder='USERNAME:'
          value={username}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        <input
          type='password'
          name='password'
          placeholder='PASSWORD:'
          value={password}
          onChange={handleChange}
        />
      </label>
      <br />
      <div className='signin-submit'>
        <button>Submit</button>
      </div>
      <Link to='/signup'>Need an Account? Sign Up</Link>
    </form>
    </div>
    </Layout>
  );
}
