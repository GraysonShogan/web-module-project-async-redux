import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "./actions";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div className="App">
      {data &&
        data.map((item) => (
          <div key={item.id} className="App-item">
            <h2 className="App-title">{item.title}</h2>
            <p className="App-body">{item.body}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
