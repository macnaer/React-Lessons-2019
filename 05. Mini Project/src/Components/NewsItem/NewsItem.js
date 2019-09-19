import React, { Fragment } from "react";

class NewsItem extends React.Component {
  state = {
    title: null,
    author: null,
    description: null,
    img: null,
    newsID: null
  };

  updateNewsItem = () => {
    const { title, author, description, img, publishedAt } = this.props;
    this.setState({
      title: title,
      author: author,
      description: description,
      img: img,
      publishedAt: publishedAt
    });
  };

  componentDidMount() {
    this.updateNewsItem();
  }

  onDetail = () => {
    const id = this.state.publishedAt;
    this.props.onNewsDetail(id);
  }

  render() {
    //console.log("props => ", this.props);
    //console.log("state => ", this.state);
    const { title, author, description, img } = this.state;
    return (
      <Fragment>
        <div className="row blocks">
          <div className="col block1">
            <div className="label">News</div>
            <div id="sport">
              <h3 className="newsTitle">{title}</h3>
              <div className="newsAuthor">{author}</div>
              <div className="newsInfo">
                <div className="newsDescription col">{description}</div>
                <img src={img} alt className="newsImage" />
              </div>
              <button
                type="button"
                className="btn btn-success"
                onClick={this.onDetail}
              >
                Read more
              </button>
              <div style={{color: 'white'}}>{this.state.newsID}</div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewsItem;
