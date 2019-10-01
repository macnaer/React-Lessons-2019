import React, {Fragment} from "react";
import { connect } from "react-redux";

const Counter = ({ counter, name }) => {
  return (
    <Fragment>
      <div id="counter">{counter}</div>
      <button id="minus" className="btn btn-danger">
        -
      </button>
      <button id="plus" className="btn btn-success">
        +
      </button>
      <button id="null" className="btn btn-success">
        {name}
      </button>
      <button id="double" className="btn btn-warning">
        Double
      </button>
    </Fragment>
  );
}; 

const mapStateToProps = ({counter, name}) => {
    return {
      counter: counter,
      name: name
    };
}

export default connect(mapStateToProps)(Counter);