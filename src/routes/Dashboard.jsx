import { Button, Table } from 'antd';
import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../api/userApi';
import { userColumn } from '../components/tableColumn/user';
import { resetToInitial } from '../reducers/userReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state, shallowEqual);

  useEffect(() => {
    dispatch(getUserList());
  }, [])

  return (
    <div>
      Dashboard
      <Button onClick={() => {
        dispatch(resetToInitial())
        dispatch(getUserList(1))
      }}>Get User</Button>
     
      <Table
        dataSource={users.users.length ? users.users : []}
        columns={userColumn}
        loading={users?.loading}
      />
    </div>
  );
}

export default Dashboard;