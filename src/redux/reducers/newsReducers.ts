export default (state = {}, action: any) => {
  switch (action.type) {
    case "GET_NEWS":
      console.log("action", action);
      return {
        ...state,
        news: action.news,
      };
    default:
      return state;
  }
};
