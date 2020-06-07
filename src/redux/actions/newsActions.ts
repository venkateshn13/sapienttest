import axios from "axios";

export const hideNewsAction = (id: string) => (dispatch: any) => {
  dispatch({
    id,
    type: "HIDE_NEWS",
  });
};

export const upVoteAction = (id: string) => (dispatch: any) => {
    dispatch({
      id,
      type: "UP_VOTE",
    });
  };

export const getNews = () => {
  console.log("GetUsers");

  return (dispatch: any) => {
    console.log("GetUsers dispatch");

    axios
      .get(`https://hn.algolia.com/api/v1/search`)
      .then((response) => {
        dispatch({
          type: "GET_NEWS",
          news: response.data.hits,
        });
      });
  };
};
