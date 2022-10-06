import React from 'react';
import { Input, Button } from 'antd';
import { login } from '../../reducers/authReducer'
import { useDispatch } from 'react-redux';
import Helmet from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleLogin = () => {
    dispatch(login())
  } 

  window.handleGoogle = (response) => {
    if(response?.clientId && response?.credential){
      dispatch(login('google'))
    }
  }
  return (
  <>
    <Helmet>
      <script src="https://accounts.google.com/gsi/client" async defer></script>
    </Helmet>
    <div>
      <div>
        Username : <Input />
      </div>
      <div>
        Password : <Input />  
      </div>
      <div>
        <Button onClick={() => handleLogin()}>Login</Button>
        <Button>Sign Up</Button>
        <Button onClick={() => { navigate('/dashboard') }}>Go to home</Button>
        
      </div>
        
      <div id="g_id_onload"
          data-client_id="129480443626-50nmpj4dgq4fft7qnb7to60uhba2a0ak.apps.googleusercontent.com"
          data-context="signin"
          data-ux_mode="popup"
          data-callback="handleGoogle"
          data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
          data-type="standard"
          data-shape="rectangular"
          data-theme="outline"
          data-text="signin_with"
          data-size="large"
          data-logo_alignment="left">
      </div>
    </div>
    
  </>
  );
}

export default Login;