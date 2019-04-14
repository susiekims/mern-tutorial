import uuid from 'uuid'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM } from '../actions/constants'

const initialState = {
  items: [
    {
      id: uuid(),
      name: 'Eggs'
    },
    {
      id: uuid(),
      name: 'Steak'
    },
    {
      id: uuid(),
      name: 'Milk'
    },
    {
      id: uuid(),
      name: 'Candy'
    }
  ]
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ITEMS:
      return {
        ...state
      }
    default:
      return state
  }
}
