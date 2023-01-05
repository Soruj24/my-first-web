import React from "react";

function getDateString(dateTimeStr) {
  return new Date(dateTimeStr).toDateString();
}

const NewsItem = (item) => {
  <div className="card mb-4">
    {item.urlToImage && (
      <img className="card-img-top" src={item.urlToImage} alt={item.title} />
    )}
    <div className="card-body">
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#424242" }}
      >
        <h4 className="card.title">{item.title}</h4>
      </a>
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#424242" }}
      >
        {item.content}
      </a>
      <div className="mt-2 d-flex align-item-center">
        <small>
          <strong>Published at {getDateString(item.publishedAt)}</strong>
        </small>
        <div
          style={{
            padding: "0.25rem 0.5rem",
            background: "#ededed",
            color: "#242442",
            borderRadius: "0.25rem",
            display: "inline-block",
          }}
        >
          <small>{item.source.name}</small>
        </div>
      </div>
    </div>
  </div>;
};
function NewsList(News) {
  return (
    <div>
      {News && News.length === 0 && <h4>There is No News</h4>}
      {News && News.map((item) => <NewsItem key={item.title} item={item} />)}
    </div>
  );
}

export default NewsList;
