import { Button } from 'antd';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <div>
      Unauthorized User. 
      <Button onClick={() => {
        <Navigate to={'/login'} />
      }}/>
    </div>
  );
}

export default Unauthorized;