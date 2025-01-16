const initialState = "";

const CategoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "queryCate":
      return action.status !== undefined ? action.status : state;
    case "reset":
      return action.resetStatus
    default:
      return state;
  }
};

export default CategoryReducer;
