import { useState, useEffect } from "react";

function LoginComponent(props) {
  let [userName, setUserName] = useState("");
  let [userNameValid, setUserNameValidation] = useState(false);
  let [password, setPassword] = useState("");
  let [passwordValid, setPasswordValidation] = useState(false);

  let [disabled, setDisabled] = useState(true);
  // the use effect hook will be called everytime validation of password and username changed
  useEffect(() => {
    if (userNameValid === true && passwordValid === true) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [passwordValid, userNameValid]);
  // the submit handler function will be called when submit button clicked or enter key pressed
  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmit(userName, password);
  };
  // set user name value and change the validation
  const userNameHandler = (e) => {
    setUserName(e.target.value);
    e.target.event !== ""
      ? setUserNameValidation(true)
      : setUserNameValidation(false);
  };
  // set password value and change the validation
  const passwordHandler = (e) => {
    setPassword(e.target.value);
    e.target.value !== ""
      ? setPasswordValidation(true)
      : setPasswordValidation(false);
  };
  return (
    <form onSubmit={submitHandler} className="form">
      <input
        type="text"
        id="username-input"
        className="form__input"
        placeholder="User Name"
        onChange={userNameHandler}
        value={userName}
      />
      <input
        type="password"
        id="password-input"
        className="form__input"
        placeholder="Password"
        onChange={passwordHandler}
        value={password}
      />
      <input
        type="submit"
        id="login-button"
        className="form__submit"
        onClick={submitHandler}
        disabled={disabled}
      />
    </form>
  );
}

export default LoginComponent;
