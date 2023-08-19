import React, { useState, useEffect } from "react";
import { data } from "../model";
import axios from "axios";

const GetData = () => {
  const [getData, setGetData] = useState<data[]>([]);

  useEffect(() => {
    axios.get("http://localhost:3001/todo").then((res) => {
      setGetData(res.data);
    });
  }, []);
  // console.log(getData); 

  return (
    <>
      {getData.map((da, index) => {
        return <div key={index}>{da.todo}</div>;
      })}
    </>
  );
};

export default GetData;
