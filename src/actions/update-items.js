import { UPDATE_ITEMS } from "../constants";

export function updateItems(items) {
  return {
    type: UPDATE_ITEMS,
    payload: items,
  };
}
