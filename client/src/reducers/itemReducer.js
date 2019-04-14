import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from '../actions/constants'

const initialState = {
  items: [],
  isLoading: false
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state,
        items: payload,
        isLoading: false
      }
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== payload)
      }
    case ADD_ITEM:
      return {
        ...state,
        items: [payload, ...state.items]
      }
    case ITEMS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    default:
      return state
  }
}
