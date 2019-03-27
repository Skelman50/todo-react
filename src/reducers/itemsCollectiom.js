import { ADD_ITEM, DELETE_ITEM, GET_SAVED_ITEMS } from "../constants";

const initialState = [];

export default function itemsCollection(state = initialState, actions) {
  switch (actions.type) {
    case ADD_ITEM:
      return [...state, actions.payload];
    case DELETE_ITEM:
      return actions.payload;
    case GET_SAVED_ITEMS:
      return actions.payload;
    default:
      return state;
  }
}
