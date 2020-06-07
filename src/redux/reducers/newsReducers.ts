export default (state = { news: [] }, action: any) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log(action.news);
      const newsData = action.news.map((data: any) => {
        return {
          ...data,
          votes: 0,
        };
      });
      return {
        ...state,
        news: newsData,
      };
    case "HIDE_NEWS":
      return {
        ...state,
        news: state.news.filter((data: any) => data.objectID !== action.id),
      };
    case "UP_VOTE":
      const newData = state.news.map((data: any) => {
        if (data.objectID === action.id) {
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
