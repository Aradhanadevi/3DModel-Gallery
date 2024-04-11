import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import login from './images/br3.png';
// import Bgimg from './images/6.jpg'

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: '', password: '' , name:''});
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Send login request to the server
    try {
      const response = await fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      const data = await response.json();

      if (response.ok) {
        // Login successful, navigate to home page
        localStorage.setItem('name', data.name);
        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        console.log(data.name);
        navigate('/home');
      } else {
        // Login failed, display error message
        setError(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src={login} className="img-fluid" alt="Sample image" />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    name="email"
                    value={credentials.email}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-label" htmlFor="form3Example3">Email address</label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg"
                    placeholder="Enter password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    required
                  />
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
                <div>
                  <div>Don't have an account? <a href={'/signup'}> Sign Up</a> </div>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
    <button type="submit" className="btn btn-info btn-lg btn-block w-100">Login</button>
</div>
                {error && <div className="alert alert-danger mt-3">{error}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
