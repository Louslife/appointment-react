import React from "react";
import { useState } from "react";
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import "./App.scss";

import Header from "./components/Header";
import Home from "./components/home/Home";
import Info from "./components/Info";
import Checkin from "./components/Checkin";
import NoMatch from "./components/NoMatch";

export default function App(props) {

  const [hostId, setHostId] = useState("")
  const [totp, setTotp] = useState("")
  const [reservation, setReservation] = useState("")
  const [token, setToken] = useState("")

  const history = useHistory()

  return (
    <>
      <Header />
      <Switch>

        <Route exact path="/" render={() =>
          <Home
            push={history.push}
            setHostId={setHostId}
            setReservation={setReservation}
            setTotp={setTotp}
            hostId={hostId}
            totp={totp}
            reservation={reservation}
            setToken={setToken}
          />} >
        </Route>

        <Route path="/checkin">
          <Checkin />
        </Route>

        <Route path="/info" render={() =>
          <Info
            reservation={reservation}
            token={token}
          />}>
        </Route>

        <Route path="*">
          <NoMatch />
        </Route>

      </Switch>
    </>
  );
}





