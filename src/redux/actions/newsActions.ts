import axios from "axios";
import { GET_NEWS, HIDE_NEWS, UP_VOTE } from "./actionTypes";

/**
 * Hide news action.
 * @param id string
 */
export const hideNewsAction = (id: string) => (dispatch: any) => {
  dispatch({
    id,
    type: HIDE_NEWS,
  });
};

/**
 * Upvote action
 * @param id string
 */
export const upVoteAction = (id: string) => (dispatch: any) => {
  dispatch({
    id,
    type: UP_VOTE,
  });
};

/**
 * Get news action.
 */
export const getNews = (pageNo: number) => {
  return (dispatch: any) => {
    axios
      .get(`https://hn.algolia.com/api/v1/search?page=${pageNo}&hitsPerPage=15`)
      .then((response) => {
        dispatch({
          type: GET_NEWS,
          news: response.data.hits,
          pageNo: response.data.page,
        });
      });
  };
};
