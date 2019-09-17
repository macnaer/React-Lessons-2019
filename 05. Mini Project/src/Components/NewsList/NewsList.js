import React from "react";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ List }) => {
  console.log("NewsList => ",List);
  const newItem = List.map((item) => {
      return {}
  })
  return (
    <main>
      {/* <div className="container mainBody">{newItem}</div> */}
    </main>
  );
};

export default NewsList;
