import React from "react";
import "../../App.scss";

class Typer extends React.Component {
  
  constructor(props) {
    super();
  }
  render() {
    return (
      <div id="typeWrap" className="type-wrap py-3">
        <div className="type-item" data-name={1} onClick={(e) => { this.props.handletypeing(e) }}>1</div>
        <div className="type-item" data-name={2} onClick={(e) => { this.props.handletypeing(e) }}>2</div>
        <div className="type-item" data-name={3} onClick={(e) => { this.props.handletypeing(e) }}>3</div>
        <div className="type-item" data-name={4} onClick={(e) => { this.props.handletypeing(e) }}>4</div>
        <div className="type-item" data-name={5} onClick={(e) => { this.props.handletypeing(e) }}>5</div>
        <div className="type-item" data-name={6} onClick={(e) => { this.props.handletypeing(e) }}>6</div>
        <div className="type-item" data-name={7} onClick={(e) => { this.props.handletypeing(e) }}>7</div>
        <div className="type-item" data-name={8} onClick={(e) => { this.props.handletypeing(e) }}>8</div>
        <div className="type-item" data-name={9} onClick={(e) => { this.props.handletypeing(e) }}>9</div>
        <div className="type-item" data-name="清空" onClick={(e) => { this.props.handleReset(e) }}>X</div>
        <div className="type-item" data-name={0} onClick={(e) => { this.props.handletypeing(e) }}>0</div>
        <div className="type-item" data-name="退回" onClick={(e) => { this.props.handleback(e) }}>←</div>
      </div>
    );
  }
}

export default Typer;