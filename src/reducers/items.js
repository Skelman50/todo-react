import { ADD_ITEM, UPDATE_ITEMS, DELETE_ITEM } from "../constants";

const initialState = [];

export default function items(state = initialState, actions) {
  switch (actions.type) {
    case ADD_ITEM:
      return [...state, actions.payload];
    case UPDATE_ITEMS:
      return actions.payload;
    case DELETE_ITEM:
      return actions.payload;
    default:
      return state;
  }
}
