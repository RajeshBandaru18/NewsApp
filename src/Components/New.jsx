import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class New extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey TopHeadLines</h2>
        <div className="row">
          <div className="col-md-3">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
          <div className="col-md-3">
            <NewsItem title="myTitle" description="myDesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default New;
