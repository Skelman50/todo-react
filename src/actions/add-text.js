import { ADD_TEXT } from "../constants";

export function addText(text) {
  return {
    type: ADD_TEXT,
    payload: text,
  };
}
