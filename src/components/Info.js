import React from "react";
import { Link } from "react-router-dom";
import "../App.scss";

import { apiVerifyReservation } from "../apis";

function Info(props) {

  const reservation = props.reservation;
  const reservationDate = reservation.startDate.replace(/-/g, "/");
  console.log(props.token)

  const verifyReservation = () => {
    console.log(props.token)
    apiVerifyReservation({
      headers: {
        'x-auth': props.token
      },
      params: {
        reservationId: reservation.id
      }
    })
  }

  return (
    <div className="container">
      <dl className="info-list text-center pt-3">
        <dd>
          <h5>飼主名稱</h5>
          <p>{reservation.memberName} 先生/小姐</p>
        </dd>
        <dd>
          <h5>寵物名稱</h5>
          <p>{reservation.petName}</p>
        </dd>
        <dd>
          <h5>醫師名稱</h5>
          <p>「」 醫師</p>
        </dd>
        <dd>
          <h5>預約日期/時間</h5>
          <p>{reservationDate}　{reservation.startTime}</p>
        </dd>
      </dl>
      <div className="note">
        <p className="text-center">請確認資料是否正確，正確請按報到</p>
      </div>
      <div className="btn-warp">
        <button onClick={verifyReservation} className="my-btn btn-red-w">
          報到
        </button>

        <Link to="/" className="my-btn btn-outline-gray">
          重新輸入
        </Link>
      </div>
    </div>
  );
}


export default Info;