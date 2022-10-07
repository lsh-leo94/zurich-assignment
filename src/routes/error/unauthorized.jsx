import { Button } from 'antd';
import React from 'react';
import { useNavigate } from "react-router-dom";

const Unauthorized = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      Unauthorized User. 
      <div>
        <Button onClick={() => {
          navigate('/login')
        }}>Go to Login</Button>
      </div>
    </div>
  );
}

export default Unauthorized;