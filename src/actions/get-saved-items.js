import { GET_SAVED_ITEMS } from "../constants";

export function getSavedItems(items) {
  return {
    type: GET_SAVED_ITEMS,
    payload: items,
  };
}
