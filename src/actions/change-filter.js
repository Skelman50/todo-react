import { CHANGE_FILTER } from "../constants";

export function changeFilter(type) {
  return {
    type: CHANGE_FILTER,
    payload: type,
  };
}
