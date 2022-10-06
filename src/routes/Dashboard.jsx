import { Button, Table } from 'antd';
import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getUserList } from '../api/userApi';
import { userColumn } from '../components/tableColumn/user';
import { resetToInitial } from '../reducers/userReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state, shallowEqual);
  const [ userList, setUserList] = useState({});

  useEffect(() => {
    dispatch(resetToInitial());
  }, [])

  useEffect(() => {
    if(users?.fetchNextPage){
      dispatch(getUserList(users?.fetchNextPage));
    }
    else{
      const data = users?.users.map((obj,i) => {
        return {
          key: i,
          ...obj
        }
      })
      setUserList(data);
    }
  }, [users])

  

  return (
    <div>
      Dashboard
      <Button onClick={() => {
        dispatch(getUserList(1))
      }}>Get User</Button>
      {console.log(userList)}
      <Table
        dataSource={userList.length ? userList : []}
        columns={userColumn}
        laoding={users?.loading}
      />
    </div>
  );
}

export default Dashboard;