import { GET_NEWS, HIDE_NEWS, UP_VOTE } from "../actions/actionTypes";

/**
 * News Feed reducer.
 */
export default (state = { news: [] }, action: any) => {
  switch (action.type) {
    case GET_NEWS:
      console.log(action.news);
      const newsData = action.news.map((data: any) => {
        return {
          ...data,
          votes: localStorage.getItem(data.objectID)
            ? localStorage.getItem(data.objectID)
            : 0,
        };
      });
      return {
        ...state,
        news: newsData,
        pageNo: action.pageNo,
      };
    case HIDE_NEWS:
      return {
        ...state,
        news: state.news.filter((data: any) => data.objectID !== action.id),
      };
    case UP_VOTE:
      const newData = state.news.map((data: any) => {
        if (data.objectID === action.id) {
          localStorage.setItem(action.id, data.votes + 1);
          return {
            ...data,
            votes: data.votes + 1,
          };
        } else {
          return data;
        }
      });
      return {
        ...state,
        news: newData,
      };
    default:
      return state;
  }
};
