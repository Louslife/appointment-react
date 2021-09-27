import React from "react";
import "../../App.scss";

const Board = (props) => {

  const isTyped = props.isTyped;
  const typedValue = props.typedValue;

  return (
    <div className="board-controll py-3">
      {isTyped ? <div id="board" className="board text-center typing">{typedValue}</div> :
        <div id="board" className="board text-center">請用畫面鍵盤輸入電話號碼</div>
      }
    </div>
  )
}

export default Board;