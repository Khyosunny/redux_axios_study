import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUsers, loadingStart } from '../modules/main';
import axios from 'axios';
import Main from '../components/Main';


export default function MainContainer() {
  const { users, loading } = useSelector(state => ({
    users: state.main.users,
    loading: state.main.loading
  }), shallowEqual)
  const dispatch = useDispatch();


  const fetchUsers = async () => {
    dispatch(loadingStart());
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log('users: ', response.data)
      dispatch(getUsers(response.data))
    } catch (e) {
      console.log(e)
    }
  }
  
  useEffect(() => {
    fetchUsers()
  }, [])

  return <Main users={users} loading={loading}/>
}