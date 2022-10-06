import {
  USER_BASE_URL
} from '../constant/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUserList = createAsyncThunk(
  'user/getList',
  async (page = 1, thunkAPI) => {
    const response = await axios.get(USER_BASE_URL + 'api/users?page=' + page)
    
    const result = response?.data?.data.filter((obj) => { return (obj.first_name.startsWith('G') || obj.last_name.startsWith('W')) });
    let getNextPage = false;
    if(response?.data?.page !== response?.data?.total_pages){
      getNextPage = (response?.data?.page + 1);
    }
    return { data: result, fetchNextPage: getNextPage };
     
  }
) 