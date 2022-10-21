import {
  USER_BASE_URL
} from '../constant/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getUserAPI = async (page) => {
  const response = await axios.get(USER_BASE_URL + 'api/users?page=' + page)
    
  const result = response?.data?.data.filter((obj) => { return (obj.first_name.startsWith('G') || obj.last_name.startsWith('W')) });
  let getNextPage = false;
  if(response?.data?.page !== response?.data?.total_pages){
    getNextPage = true;
  }
 
  return { data: result, fetchNextPage: getNextPage }
}

export const getUserList = createAsyncThunk(
  'user/getList',
  async (page = 1, thunkAPI) => {
    
    let data = [];
    let currentPage = page;
    let nextPage = true;
    let limitCall = 5;
    let call = 0;
    while(nextPage === true && call < limitCall){
      const apiResult = await getUserAPI(currentPage);
      nextPage = apiResult?.fetchNextPage;
      if(apiResult?.data){
        data = data.concat(apiResult?.data);
      }
      call++;

      if(apiResult?.fetchNextPage){
        currentPage++;
      }
    }

    return { data: data };
  }
) 