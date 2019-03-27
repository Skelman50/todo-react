import { ADD_TEXT } from "../constants";

const initialState = '';

export default function itemText(state = initialState, actions) {
  switch (actions.type) {
    case ADD_TEXT:
      return actions.payload;
    default:
      return state;
  }
}
