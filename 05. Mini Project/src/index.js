import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import APIService from "./APIClient/api";
import './index.css';

// Components
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import NewsList from "./Components/NewsList/NewsList";

class App extends React.Component{
    apiService = new APIService();

    state ={
        NewsList : []
    }

    constructor(){
        super();
        this.updateNews();
    }


    updateNews(){
        this.apiService.getNews("ua")
        .then(({articles}) => {
            //console.log(articles);
            this.setState({
              NewsList: articles
            });
        })
        .catch(err => console.log(err));
    }

    render(){
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


