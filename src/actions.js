export const fetchData = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    dispatch({
      type: "FETCH_DATA",
      payload: data,
    });
  };
};
