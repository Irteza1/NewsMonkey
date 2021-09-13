import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import propTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 6,
  };

  static propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
  };
  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  constructor(props) {
    super(props);
    console.log("News Component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: this.totalResults,
    };
    document.title = `${this.capitalizeFirstLetter(
      this.props.category
    )} -NewsMonkey`;
  }

  async componentDidMount() {
this.props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47a64e02552747639fae76be24d9d7c9&page=1&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    this.props.setProgress(30);
  

    let data = await fetch(url);
    this.props.setProgress(50);

    let parsedData = await data.json();
    this.props.setProgress(70);

    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 });
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=47a64e02552747639fae76be24d9d7c9&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({
      loading: true,
    });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };
  render() {
    return (
      
      <>
        <h1 className="text-center" style={{ margin: "30px 0px" }}>
          NewsMonkey - Top Headline on{" "}
          {this.capitalizeFirstLetter(this.props.category)}
        </h1>
       
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<div className="text-center"><Spinner /></div>}
        >
            <div className="container ">
          <div className="row ">
            {this.state.articles.map((elements) => {
              return (
                <div className="col-md-4" key={elements.url}>
                  <NewsItem
                    title={elements.title}
                    description={elements.description}
                    imgUrl={elements.urlToImage}
                    newsUrl={elements.url}
                    publishedAt={elements.publishedAt}
                    author={elements.author}
                  />
                </div>
              );
            })}
          </div>
          </div>
        </InfiniteScroll>
        
      </>
    );
  
  
  }
}

export default News;
