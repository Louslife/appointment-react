import React from "react";
import "../../App.scss";

const ConfirmBtn = (props) => {
  
  return (<div className="py-3">
    <div className="my-btn-xl btn-red-w" onClick={(e) => props.handleConfirm(e)}>
      {props.children}
    </div>
  </div>);
}

export default ConfirmBtn;