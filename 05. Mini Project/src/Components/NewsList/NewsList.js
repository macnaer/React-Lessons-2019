import React from "react";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ List, onNewsDetail }) => {
  // console.log("NewsList => ",List);
  let newsID = 0;
  const newItem = List.map(item => {
    //console.log("one item => ", item);
    newsID++;
    return (
      <NewsItem
        newsID={newsID}
        author={item.author}
        title={item.title}
        description={item.description}
        img={item.urlToImage}
        onNewsDetail={() => onNewsDetail(newsID)}
      />
    );
  });
  return (
    <main>
      <div className="container mainBody">{newItem}</div>
    </main>
  );
};

export default NewsList;
