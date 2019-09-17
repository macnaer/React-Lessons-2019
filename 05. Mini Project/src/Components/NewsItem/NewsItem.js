import React, {Fragment} from "react";


class NewsItem extends React.Component{
    render(){
        return (
          <Fragment>
            <div className="row blocks">
              <div className="col block1">
                <div className="label">SPORT</div>
                <div id="sport"> </div>
              </div>
              <div className="col block2">
                <div className="label">ENTERTAINMENT</div>
                <div id="entertainment"></div>
              </div>
            </div>

            <div className="row blocks">
              <div className="col block3">
                <div className="label">SCIENCE</div>
                <div id="science"></div>
              </div>
              <div className="col block4">
                <div className="label">HEALTH</div>
                <div id="health"></div>
              </div>
            </div>

            <div className="row blocks">
              <div className="col-7 block5">
                <div className="label">TEHNOLOGY</div>
                <div id="technology"></div>
              </div>
              <div className="col-4 block6">
                <div className="label">FACTS</div>
                <div className="facts"></div>
              </div>
            </div>
          </Fragment>
        );
    }
}

export default NewsItem;