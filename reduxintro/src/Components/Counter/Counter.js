import React, {Fragment} from "react";
import { connect } from "react-redux";
import { INC, DEC, ZERO, DOUBLE, DIV } from "../../Actions/Action";

const Counter = ({ counter, DEC, INC, ZERO, DOUBLE, DIV }) => {
  return (
    <Fragment>
      <div>{counter}</div>
      <button  onClick={DEC} className="btn btn-danger">
        Minus
      </button>
      <button onClick={INC} className="btn btn-success">
        Plus
      </button>
      <button  onClick={ZERO} className="btn btn-success">
        Zero
      </button>
      <button  onClick={DOUBLE} className="btn btn-warning">
        Double
      </button>
      <button  onClick={DIV} className="btn btn-default">
        Divisuin
      </button>
    </Fragment>
  );
}; 
const mapStateToProps = ({CounterReducer}) => {  // Деструктуризація. Дістаємо необхідний redcer
  console.log("state = > ", CounterReducer);
  return {
    counter: CounterReducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    INC: () => dispatch(INC()),
    DEC: () => dispatch(DEC()),
    ZERO: () => {
      const zeroCounter = 0;
      dispatch(ZERO(zeroCounter));
    },
    DOUBLE: () => {
      const multi = 2;
      dispatch(DOUBLE(multi));
    },
    DIV: () => {
      const division = 2;
      dispatch(DIV(division));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);