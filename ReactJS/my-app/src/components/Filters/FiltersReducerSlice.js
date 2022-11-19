const filterState = {
  search: "",
  status: "All",
  priority: [],
};

function filterReducer(state = filterState, action) {
  switch (action.type) {
    case "Filter/search":
      return {
        ...state,
        search: action.payload,
      };
    case "Filter/statusFilterChange":
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}

export default filterReducer;
