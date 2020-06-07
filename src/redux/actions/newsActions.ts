import axios from "axios";

export const newsActions = () => (dispatch: any) => {
  dispatch({
    type: "SIMPLE_ACTION",
    payload: "result_of_simple_action",
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
