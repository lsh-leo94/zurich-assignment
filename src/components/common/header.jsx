import { Button } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/authReducer';

const Header = (props) => {
  const dispatch = useDispatch();
  return (
    <div>
      Header here
      <Button onClick={() => {
        dispatch(logout());
      }}>Logout</Button>
    </div>
  );
}

export default Header;