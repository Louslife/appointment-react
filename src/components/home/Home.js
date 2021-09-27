import React from "react";
import { useState, useEffect } from "react";
// import { useLocation } from "react-router-dom";
import "../../App.scss";
import TypeController from "./TypeController";
import { apiVerify, apiCheckinReservation } from "./../../apis";

const Home = (props) => {

  // const [dataToken,setDataToken] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")
  // console.log()
  

  // const searchString = useLocation().search;
  const searchString = window.location.search;

  const handleGetReservation = async () => {
    const reser = await reservation()
    props.setReservation(reser)
  };

  const reservation = async () => {

    console.log("3")
    const dataToken = await getToken();
    console.log("3-1");
    console.log(dataToken)
    const token = dataToken.accessToken;
    props.setToken(token);
    const dataReservation = await getReservation(token);
    const reservation = dataReservation.reservation
    console.log("3-2")
    console.log("reservation", reservation)
    return reservation;

  }

  useEffect(() => {
    const asyncGetQueryStr = async () => {
      const queryString = await getQuery();
      props.setHostId(queryString.hostId);
      props.setTotp(queryString.totp);

    }
    asyncGetQueryStr()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("hostId", props.hostId)
  const getQuery = () => {
    const search = new URLSearchParams(searchString);
    const urlQuery = {};
    urlQuery.totp = search.get('totp');
    urlQuery.hostId = search.get('hostId');
    return urlQuery;
  }

  const getToken = async () => {
    console.log("4")
    const userPosition = await getPosition();
    console.log("4-1")
    console.log("hostId", props.hostId)
    console.log(props)
    const { data } = await apiVerify({
      params: {
        totp: props.totp,
        hostId: props.hostId,
        latitude: userPosition.latitude,
        longitude: userPosition.longitude
      }
    });
    console.log("data", data);
    console.log("4-2")
    return data;
  };

  const getReservation = async (token) => {
    const { data } = await apiCheckinReservation({
      headers: {
        'x-auth': token
      },
      params: {
        phoneNumber: phoneNumber
      }
    });
    return data;
  };

  const asyncGetCurrentPosition = positionOptions => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, positionOptions);
  });

  const getPosition = async () => {
    const positionResult = await asyncGetCurrentPosition();
    const { latitude, longitude } = positionResult.coords;
    return { latitude, longitude };
  };
  getPosition()

  return (
    <main>
      <TypeController
        reservation={props.reservation}
        handleGetReservation={handleGetReservation}
        setPhoneNumber={setPhoneNumber}
        phoneNumber={phoneNumber}
        {...props} />
    </main>
  )
}

export default Home;