import React from "react";

class Header extends React.Component {
  render() {
    return (
        <div className="row header-top">
          <div className="col-6 logo">
            <h1 className="main-text">
              <i className="far fa-star-half"></i>STAR NEWS
            </h1>
          </div>
          <div className="col-6 search">
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </div>
    );
  }
}

export default Header;
