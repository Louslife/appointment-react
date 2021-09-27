import React from "react";
import "../../App.scss";

import ConfirmBtn from "./ConfirmBtn";
import Board from "./Board";
import Typer from "./Typer";

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const doSwal = withReactContent(Swal);

class TypeController extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isTyped: false,
      isConfirm: false,
      typedValue: "",
      history: [],
      stepNumber: 0,
      swalMassge: {
        title: "",
        text: "",
        icon: "",
        confirmButtonText: ""
      }
    };

  }

  handletypeing = async (e) => {

    if (this.state.stepNumber < 9) {
      const name = e.target.getAttribute("data-name");
      this.setState({
        typedValue: this.state.typedValue + name,
        isTyped: true,
        history: this.state.history.concat(this.state.typedValue),
        stepNumber: this.state.history.length
      }, () => {
        console.log(`addNum ${name} | typedValue`, this.state.typedValue, "isTyped", this.state.isTyped, "history", this.state.history, "stepNumber", this.state.stepNumber)
        this.hendleChangeisConfirm()
      });
    } else {
      await this.hendleSwalMsgPhoneOver10Err();
      await this.handleSwal(this.state.swalMassge);
      await this.handleReset();
    }

  }

  handleConfirm = async (e) => {

    console.log("1")
    if (this.state.isConfirm) {
      let data
      try {
        data = await this.hendleGetdeta();
      } catch (error) {
        console.log(error)
      }

      if (data) {
        this.props.push("/info")
      } else {
        this.hendleSwalMsgData(data)
        this.handleSwal(this.state.swalMassge)
      }
    } else {
      await this.hendleSwalMsgPhoneVeryfyErr();
      await this.handleSwal(this.state.swalMassge);

    }
    this.handleReset();

  }
  
  hendleGetdeta = async () => {

    const data = {};
    data.phoneNumber = await this.props.setPhoneNumber(this.state.typedValue);
    data.reservation = await this.props.handleGetReservation();
    return data;

  }

  handleSwal = (msg) => {

    console.log("msg", msg)
    doSwal.fire({
      title: msg.title,
      text: msg.text,
      icon: msg.icon,
      confirmButtonText: msg.confirmButtonText,
    })

  };

  hendleSwalMsgPhoneOver10Err = () => {

    this.setState({
      swalMassge: {
        title: '錯誤！',
        text: "不能超過10個號碼喔！",
        icon: 'error',
        confirmButtonText: '知道了'
      }
    })

  };

  hendleSwalMsgPhoneVeryfyErr = () => {

    this.setState({
      swalMassge: {
        title: '錯誤！',
        text: `這不是一個合法的電話號碼！`,
        icon: 'error',
        confirmButtonText: '知道了'
      }
    })

  };

  hendleSwalMsgData = (data) => {

    if (!data) {
      this.setState({
        swalMassge: {
          title: '驗證問題',
          text: `電話號碼與資料庫資料不相符，請重新輸入`,
          icon: 'error',
          confirmButtonText: '知道了'
        }
      })
    }

  };


  handleback = () => {

    if (this.state.stepNumber > 0) {
      this.setState({
        typedValue: this.state.history[this.state.stepNumber],
        stepNumber: this.state.stepNumber - 1,
        history: this.state.history.slice(0, this.state.stepNumber)
      }, () => {
        console.log(this.state.isTyped, "history", this.state.history, "stepNumber", this.state.stepNumber)
        this.hendleChangeisConfirm();
      })
    } else {
      this.handleReset()
    }

  };

  handleConfirmPhone = (phoneNumber) => {

    const reg = new RegExp(/^(0\d{1,2})-?(\d{6,7})(#\d+)?$/);
    return reg.test(phoneNumber);

  };

  hendleChangeisConfirm = () => {

    if (this.handleConfirmPhone(this.state.typedValue)) {
      this.setState({
        isConfirm: true
      }, () => { console.log("isConfirm", this.state.isConfirm) })
    } else {
      this.setState({
        isConfirm: false
      }, () => { console.log("isConfirm", this.state.isConfirm) })
    }
  };

  handleReset = () => {

    this.setState({
      isTyped: false,
      isConfirm: false,
      typedValue: "",
      history: [],
      stepNumber: 0,
    });

  };

  render() {
    return (
      <div className="container text-center">
        <Board
          isTyped={this.state.isTyped}
          typedValue={this.state.typedValue}
        ></Board>
        <Typer
          handletypeing={this.handletypeing}
          handleReset={this.handleReset}
          handleback={this.handleback}
        ></Typer>
        <ConfirmBtn
          handleConfirm={this.handleConfirm}
        >確認</ConfirmBtn>
      </div>
    );
  }
}

export default TypeController;