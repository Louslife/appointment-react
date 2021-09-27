import React from "react";
import {
  Link
} from "react-router-dom";
import "../App.scss";

function Checkin() {

  const getNowTime = () => {

    const date = new Date();
    const nowTime = date.toLocaleString()
    return nowTime;
  }

  const time = getNowTime()

  return (
    <div className="container py-5 mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="title text-center ">
        <p>報到成功</p>
      </div>
      <div className="time-warp py-5 mt-4 text-center pt-3">
        <p>報到時間</p>
        <p>{time}</p>
      </div>
      <Link to="/" className="my-btn btn-red-w">回首頁</Link>
    </div>
  );
}

export default Checkin;