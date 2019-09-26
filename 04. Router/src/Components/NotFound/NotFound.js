import React from "react";
import MainMenu from "../Menu/Menu";

class NotFound extends React.Component{
    render(){
        return(
            
            <div>
                <MainMenu />
                <h1>404 Not found</h1>
            </div>
        );
    }
}

export default NotFound;