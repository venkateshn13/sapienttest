import { GET_NEWS, HIDE_NEWS, UP_VOTE } from "../actions/actionTypes";

/**
 * News Feed reducer.
 */
export default (state = { news: [], votesData: [] }, action: any) => {
  switch (action.type) {
    case GET_NEWS:
      const newsData = action.news.map((data: any) => {
        return {
          ...data,
          votes: localStorage.getItem(data.objectID)
            ? Number(localStorage.getItem(data.objectID))
            : 0,
        };
      });
      const vData = action.news.map((data: any) => {
        return {
          id: data.objectID,
          votes: localStorage.getItem(data.objectID)
            ? Number(localStorage.getItem(data.objectID))
            : 0,
        };
      });
      return {
        ...state,
        news: newsData,
        pageNo: action.pageNo,
        votesData: vData,
      };
    case HIDE_NEWS:
      return {
        ...state,
        news: state.news.filter((data: any) => data.objectID !== action.id),
      };
    case UP_VOTE:
      const newData = state.news.map((data: any) => {
        if (data.objectID === action.id) {
          localStorage.setItem(action.id, (Number(data.votes) + 1).toString());
          return {
            ...data,
            votes: data.votes + 1,
          };
        } else {
          return data;
        }
      });
      const chartData = newData.map((data: any) => {
        return {
          id: data.objectID,
          votes: localStorage.getItem(data.objectID)
            ? Number(localStorage.getItem(data.objectID))
            : 0,
        };
      });
      return {
        ...state,
        news: newData,
        votesData: chartData,
      };
    default:
      return state;
  }
};
