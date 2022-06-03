import { GET_BOOKS, IS_AUTHENTICATED } from "./constant";

const bookReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_BOOKS:
      return {
        ...state,
        books: payload,
        books_loading: false
      }
    case IS_AUTHENTICATED:
      return {
        ...state,
        isAuthenticated: payload
      }
    default:
      return state
  }
}

export default bookReducer