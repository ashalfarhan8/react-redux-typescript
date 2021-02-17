import { Dispatch } from "react";
import { API_URL } from "../constants";
import { CreateAction, FetchAction, Post } from "../types";
import { FETCH_POST, NEW_POST } from "./actions";

// This actions will invoked if this actions registered to the connect()() method from "react-redux"
// Then it can be used inside of a component
export function fetchPosts() {
  return function (dispatch: Dispatch<FetchAction>) {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) =>
        // After received the data from fetching
        // Send a dispatch action with the type of fetching props,
        // and the payload that will be sent is the data
        // So that the reducer will manage the payload
        // see postReducer.ts
        dispatch({
          type: FETCH_POST,
          payload: data,
        })
      )
      .catch((err) => console.error(err.message));
  };
}

export function createPost(postData: Post) {
  return function (dispatch: Dispatch<CreateAction>) {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((res) => res.json())
      .then((data) =>
        // After receiving data from post request to the API
        // the api will response the data that we sent
        // Then send a dispatch action with type of new post,
        // and the payload that will be sent is the data
        dispatch({
          type: NEW_POST,
          payload: data,
        })
      )
      .catch((err) => console.error(err.message));
  };
}
