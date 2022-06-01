import {useState, useEffect} from "react";
import axios from "axios";
import {Button} from "@mui/material";

interface article {
  title: string;
  cover_image: string;
  description: string;
  url: string;
}

const BlogPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("https://dev.to/api/articles?username=sulaimonolaniran")
      .then(res => {
        console.log(res.data);
        setArticles(res.data);
      });
  }, []);

  return (
    <div className="blog-page-container">
      <div className="overlay-image" />
      <div className="overlay-color" />

      <div className="blog-page-inner-container">
        <div className="blog-page-header-container">
          <h1>
            <span>Blog</span> Posts
          </h1>
        </div>
        <div className="blog-page-articles-container">
          {articles.map((article: article) => {
            return (
              <div className="each-article-container">
                <div
                  className="article-cover-image"
                  style={{backgroundImage: `url(${article.cover_image})`}}
                />
                <div className="article-details-container">
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button color="primary" variant="outlined">
                      Read More On DevTo
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
