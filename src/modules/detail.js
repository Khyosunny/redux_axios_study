//액션 타입
const LOADING = 'detail/LOADING';
const GET_USER = 'detail/GET_USER';

//액션 생성 함수
export const loadingStart = () => ({ type: LOADING });
export const getUser = user => ({ type: GET_USER, user });

// 초기 스테이트
const INITIAL_STATE = {
  loading: false,
  user: null
}

// 리듀서
export default function detail(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.user
      }
    default:
      return state;
  }
}