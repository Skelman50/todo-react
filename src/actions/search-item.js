import { SEARCH_ITEM } from "../constants";

export function searchItem(text) {
  return {
    type: SEARCH_ITEM,
    payload: text,
  };
}
