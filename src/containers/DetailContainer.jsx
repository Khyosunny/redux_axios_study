import React, { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getUser, loadingStart } from '../modules/detail';
import axios from 'axios';
import Detail from '../components/Detail';



export default function DetailContainer({id}) {
  const { user, loading } = useSelector(state => ({
    loading: state.detail.loading,
    user: state.detail.user
  }), shallowEqual);
  const dispatch = useDispatch();

  const fetchUser = async (n) => {
    dispatch(loadingStart());
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${n}`)
      console.log('user: ', response.data)
      dispatch(getUser(response.data));
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchUser(id);
  }, [id])
  return <Detail user={user} loading={loading} />
}