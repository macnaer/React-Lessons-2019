import React from 'react';
import ReactDOM from 'react-dom';
import APIService from "./APIClient/api";
import './index.css';

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
        console.log( "STATE => ",this.state.NewsList);
        return (
          <div>
            
          </div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById('root'));


