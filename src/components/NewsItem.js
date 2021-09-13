import React, { Component } from "react";
export class NewsItem extends Component {
  constructor() {
    super();
    console.log("NewsItem Component");
  }
  render() {
    let { title, description, imgUrl, newsUrl, publishedAt,author } = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={ imgUrl? imgUrl: "https://www.investors.com/wp-content/uploads/2017/05/stock-bull-bear-2-adobe.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">New</span>

            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text">By {author?author:"unknown"} On {new Date(publishedAt).toGMTString()}</p>
            

            
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default NewsItem;
