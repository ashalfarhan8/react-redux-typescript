import { FETCH_POST, NEW_POST } from "../actions/actions";
import { Action, PostState } from "../types";

const initialState = {
  items: [],
  item: {},
};

export default function postReducer(
  state: PostState = initialState,
  action: Action
) {
  switch (action.type) {
    case FETCH_POST:
      return {
        ...state,
        // Set the fetched data from payload to items
        items: action.payload,
      };
    case NEW_POST:
      return {
        ...state,
        // Add the payload to the first index of existing items array
        items: [action.payload, ...state.items],
      };
    default:
      return state;
  }
}
