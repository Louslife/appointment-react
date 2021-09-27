import React from "react";
import {
  Link
} from "react-router-dom";
import "../App.scss";

import { ReactComponent as Warning } from './../images/warning.svg';

function NoMatch() {

  return (
    <div className="container text-center">
      <div className="not-find-warp my-5">
        <div className="not-find-img">
          <Warning></Warning>
        </div>
        <div className="not-find-code">404</div>
        <di className="not-find-info">發生了錯誤，稍等一下幫您轉回首頁。如果沒有跳轉，請按回首頁。</di>
        <div className="btn-warp">

            <Link to="/" className="my-btn btn-outline-gray my-4">
              回首頁
            </Link>

        </div>
      </div>
    </div>

  );
}


export default NoMatch;