import React, { Component } from "react";
import "./LoginContainer.css";
import LoginForm from "../LoginForm/LoginForm";
import { NavLink } from "react-router-dom";
import infoIcon from "../../Assets/information.svg";

class LoginContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expandedLogIn: false,
      expandedRegister: false
    };
  }

  expandLogIn = () => {
    this.setState({
      expandedLogIn: !this.state.expandedLogIn
    });
  };

  expandRegister = () => {
    this.setState({
      expandedRegister: !this.state.expandedRegister
    });
  };

  render() {
    const { expandedLogIn } = this.state;
    const {
      toggleLogIn,
      storeUserInfo,
      loggedIn,
      setNotes,
      setFavorites,
      setCurrencies
    } = this.props;
    return (
      <div className="login-container">
        <NavLink to="/onboarding">
          <img src={infoIcon} className="info-button" alt="" />
        </NavLink>
        <h1 className={expandedLogIn ? "app-title-hidden" : "app-title"}>
          teller.
        </h1>
        <p className={expandedLogIn ? "hide-this" : "login-subtitle"}>
          Your Personal <br />
          CryptoCurrency Analyst
        </p>
        <p className={expandedLogIn ? "welcome-back-message" : "hide-this"}>
          Welcome Back
        </p>
        <div className="form-box">
          <div className={expandedLogIn ? "button-box" : "button-box-expanded"}>
            <button
              onClick={this.expandLogIn}
              className={expandedLogIn ? "hide-this-login" : "login"}
            >
              Log in
            </button>
            <LoginForm
              toggleLogIn={toggleLogIn}
              storeUserInfo={storeUserInfo}
              loggedIn={loggedIn}
              setNotes={setNotes}
              setFavorites={setFavorites}
              setCurrencies={setCurrencies}
            />
            <div>
              {this.state.expandedLogIn || (
                <NavLink to="/register">
                  <button className="register">Register</button>
                </NavLink>
              )}
            </div>
            <p
              onClick={this.expandLogIn}
              className={expandedLogIn ? "go-back-button" : "hide-this"}
            >
              Go Back
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginContainer;
