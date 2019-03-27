import { DELETE_ITEM } from "../constants";

export function deleteItem(items) {
  return {
    type: DELETE_ITEM,
    payload: items,
  };
}
