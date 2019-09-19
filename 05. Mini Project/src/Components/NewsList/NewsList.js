import React from "react";
import NewsItem from "../NewsItem/NewsItem";

const NewsList = ({ List, onNewsDetail }) => {
  // console.log("NewsList => ",List);
  const newItem = List.map(item => {
    //console.log("one item => ", item);

    return (
      <NewsItem
        author={item.author}
        title={item.title}
        description={item.description}
        img={item.urlToImage}
        publishedAt={item.publishedAt}
        onNewsDetail={() => onNewsDetail(item.publishedAt)}
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
