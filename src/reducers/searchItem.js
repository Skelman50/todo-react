import { SEARCH_ITEM } from "../constants";

const initialState = '';

export default function searchText(state = initialState, actions) {
  switch (actions.type) {
    case SEARCH_ITEM:
      return actions.payload;
    default:
      return state;
  }
}
