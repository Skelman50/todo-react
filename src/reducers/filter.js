import { CHANGE_FILTER } from "../constants";

const initialState = 'all';

export default function changeFilter(state = initialState, actions) {
  switch (actions.type) {
    case CHANGE_FILTER:
      return actions.payload;
    default:
      return state;
  }
}
