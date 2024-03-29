import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";  // Assuming migration is in the same directory, adjust if necessary
import Row from "react-bootstrap/Row";
import NewsCard from "./NewsCard";  // Adjust the path if you store NewsCard in a different directory

const dummyNews = {
  title: null,
  description: null,
  link: null,
  date: null,
};

const newsArray = [
  {
    title: "",
    description: "",
    link: "",
    tweet: "",
    date: ""
  }, 
  {
    title: "",
    description: "",
    link: "",
    tweet: "",
    date: ""
  }, 
  {
    title: "",
    description: "",
    link: "",
    tweet: "",
    date: ""
  },  
  {
    title: "",
    description: "",
    tweet: "",
    date: "",
    present: ""
  }
];

const NewsSection = ({ heading }) => {
  const [newsItems, setNewsItems] = useState([]);

  useEffect(() => {
    // Set the news directly. If you have an API or some other mechanism in the future, fetch the news here.
    setNewsItems(newsArray);
  }, []);

  return (
    <Jumbotron fluid id="news" className="bg-light m-0">
      <Container className="">
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <Row>
          {newsItems.length
            ? newsItems.map((news, index) => (
                <NewsCard
                  key={`news-card-${index}`}
                  id={`news-card-${index}`}
                  value={news}
                />
              ))
            : new Array(10).fill(dummyNews).map((news, index) => (
                <NewsCard
                  key={`dummy-${index}`}
                  id={`dummy-${index}`}
                  value={news}
                />
              ))}
        </Row>
      </Container>
    </Jumbotron>
  );
};

export default NewsSection;

