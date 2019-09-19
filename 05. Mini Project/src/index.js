import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import APIService from "./APIClient/api";
import './index.css';

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NewsList from "./Components/NewsList/NewsList";

class App extends React.Component {
  apiService = new APIService();

  state = {
    NewsList: []
  };

  // lifecycle hooks
  // MOUNTING

  componentDidMount() {
    console.log("componentDidMount");
    this.updateNews();
  }
  // UPADTE
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  // UNMOUNTING
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  getDerivenStateFromProps(){
    console.log("getDerivenStateFromProps");
  }
  // getSnapshotBeforeUpdate(){
  //   console.log("getSnapshotBeforeUpdate");
  // }
  // ERROR
  componentDidCatch(){
    console.log("componentDidCatch");
  }

  // lifecycle hooks

  updateNews() {
    this.apiService
      .getNews("ua")
      .then(({ articles }) => {
        //console.log(articles);
        this.setState({
          NewsList: articles
        });
      })
      .catch(err => console.log(err.message));
  }

  render() {
    console.log("render");
    const List = this.state.NewsList;
    //console.log( "STATE => ",this.state.NewsList);
    return (
      <Fragment>
        <header>
          <div className="container-fluid ">
            <div className="container">
              <Header />
              <Navbar />
            </div>
          </div>
        </header>
        <NewsList List={List} />
      </Fragment>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));


