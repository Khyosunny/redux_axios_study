//액션 타입
const LOADING = 'main/LOADING';
const GET_USERS = 'main/GET_USERS';

//액션 생성 함수
export const loadingStart = () => ({ type: LOADING });
export const getUsers = users => ({ type: GET_USERS, users });

// 초기 스테이트
const INITIAL_STATE = {
  loading: false,
  users: null
}

// 리듀서
export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USERS:
      return {
        ...state,
        loading: false,
        users: action.users
      }
    default:
      return state;
  }
  
}