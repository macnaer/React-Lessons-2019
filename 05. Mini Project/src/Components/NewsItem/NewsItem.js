import React, { Fragment } from "react";

class NewsItem extends React.Component {
  state = {
    title: null,
    author: null,
    description: null,
    img: null
  };

  updateNewsItem = () => {
    const { title, author, description, img } = this.props;
    this.setState({
      title: title,
      author: author,
      description: description,
      img: img
    });
  }

  componentDidMount(){
    this.updateNewsItem();
  }

  render() {
    // console.log("props => ", this.props);
    console.log("state => ", this.state);
    const { title, author, description, img } = this.state;
    return (
      <Fragment>
        <div className="row blocks">
          <div className="col block1">
            <div className="label">News</div>
            <div id="sport">
              <div className="newsAuthor">{author}</div>
              <div className="newsAuthor">{title}</div>
              <div className="newsAuthor">{description}</div>
              <img src={img} alt />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NewsItem;
